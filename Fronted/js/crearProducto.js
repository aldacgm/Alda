const form = document.getElementById("formProducto");

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

    const response = await fetch(
        "http://localhost:3000/api/productos",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        }
    );

    const resultado = await response.json();

    alert(resultado.mensaje);

    window.location.href = "productos.html";

});