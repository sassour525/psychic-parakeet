//=========================================================
//                  AVAILABILITY MODEL
//=========================================================
module.exports = function(sequelize, DataTypes){
    var Availability = sequelize.define("Availability", {
        //  Days
        monday_Morn: DataTypes.BOOLEAN,
        monday_Eve: DataTypes.BOOLEAN,
        tuesday_Morn: DataTypes.BOOLEAN,
        tuesday_Eve: DataTypes.BOOLEAN,
        wednesday_Morn: DataTypes.BOOLEAN,
        wednesday_Eve: DataTypes.BOOLEAN,
        thursday_Morn: DataTypes.BOOLEAN,
        thursday_Eve: DataTypes.BOOLEAN,
        friday_Morn: DataTypes.BOOLEAN,
        friday_Eve: DataTypes.BOOLEAN
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