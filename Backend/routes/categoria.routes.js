const express = require("express");

const router = express.Router();

const controller = require("../controllers/categoria.controller");

router.get("/", controller.getCategorias);

router.get("/:id", controller.getCategoria);

router.post("/", controller.postCategoria);

router.put("/:id", controller.putCategoria);

module.exports = router;