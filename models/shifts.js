//=========================================================
//                  SHIFTS MODEL
//=========================================================
module.exports = function(sequelize, DataTypes){
    var Shift = sequelize.define("Shift", {
        //  Day
        weekday: DataTypes.STRING,
        //  Morning or Night
        night: DataTypes.BOOLEAN,
    },{
//          CONFIGURE ASSOCIATIONS
//-------------------------------------
        classMethods: {
            //  shift has many users
            associate: function(models){
                Shift.belongsTo(models.User, {});
            }
        }
    });
    return Shift;
}