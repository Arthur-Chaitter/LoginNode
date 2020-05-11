
exports.up = function(knex) {
    return knex.schema.createTable('admin', function(table){
        table.increments('id');
        table.string('type').notNullable();
        table.string('username').notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('admin');
};
