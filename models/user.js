//=========================================================
//                  USER MODEL
//=========================================================
module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        //  User Identity
        name: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        company: dataTypes.STRING,
        //  Management
        boss: dataTypes.STRING,
        manager: dataTypes.BOOLEAN,
        //  Stats
        personality: dataTypes.INTEGER,
        salary: dataTypes.BOOLEAN,
        pay: dataTypes.INTEGER,
        clock: dataTypes.BOOLEAN,
        hours: dataTypes.INTEGER
    },{
//          CONFIGURE METHODS
//-------------------------------------
        classMethods: {
            //  add associate
        }
    });
    return User;
}