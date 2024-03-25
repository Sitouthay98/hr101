const bcrypt = require('bcrypt')
const connectDB = require('../config/database');

connectDB().then(connection => { conn = connection })

exports.listAllUser = async (req, res) => {
    let sql = "SELECT * FROM tbemp"

    await conn.execute(sql, (err, result) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }
        else {
            res.status(200).json({
                message: 'Read all users successfully',
                data: result
            })
        }
    })
}

exports.listSingleUser = async (req, res) => {
    const { id } = req.params
    let sql = "SELECT * FROM tbemp WHERE emp_id = ?"
    conn.execute(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(200).json({
                message: 'Read single user successfully',
                data: result
            })
        }

    })

}

exports.createUser = (req, res) => {
    const { username, password, firstname, lastname, roleID } = req.body
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            let sql = "INSERT INTO users (username, password, firstname, lastname, roleID) VALUES ( ?, ?, ?, ?, ?)"
            conn.execute(sql, [username, hash, firstname, lastname, roleID]), (err, result) => {
                if (err) {
                    res.status(500).json({ message: err.message })
                }
                else {
                    res.status(200).json({
                        message: 'Insert user successfully',
                        data: result
                    })
                }
            }
        })
    })
}

exports.editUser = (req, res) => {
    const { id } = req.params
    const { firstname, lastname, username, password, roleID } = req.body

    //this is simple update request, so I don't need a password checker

    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            let sql = "UPDATE users SET username = ?, password = ?, firstname = ?, lastname = ?, roleID = ? WHERE userID = ?"
            conn.execute(sql, [username, hash, firstname, lastname, roleID, id], (err, result) => {
                if (err) {
                    res.status(500).json({ message: err.message });
                } else {
                    res.status(200).json({
                        message: 'Update successful',
                        data: result
                    })
                }
            })
        })
    })
}

exports.removeUser = async (req, res) => {
    const { id } = req.params
    let sql = "DELETE FROM users WHERE userID = ?"
    await conn.execute(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ message: err.message })
        } else {
            res.status(200).json({
                message: 'Delete successful',
                data: result
            })
        }
    })

}
