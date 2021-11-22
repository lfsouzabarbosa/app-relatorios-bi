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

async function selectDisplay(Data){
    const conn = await connect();
    const sql = 'SELECT sum(Clicks) as clicks FROM gDisplay WHERE DATE BETWEEN "2021-08-12" AND "2021-09-20" '
    // const values = [Data.inicio, Data.final]
    //return await conn.query('SELECT * FROM gDisplay LIMIT 2;'
    return await conn.query(sql)
}

module.exports = {selectDisplay}