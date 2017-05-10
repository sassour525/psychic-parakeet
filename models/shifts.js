//=========================================================
//                  SHIFTS MODEL
//=========================================================
module.exports = function(sequelize, DataTypes){
    var Shift = sequelize.define("Shift", {
        //  Date
        date: DataTypes.STRING,
        //  Time
        time: DataTypes.INTEGER,
        //  User ID
        user_ID: DataTypes.STRING,
    },{
//          CONFIGURE ASSOCIATIONS
//-------------------------------------
        classMethods: {
            //  shift has many users
            associate: function(models){
                Shift.hasMany(models.User, {
                    onDelete: "cascade"
                });
            }
        }
    });
    return Shift;
}