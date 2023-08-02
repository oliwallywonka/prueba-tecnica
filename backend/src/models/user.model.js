const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'User',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        nombres: {
            type: 'varchar',
        },
        primer_apellido: {
            type: 'varchar',
        },
        segundo_apellido: {
            type: 'varchar',
        },
        usuario: {
            type: 'varchar',
        },
        password: {
            type: 'varchar',
        },
    },
});