const mysql2 = require('mysql2')

const conn = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hr_101'
})

const connectDB = async () => {
    try {
        await conn.connect()
        return conn;
    } catch (err) {
        console.log(err)
    }
}
module.exports = connectDB
