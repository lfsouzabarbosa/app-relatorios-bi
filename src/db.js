async function connect() {
  if (global.connection && global.connection.state !== 'disconnected')
    return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection("mysql://luizbarbosa:luizbarbosa@191.252.120.13/techandsoul");
  console.log('conectado');
  global.connection = connection;
  return connection;
}
connect();

async function selectPifPafPaidMedia(Data) {
  const conn = await connect();
  const sql = 'SELECT * FROM telhanortePaidMedia'
  // const values = [Data.inicio, Data.final]
  //return await conn.query('SELECT * FROM gDisplay LIMIT 2;'
  return await conn.query(sql)
}

module.exports = {selectPifPafPaidMedia}

/*
      (async () => {
    const db = require('./db')
    // const gdisplay = await db.selectDisplay({inicio:ini, final:fim});
    const gdisplay = await db.selectDisplay();
    return res.json(gdisplay[0][0])
  })();

   */

/*

(async () => {
const db = require('./db')
const gdisplay = await db.selectDisplay();
console.log(gdisplay);
})();

*/