const mysql = require('mysql2')

const db = mysql.createConnection('mysql://root:Lohas199312!@localhost:3301/jif_db')

module.exports = db