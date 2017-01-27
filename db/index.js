var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/trip-planner');
var marked = require('marked');





module.exports = {
    db: db
};

