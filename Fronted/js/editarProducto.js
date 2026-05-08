console.log("JS CARGADO 🚀");

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

console.log("ID:", id);

const form = document.getElementById("formEditar");

async function cargarProducto() {

    try {

        const response = await fetch(

            `http://localhost:3000/api/productos/${id}`

        );

        const producto = await response.json();

        console.log(producto);

        document.getElementById("nombre").value = producto.PRONombr;

        document.getElementById("descripcion").value = producto.PRODescri;

        document.getElementById("precio").value = producto.PROPreci;

        document.getElementById("stock").value = producto.PROStock;

        document.getElementById("marca").value = producto.PROMarca;

        document.getElementById("categoria").value = producto.CATId;

    } catch(error){

        console.log(error);

    }

}

cargarProducto();

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        PRONombr: document.getElementById("nombre").value,

        PRODescri: document.getElementById("descripcion").value,

        PROPreci: document.getElementById("precio").value,

        PROStock: document.getElementById("stock").value,

        PROMarca: document.getElementById("marca").value,

        CATId: document.getElementById("categoria").value

    };

    try {

        const response = await fetch(

            `http://localhost:3000/api/productos/${id}`,

            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)
            }

        );

        const resultado = await response.json();

        console.log(resultado);

        alert(resultado.mensaje);

        window.location.href = "productos.html";

    } catch(error){

        console.log(error);

    }

});