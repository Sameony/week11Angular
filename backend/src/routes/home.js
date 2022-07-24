const express = require('express');
const homeRouter = express.Router();
const db = require("./../../models");


homeRouter.post("/api/new", async(req,res) => {
    console.log(req.body.rollno);
    console.log(req.body.name);
    console.log(req.body.score);
    console.log(req.body.dob);
    
    await db.Students.create({
       rollno: req.body.rollno,
       name: req.body.name,
       score : req.body.score,
       dobs: req.body.dob
   }).then(res.status(200).json({message : "success "}));

   res.send("success");
   });


homeRouter.get('', async(req, res) =>{
    res.send('home')
   // res.render('record')
})
//get all result data in json
homeRouter.get("/api/alls", async(req,res) => {    
    
    console.log(allStudents);
    res.send(allStudents);

});

//edit

homeRouter.post("/api/edit", async(req,res) => { 
    console.log(req.body.rollno+"IN api edit");  
    
    var rn=req.body.rollno;
    var allStudents = await db.Students.findAll();
    try {
     
      console.log(rn+"req");
       for (var i = 0; i < allStudents.length; i++) {
        console.log(allStudents[i].rollno);   
        if(allStudents[i].rollno == req.body.rollno){
               console.log(allStudents[i].name);
               res.send(allStudents[i]);
               console.log("exit");
           }
           else{
            console.log("wrong id and password");
           }
       }}
       catch (error) {
           res.send("wrong id and password");
       }
       
       console.log("wrong id and password");
       
});

//try findOne to find teacher name and password correct or not
homeRouter.post("/api/tall", async(req,res) => {    
    const Sturoll = req.body.name;   
    console.log("res name   "+Sturoll);
    var Student = await db.Teacher.findOne({
         where: {name:(req.body.name),
          password:(req.body.password)}
    });
    console.log(Student.password);
    
    try {
        if(Student.password === null ){
            res.send("Id Pass mismatch!!!");
            console.log(Student.name);
            res.send(Student);
        }
        else{
            console.log(Student.name);
            res.send(Student);
        }
   }
    catch (error) {
        res.send("Id Pass mismatch!!!");
    }
    
});



//Delete the route
homeRouter.post("/api/delete", async (req,res) => {
    console.log(req.body.rollno);
    console.log("heelooo bro");
    await db.Students.destroy({
        where: { 
        rollno: req.body.rollno }
    });
    res.status(200).json({message : "success Delete"});
    //res.redirect("/teacher/record")
});
//


//try findOne to find student name and rollno correct or not
homeRouter.post("/api/studentdata", async(req,res) => {    
    const Sturoll = req.body.name;   
    const Srollno = req.body.rollno;
    console.log(Srollno+"rollno   res name   "+Sturoll);
    var Student = await db.Students.findOne({
         where: {name:(req.body.name),
          rollno:(req.body.rollno)}
    });
  //  console.log(Student);
    try {
        if(Student === null ){
            
            console.log("Id Pass mismatch!!!");
            //res.status(404).json({message : "data not found  went worng"});
           // res.send(Student);
        }
        else{
            console.log(Student.name);
            res.send(Student);
        }
   }
    catch (error) {
        res.status(400).json({message : "Somthige went wrong" + error});
    }
    
});


//


homeRouter.post("/api/l", async(req,res) => {    
    console.log(req.body.name);
    var allStudents = await db.Teacher.findAll();
 try {
    console.log(allStudents);
    for (var i = 0; i < allStudents.length; i++) {
        //console.log(allStudents[i].name);
        if(allStudents[i].name == req.body.password ){
            console.log(allStudents[i].name);
            res.send(allStudents[i]);
        }
    }
    console.log("wrong id pass");
            
     
 } catch (error) {
    res.send("Id Pass mismatch!!!");
 
 }
});




//
homeRouter.get("/api/talls", async(req,res) => {    
    const allStudents = await db.Teacher.findAll();
    //console.log(allStudents);
    res.send(allStudents);

});

homeRouter.get("/api/all", async(req,res) => {    
    const useres = await db.Students.findAll();
    //console.log(useres);
    res.send(useres);
});


module.exports = homeRouter

