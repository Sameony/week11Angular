const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./models");
var corsOptions = {
  CrossOrigin: "http://localhost:5000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Successfully connected  to the backend" });
});
//

// Routes 
const resultRoutes = require('./src/routes/home')
app.use('/',resultRoutes)

//teacher and student routes
//const teachersRoutes = require("./src/routes/teacherRoutes")
//const studentsRoutes = require("./routes/studentRoutes")


//
// set port, listen for requests
const PORT = process.env.PORT || 5000;
//app.listen(PORT, () => console.log(`listening on port ${PORT}`));
db.sequelize.sync().then(() =>{
    app.listen(PORT, () => console.log(`listening on port ${PORT}`))
});
 