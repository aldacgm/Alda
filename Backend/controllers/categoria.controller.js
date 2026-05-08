const Categoria = require("../models/categoria.model");

const getCategorias = (req, res) => {

    Categoria.listarCategorias((error, resultados) => {

        if(error){

            console.log(error);

            res.status(500).json({
                mensaje: error
            });

        } else {

            res.json(resultados);

        }

    });

};

const getCategoria = (req, res) => {

    const id = req.params.id;

    Categoria.obtenerCategoria(id, (error, resultado) => {

        if(error){

            console.log(error);

            res.status(500).json({
                mensaje: error
            });

        } else {

            res.json(resultado[0]);

        }

    });

};

const postCategoria = (req, res) => {

    console.log(req.body);

    const data = req.body;

    Categoria.crearCategoria(data, (error, resultado) => {

        if(error){

            console.log(error);

            res.status(500).json({
                mensaje: error
            });

        } else {

            console.log(resultado);

            res.json({
                mensaje: "Categoría registrada 🚀"
            });

        }

    });

};

const putCategoria = (req, res) => {

    const id = req.params.id;

    const data = req.body;

    Categoria.actualizarCategoria(id, data, (error, resultado) => {

        if(error){

            console.log(error);

            res.status(500).json({
                mensaje: error
            });

        } else {

            console.log(resultado);

            res.json({
                mensaje: "Categoría actualizada 🚀"
            });

        }

    });

};

module.exports = {

    getCategorias,

    getCategoria,

    postCategoria,

    putCategoria

};