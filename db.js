async function connect(){
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

const mysql = require ("mysql2/promise");
const connection = await mysql.createConnection("mysql://luizbarbosa:luizbarbosa@191.252.120.13/techandsoul");
console.log('conectado');
global.connection = connection;
return connection;
}
connect ();

async function selectDisplay(){
    const conn = await connect();
    return await conn.query('SELECT * FROM gDisplay LIMIT 100;')
}

module.exports = {selectDisplay}