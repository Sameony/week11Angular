
module.exports = (sequelize, Datatypes) => {
    const Students = sequelize.define("Students", {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    rollno: {
        type: Datatypes.INTEGER(11),
        allowNull: false,
    },
    name: {
        type: Datatypes.STRING(35),
        allowNull: false,
    },
    score: {
        type: Datatypes.INTEGER(5),
        allowNull: false 
    },
    dobs: {
        type: Datatypes.DATEONLY,
        allowNull: true
    },
    createdAt:{
        type: Datatypes.DATEONLY,
        allowNull: true
    },
    updatedAt:{
        type: Datatypes.DATEONLY,
        allowNull: true
    },
  });
return Students; 
}; 