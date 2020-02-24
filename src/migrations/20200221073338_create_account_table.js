exports.up = knex => knex.schema.createTable('account', t => {
    t.increments('id').primary();
    t.string('name').notNull();
    t.integer('user_id').notNull();
    t.foreign('user_id').references('user.id');
});

exports.down = knex => knex.schema.dropTable('account');
