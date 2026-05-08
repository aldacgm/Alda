const conexion = require("../config/db");

const listarProductos = (callback) => {

    const sql = "SELECT * FROM producto";

    conexion.query(sql, callback);

};

const obtenerProducto = (id, callback) => {

    const sql = "SELECT * FROM producto WHERE PROId = ?";

    conexion.query(sql, [id], callback);

};

const crearProducto = (data, callback) => {

    const sql = `
    
        INSERT INTO producto
        (
            PRONombr,
            PRODescri,
            PROPreci,
            PROStock,
            PROMarca,
            CATId
        )
        VALUES (?, ?, ?, ?, ?, ?)
    
    `;

    conexion.query(
        sql,
        [
            data.PRONombr,
            data.PRODescri,
            data.PROPreci,
            data.PROStock,
            data.PROMarca,
            data.CATId
        ],
        callback
    );

};

const actualizarProducto = (id, data, callback) => {

    const sql = `
    
        UPDATE producto
        SET
            PRONombr = ?,
            PRODescri = ?,
            PROPreci = ?,
            PROStock = ?,
            PROMarca = ?,
            CATId = ?
        WHERE PROId = ?
    
    `;

    conexion.query(
        sql,
        [
            data.PRONombr,
            data.PRODescri,
            data.PROPreci,
            data.PROStock,
            data.PROMarca,
            data.CATId,
            id
        ],
        callback
    );

};

module.exports = {
    listarProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto
};