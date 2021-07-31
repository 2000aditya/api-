  CREATE TABLE employeedetails4 (
user_id serial PRIMARY KEY,
contact_id uuid DEFAULT uuid_generate_v4 (),
firstname VARCHAR (50),
lastname VARCHAR (50) ,
contactno VARCHAR (50) ,
 email VARCHAR ( 255 ) 
);
//COMAND TO RUN SHELL    ==== psql -h satao.db.elephantsql.com -U estkqtdq --password -d estkqtdq






const {id} =req.params;





 try {
        const employeedetails4 = await pool.query("SELECT * FROM employeedetails4 WHERE user_id =$1",[id]);
        res.json (employeedetails4.rows[0]);
        
    } catch (err) {
        console.log(error);
    }
})