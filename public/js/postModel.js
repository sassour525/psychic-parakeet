//=======================================================
//                  GLOBAL INITS
//=======================================================

//=======================================================
//                  FUNCTIONS
//=======================================================
module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        {id: dataTypes.INT},
        {company: dataTypes.STRING}
    });
    return Post;
}

//=======================================================
//                  MAIN LOGIC
//=======================================================


/*
    1. respond to query from UI
    2. db is ORM collection of all our models
*/
/*
    Model files that index.js goes through
*/
/*
    ORM -> index.js
    1. config.json
    2. grab sequelize to login
    3. 
*/
/*
    findOne
    findAll
    Search
*/