const express = require("express");
const mysql = require("mysql");

const PORT = process.env.PORT || 3001;

const app = express();

{/* DataBase Connection */}
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"AdminLogin",
    port:"3306"
})

connection.connect((err) => {
    if(err){
        throw err
    }else {
        console.log("Connected.")
    }
})

/* Create Tables 
    connection.query('CREATE TABLE admin_user(admin_id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY, mail VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL)', (err, rows) => {
        if(err) {
            throw err
        }else {
            console.log("DATA SENT")
            console.log(rows)
        }
    })

    connection.query("CREATE TABLE creator_user(creator_id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY, mail VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL)"", (err, rows) => {
        if(err) {
            throw err
        }else {
            console.log("DATA SENT")
            console.log(rows)
        }
    })
*/

/* Add admin_user
connection.query("INSERT INTO admin_user(admin_id, mail, password) VALUES (1, 'alexandru.cornea@student.usv.ro', 'qwerty')", (err, rows) => {
    if(err) {
        throw err
    }else {
        console.log("DATA SENT")
        console.log(rows)
    }
})
*/

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})