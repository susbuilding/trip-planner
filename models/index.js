var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/trip-planner');
var marked = require('marked');


var Hotel = db.define('hotel' {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.INTEGER
    },
    amenities: {
        type: Sequelize.STRING
    }
});

var Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING
    },
    cuisine: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    }
});

var Activity = db.define('activity', {
    name: {
        type: Sequelize.STRING
    },
    age_range: {
        type: Sequelize.INTEGER
    }
})

var Place = db.define('place', {
    address: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.INTEGER
    },
    state: {
        type: Sequelize.INTEGER
    },
    phone: {
        type: Sequelize.INTEGER
    },
    location: {
        type: Sequelize.ARRAY,
        validate: {
            isFloat: true
        }
    }
})

//one place can belong to many other things

Place.hasMany(Hotel)
Place.hasMany(Restaurant)
Place.hasMany(Activity)

module.exports = {
    Hotel: Hotel,
    Restaurant: Restaurant,
    Activity: Activity,
    Place: Place,
    db: db
};

