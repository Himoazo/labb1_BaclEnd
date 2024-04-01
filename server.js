const {Client} = require("pg"); //PostgreSQL
const express = require("express");
require("dotenv").config();  //.env

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));  //Hanterar data i req.body som är urlenvoded

//Skapar db client anslutning
/* const client = new Client({
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
 */
//Routing:

//Startsida
app.get("/", async(req, res)=>{
    //SQL query
    /* client.query("SELECT * FROM courses ORDER BY creationDate DESC;", (err, result)=>{
        if(err){
            console.log("fel vid db fråga");
        }else{
            res.render("index", {
                courses: result.rows,
            });
        }
    }) */
    
});

//Lägg till kurser sida
app.get("/add", async(req, res)=>{
    res.render("add");
});

//Lägg till Kurs
app.post("/", async(req, res)=>{
    const coursecode = req.body.coursecode.toUpperCase();
    const coursename = req.body.coursename;
    const syllabus = `https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/${coursecode}/`;
    const progression = req.body.progression;

    
    /* if(coursecode != "" && coursename != "" && progression != ""){
    let error= "";
    //SQL query för att lagra data i tabellen
    const result = await client.query("INSERT INTO courses(coursecode, coursename, syllabus, progression) VALUES($1, $2, $3, $4)",
    [coursecode, coursename, syllabus, progression]
    );
    }else{
        error = "För att lägga till en kurs, alla fält i formuläret måste vara ifyllda";
        res.render("add", {error: error});
        return;
    } */
    res.redirect("/");
});

//Radera kurs
/* app.get("/delete/:id", (req, res)=>{
    let id = req.params.id;

    client.query("DELETE FROM courses WHERE id = $1", [id], (err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
        }
    });
}); */

// Om sidan
app.get("/about", (req, res)=>{
    res.render("about");
});

//Starta server
app.listen(process.env.PORT, ()=>{
    console.log("server är startad på port: " + process.env.PORT);
});