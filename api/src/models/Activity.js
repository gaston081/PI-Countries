const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
       
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        dificult: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),
            allowNull: false,

        },

        duration: {
            type: DataTypes.STRING,
            allowNull: false
        },

        season: {
            type: DataTypes.ENUM("Verano", "Otoño", "Primavera", "Invierno"),
            allowNull: false
        }

    });
};

