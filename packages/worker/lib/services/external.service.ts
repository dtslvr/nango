import type { Sync } from '@nangohq/core';
import type { AxiosResponse, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import _ from 'lodash';
import type { RawObject } from '../models/raw_object.model.js';
import { logger } from '@nangohq/core';
import parseLinksHeader from 'parse-link-header';

class ExternalService {
    async getRawObjects(sync: Sync): Promise<any[]> {
        if (sync.id == null) {
            return [];
        }

        var results: any[] = [];
        let done = false;
        let pageCursor = null;
        let maxNumberOfRecords = sync.max_total || 10000;
        sync.body = sync.body || {};

        while (!done) {
            let config: AxiosRequestConfig = { headers: sync.headers || {}, params: sync.query_params || {} };
            var res: AxiosResponse<any, any> | void;
            let errorBlock = (err: any) => {
                console.log(err);
            };

            //  Fetching subsequent page with cursor.
            if (pageCursor != null && sync.paging_cursor_request_path != null) {
                if (['get', 'delete'].includes(sync.method)) {
                    config.params[sync.paging_cursor_request_path] = pageCursor; // Cursor in query params.
                } else if (['post', 'put', 'patch'].includes(sync.method)) {
                    sync.body[sync.paging_cursor_request_path] = pageCursor; // Cursor in body params.
                }
            }

            switch (sync.method) {
                case 'get': {
                    res = await axios.get(sync.url, config).catch(errorBlock);
                    break;
                }
                case 'post': {
                    res = await axios.post(sync.url, sync.body, config).catch(errorBlock);
                    break;
                }
                case 'put': {
                    res = await axios.put(sync.url, sync.body, config).catch(errorBlock);
                    break;
                }
                case 'patch': {
                    res = await axios.patch(sync.url, sync.body, config).catch(errorBlock);
                    break;
                }
                case 'delete': {
                    res = await axios.delete(sync.url, config).catch(errorBlock);
                    break;
                }
                default: {
                    console.log('Unknown HTTP method.');
                    return [];
                }
            }

            if (res == null) {
                break;
            }

            logger.debug(`External request's data:`);
            logger.debug(res.data);

            logger.debug(`External request's headers:`);
            logger.debug(res.headers);

            let newResults = sync.response_path != null ? _.get(res.data, sync.response_path) : res.data;
            results = results.concat(newResults);

            // Cursor-based pagination (with cursor field in the metadata of the response).
            if (
                sync.paging_cursor_metadata_response_path != null &&
                _.get(res.data, sync.paging_cursor_metadata_response_path) &&
                results.length < maxNumberOfRecords
            ) {
                pageCursor = _.get(res.data, sync.paging_cursor_metadata_response_path);
                continue;
            }

            // Cursor-based pagination (with cursor field in the last object of the response).
            if (
                sync.paging_cursor_object_response_path != null &&
                _.get(newResults[newResults.length - 1], sync.paging_cursor_object_response_path) &&
                results.length < maxNumberOfRecords
            ) {
                pageCursor = _.get(newResults[newResults.length - 1], sync.paging_cursor_object_response_path);
                continue;
            }

            // URL-based pagination (with URL field in the metadata of the response).
            if (sync.paging_url_path != null && this.isValidHttpUrl(_.get(res.data, sync.paging_url_path)) && results.length < maxNumberOfRecords) {
                sync.url = _.get(res.data, sync.paging_url_path);
                continue;
            }

            // URL-based pagination (with URL field in the Link header).
            if (sync.paging_header_link_rel != null && res.headers['link'] != null) {
                let linkHeader = parseLinksHeader(res.headers['link']);

                if (linkHeader != null && sync.paging_header_link_rel in linkHeader && this.isValidHttpUrl(linkHeader[sync.paging_header_link_rel]['url'])) {
                    let nextPageUrl = linkHeader[sync.paging_header_link_rel]['url'];
                    sync.url = nextPageUrl;
                    continue;
                }
            }

            done = true;
        }

        if (results.length > maxNumberOfRecords) {
            results = results.slice(0, maxNumberOfRecords);
        }

        let rawObjs: RawObject[] = [];

        for (var rawObj of results) {
            rawObjs.push({
                sync_id: sync.id,
                data: rawObj,
                unique_key: sync.unique_key != null ? _.get(rawObj, sync.unique_key, undefined) : undefined,
                emitted_at: new Date()
            });
        }

        return rawObjs;
    }

    isValidHttpUrl(str: string) {
        var pattern = new RegExp(
            '^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$',
            'i'
        ); // fragment locator
        return !!pattern.test(str);
    }
}

export default new ExternalService();
