const express = require("express");

const router = express.Router();

const controller = require("../controllers/producto.controller");

router.get("/", controller.getProductos);

router.get("/:id", controller.getProducto);

router.post("/", controller.postProducto);

router.put("/:id", controller.putProducto);

module.exports = router;