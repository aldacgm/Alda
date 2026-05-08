const Producto = require("../models/producto.model");

const getProductos = (req, res) => {

    Producto.listarProductos((error, resultados) => {

        if(error){

            res.status(500).json({
                mensaje: error
            });

        } else {

            res.json(resultados);

        }

    });

};

const getProducto = (req, res) => {

    const id = req.params.id;

    Producto.obtenerProducto(id, (error, resultado) => {

        if(error){

            res.status(500).json({
                mensaje: error
            });

        } else {

            res.json(resultado[0]);

        }

    });

};

const postProducto = (req, res) => {

    const data = req.body;

    Producto.crearProducto(data, (error, resultado) => {

        if(error){

            console.log(error);

            res.status(500).json({
                mensaje: error
            });

        } else {

            res.json({
                mensaje: "Producto registrado 🚀"
            });

        }

    });

};

const putProducto = (req, res) => {

    const id = req.params.id;

    const data = req.body;

    Producto.actualizarProducto(id, data, (error, resultado) => {

        if(error){

            res.status(500).json({
                mensaje: error
            });

        } else {

            res.json({
                mensaje: "Producto actualizado 🚀"
            });

        }

    });

};

module.exports = {
    getProductos,
    getProducto,
    postProducto,
    putProducto
};