// Create connection
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

// CREATE TABLE

knex.schema.createTable('employee', (table) => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.date('date')
    table.string('city')
    table.string('state')
    table.integer('position_id')
}).then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err });
    // .finally(() => {
    //     knex.destroy();
    // });

knex.schema.createTable('position', (table) => {
    table.increments('id')
    table.string('title')
    table.string('department')
    table.string('description')
    table.integer('salary')
}).then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });

knex.schema.createTable('department', (table) => {
    table.increments('id')
    table.string('electronics')
    table.string('automotive')
    table.string('sporting_good')
}).then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err });
    // .finally(() => {
    //     knex.destroy();
    // });

// SEED DATABASE
const employees = [
    { first_name: 'Ray', last_name: 'Dunning', date: '2020-05-01', city: 'Killeen', state: 'Texas', position_id: 1 },
    { first_name: 'Zach', last_name: 'Yusuf', date: '2020-06-05', city: 'Austin', state: 'Texas', position_id: 2 },
    { first_name: 'Martin', last_name: 'Ramos', date: '2020-04-21', city: 'Killeen', state: 'Texas', position_id: 3 },
    { first_name: 'Aaron', last_name: 'Evans', date: '2020-04-01', city: 'Killeen', state: 'Texas', position_id: 4 },
    { first_name: 'Josh', last_name: 'Halsey', date: '2020-05-06', city: 'Killeen', state: 'Texas', position_id: 5 }
]

knex('employee').insert(employees).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err });
    // .finally(() => {
    //     knex.destroy();
    // });



module.exports = knex;
