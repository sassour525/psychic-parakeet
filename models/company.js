//=========================================================
//                  COMPANY MODEL
//=========================================================
module.exports = function(sequelize, DataTypes){
    var Company = sequelize.define("Company", {
        //  Company Identity
        name: dataTypes.STRING,
        founder: dataTypes.STRING
    },{
//          CONFIGURE METHODS
//-------------------------------------
        classMethods: {
            //  add associate
        }
    });
    return Company;
}