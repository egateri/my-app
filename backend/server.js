const PORT = process.env.PORT||5500;
const {db} = require("./db-config");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";


  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.log("Server errors at login");
      return res.json("Error");
    }
    if (data.length > 0) {
      console.log("Successful login");
      return res.json("Success");
    } else {
      console.log("Unsuccessful login");
      return res.json("Unsuccess");
    }
  });
});

app.post("/users", (req, res) => {
 
  const sql = "SELECT * FROM users";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.log("Server errors at login");
      return res.json("Error");
    }
    if (data.length > 0) {
      console.log("Users exists and data pushed to front end");
      // console.log(data);
      return res.json(data);
      
    } else {
      console.log("Users do not exists");
      return res.json("No Users");
    }
  });
});
app.post("/signup", (req, res) => {

 const sqlCheck = "SELECT * FROM users WHERE `email` = ?";
db.query(sqlCheck,[req.body.email],(error, data) =>{
if (error) {
    console.log("Server errors at sign up");
    console.log(error);
        return res.json("Error");
      } 
if(data.length > 0){
    console.log("User Exists");
    return res.json("exists");

}
else {
    const sql = "INSERT INTO users (`name`,`email`,`password`) VALUES (?)";
    const values = [req.body.name, req.body.email, req.body.password];
    db.query(sql, [values], (err, result) => {
      if (err) {
        return res.json("Error");
      }
      if(result){
        // console.log(result);
        console.log("Successful registration");
       return res.json("Success");
      }
      
    });
}
 });
 
});
app.listen(PORT, () => {
  console.log("server is running  and listening to PORT: "+PORT);
});
