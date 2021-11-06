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
            type: DataTypes.STRING,
            allowNull: true,

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

