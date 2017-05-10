//=========================================================
//                  AVAILABILITY MODEL
//=========================================================
module.exports = function(sequelize, DataTypes){
    var Availability = sequelize.define("Availability", {
        //  Days
        monday_Morn: DataTypes.STRING,
        monday_Eve: DataTypes.STRING,
        tuesday_Morn: DataTypes.STRING,
        tuesday_Eve: DataTypes.STRING,
        wednesday_Morn: DataTypes.STRING,
        wednesday_Eve: DataTypes.STRING,
        thursday_Morn: DataTypes.STRING,
        thursday_Eve: DataTypes.STRING,
        friday_Morn: DataTypes.STRING,
        friday_Eve: DataTypes.STRING
    },{
//          CONFIGURE ASSOCIATIONS
//-------------------------------------
        classMethods: {
            //  availability has one user
            associate: function(models){
                Availability.belongsTo(models.User, {});
            }
        }
    });
    return Availability;
}