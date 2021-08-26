const express =require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const datalize = require('datalize');
const Sequelize = require('sequelize');
const { Pool } = require("pg");
const { response } = require("express");
const sequelize = new Sequelize('postgres://user:estkqtdq:5432/estkqtdq')
//middleware
app.use(cors());
app.use(express.json());
const field = datalize.field;

  // required

    const Employeedetails4 = sequelize.define('employeedetails4', {

    // attributes
    
    firstname: {
    
    type: Sequelize.STRING,
    
    allowNull: false
    
    },
    
    lastname: {
    
    type: Sequelize.STRING
    
    // allowNull defaults to true
    
    }
    
    }, {
    
    // options
    
    });
     
 







//routes//

//post reqs

app.post("/first",async(req,res)=>{
    const{firstname,lastname,contactno,email} = req.body;

    try {
    
    
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email.match(regexEmail)) {
       
       
        if(!firstname || !lastname ||  !contactno || !email){
            res.json({message:"please enter all fields"});
            process.exitCode;
    
        }
          else{
    
            console.log(req.body)
    
    
             const newemployeedetails4 =  await pool.query( "INSERT INTO  employeedetails4(firstname,lastname,contactno,email) values($1,$2,$3,$4) RETURNING*",[firstname,lastname,contactno,email]);
             console.log(newemployeedetails4.rows[0] );
    
    
            res.json(`User  ${firstname} added`)
            }

       
        return true; 
    }
    else {
        res.json(console.error(404));
        process.exitCode;
        console.log("invalid email")
       
    }
        
            
        
        
}catch (error) {
   console.error(err)
        }
    
        });
    
//get req


app.get("/first",async(req,res)=>{
    try {
        const fullemployeedetails4 = await  pool.query("SELECT * FROM employeedetails4");
        console.log(fullemployeedetails4.rows);
        res.json(fullemployeedetails4.rows);

    } catch (err) {
        console.error(404)("error message")
    }
})
 

//get a res

app.get("/first/:id",async(req,res)=>{
    try {
       
    const {id} =req.params;
    
        const employeedetails4 = await pool.query("SELECT * FROM employeedetails4 WHERE contact_id =$1",[id]);
        res.json (employeedetails4.rows[0]);
        
    } catch (err) {
        console.error(404)("error message")
    }


});
   


//update
app.put("/first/:id",async(req,res)=>{
   
       try {
           
       
    const {id} = req.params;

    
    const{firstname,lastname,contactno,email} = req.body;

    if(!firstname || !lastname || !contactno || !email){
        res.json({message:"please enter all fields"});
        process.exitCode;
        
    }


    
else{
    const  updateemployeedetails4 = await pool.query("UPDATE employeedetails4 SET firstname=$1,lastname=$2,contactno=$3,email=$4 WHERE contact_id=$5",[firstname,lastname,contactno,email,id]);
    res.json(`User modified with contact_id: ${id}`);
       console.log(updateemployeedetails4);
      // console.error("error message")
      
   }
    
} catch (error) {
    console.error(404)("error message")
      
}
   
   
 });  




// delete
app.delete("/first/:id",async(req,res) =>{
    try {
        const { id } = req.params;
        const deleteemployeedetails4 = await pool.query("DELETE from employeedetails4 WHERE contact_id =$1",[id]);
        res.json(`User deleted with contact_id: ${id}`);
    } catch (err) {
        console.error(404)(err.message);
    }
})





app.listen(5000,() =>{
    console.log("server has statted on port 5000");
});