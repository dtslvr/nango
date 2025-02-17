exports.up = function (knex, _) {
    var schema = process.env['NANGO_DB_SCHEMA'] || 'nango';
    return knex.schema.withSchema(schema).createTable('_nango_syncs', function (table) {
        table.increments('id').primary();
        table.timestamps(true, true);
        table.string('url').notNullable();
        table.string('method').notNullable();
        table.json('headers');
        table.json('body');
        table.json('query_params');
        table.string('unique_key');
        table.string('response_path');
        table.string('paging_cursor_request_path');
        table.string('paging_cursor_metadata_response_path');
        table.string('paging_cursor_object_response_path');
        table.string('paging_url_path');
        table.string('paging_header_link_rel');
        table.integer('max_total');
        table.boolean('auto_mapping');
    });
};

exports.down = function (knex, _) {
    var schema = process.env['NANGO_DB_SCHEMA'] || 'nango';
    return knex.schema.withSchema(schema).dropTable('_nango_syncs');
};
