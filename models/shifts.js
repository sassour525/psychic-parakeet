//=========================================================
//                  SHIFTS MODEL
//=========================================================
module.exports = function(sequelize, DataTypes){
    var Shift = sequelize.define("Shift", {
        //  Shift
    },{
//          CONFIGURE METHODS
//-------------------------------------
        classMethods: {
            //  add associate
        }
    });
    return Shift;
}