const { DataTypes } = require("sequelize")
const database = require("../database")

const list_task = database.define("list_task", {

    judul: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    selesai: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

module.exports = list_task