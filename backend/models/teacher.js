
module.exports = (sequelize, Datatypes) => {
    const Teacher = sequelize.define("Teacher", {
    id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    name: {
        type: Datatypes.STRING(35),
        allowNull: false,
    },
    password: {
        type: Datatypes.STRING(35),
        allowNull: false,
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
return Teacher; 
}; 