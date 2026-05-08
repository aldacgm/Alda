const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

require("./config/db");

app.use(cors());
app.use(express.json());

const productoRoutes = require("./routes/producto.routes");
const categoriaRoutes = require("./routes/categoria.routes");
app.use("/api/productos", productoRoutes);
app.use("/api/categorias", categoriaRoutes);

app.use(express.static(path.join(__dirname, "../Fronted")));
app.listen(3000, () => {

    console.log("Servidor corriendo en puerto 3000");

});