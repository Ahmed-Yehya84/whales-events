'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class City extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Event }) {
            // define association here
            this.hasMany(Event, { foreignKey: 'cityId' })
        }
    };
    City.init({
        cityName: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'City',
    });
    return City;
};