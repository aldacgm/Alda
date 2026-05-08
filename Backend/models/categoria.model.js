const conexion = require("../config/db");

const listarCategorias = (callback) => {

    const sql = "SELECT * FROM categoria";

    conexion.query(sql, callback);

};

const obtenerCategoria = (id, callback) => {

    const sql = "SELECT * FROM categoria WHERE CATId = ?";

    conexion.query(sql, [id], callback);

};

const crearCategoria = (data, callback) => {

    const sql = `
    
        INSERT INTO categoria
        (
            CATNombr,
            CATDescri,
            CATEstado
        )
        VALUES (?, ?, ?)
    
    `;

    conexion.query(

        sql,

        [
            data.CATNombr,
            data.CATDescri,
            data.CATEstado
        ],

        callback

    );

};

const actualizarCategoria = (id, data, callback) => {

    const sql = `
    
        UPDATE categoria
        SET
            CATNombr = ?,
            CATDescri = ?,
            CATEstado = ?
        WHERE CATId = ?
    
    `;

    conexion.query(

        sql,

        [
            data.CATNombr,
            data.CATDescri,
            data.CATEstado,
            id
        ],

        callback

    );

};

module.exports = {

    listarCategorias,

    obtenerCategoria,

    crearCategoria,

    actualizarCategoria

};