//=========================================================
//                  COMPANY MODEL
//=========================================================
module.exports = function (sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    //  Company Identity
    name: DataTypes.STRING,
    founder: DataTypes.STRING
  }, {
      //          CONFIGURE METHODS
      //-------------------------------------
      classMethods: {
        //  add associate
      }
    });
  return Company;
}