const {Client} = require("pg");
require("dotenv").config();

//Skapa databas anslutning med hjälp av info lagrad i .env
const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl: {
        rejectUnauthorized: false
    }
  })

//Anslut till databasen  
client.connect((err)=>{
    if(err){
        console.log("fel vid anslutning" + err);
    }else{
        console.log("ansluten till databsen");
    }
});


//Skapa tabell i postgresql db
client.query(`
    DROP TABLE IF EXISTS courses;
    CREATE TABLE IF NOT EXISTS courses (
        id SERIAL PRIMARY KEY,
        coursecode VARCHAR(6) NOT NULL,
        coursename TEXT NOT NULL,
        syllabus TEXT NOT NULL,
        progression TEXT NOT NULL,
        creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`);