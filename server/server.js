const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require('dotenv')
dotenv.config({path: './.env'})

const {DATA_BASE_USER, DATA_BASE_HOST, DATA_BASE_PASSWORD , DATA_BASE_NAME} = process.env

app.use(cors());
app.use(express.json())

const mysql_pool = mysql.createPool({
    connectionLimit:2000,
    user: DATA_BASE_USER,
    host: DATA_BASE_HOST,
    password: DATA_BASE_PASSWORD,
    database: DATA_BASE_NAME,
  })



app.post('/register', (req,res)=>{
    
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const address = req.body.address
    const city = req.body.city
    const country = req.body.country
    const password = req.body.password
    const postal = req.body.postal

    mysql_pool.getConnection((err, connection)=>{

        if(err) {
            connection.release();
            console.log('Error getting mysql_pool connection:' + err);
            throw err
        }
        connection.query( 'INSERT INTO users (first_name,last_name,email,address,region,country, postalZip, password ) VALUES(?,?,?,?,?,?,?,?)',
        [firstName,lastName,email,address,city, country, postal, password], (err,result)=>{
            if(err){
                console.log(err)
            }else{
                res.send('Values Inserted')
            }
        })

    })
       
})
app.post('/login', (req,res)=>{
    
   
    
    const email = req.body.email
    const password = req.body.password
    

    mysql_pool.getConnection((err, connection)=>{

        if(err) {
            connection.release();
            console.log('Error getting mysql_pool connection:' + err);
            throw err
        }
        connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, result)=>{
            if(err){
                res.send({err: err})
            }
            if(result.length > 0){
                res.send(result)
            }else {
                res.send()
            }
        })

    })
       
})



app.listen(3001, ()=>{
    console.log('Database connected')
})