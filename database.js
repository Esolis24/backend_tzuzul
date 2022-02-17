const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "backendfundamentals",
});

// Encapsulando con promesas:
function query(sql, data) {
  return new Promise((resolve, reject) => {
    connection.query(sql, data, function (error, result) {
      //Error first callback
      if (error) {
        reject(error.sqlMessage);
      } else {
        resolve(result);
      }
    });
  });
}
async function insert(tablename, data) {
  try {
    await query(`INSERT INTO ${tablename} (??) VALUES(?)`, [
      Object.keys(data),
      Object.values(data),
    ]);
    return { data, success: true };
  } catch (err) {
    return { err, success: false };
  }
}
async function del(tablename, data) {
  try {
    await query(`DELETE FROM ${tablename} WHERE id=?`, [data]);
    return data;
  } catch (err) {
    return err;
  }
}
//Exportamos un objeto
module.exports = { query, insert, del };
