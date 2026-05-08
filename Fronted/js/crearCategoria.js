console.log("JS DE CREAR CARGADO 🚀");

const form = document.getElementById("formCategoria");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        CATNombr: document.getElementById("nombre").value,

        CATDescri: document.getElementById("descripcion").value,

        CATEstado: document.getElementById("estado").value

    };

    const response = await fetch(

        "http://localhost:3000/api/categorias",

        {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        }

    );

    const resultado = await response.json();

    console.log(resultado);

    alert(resultado.mensaje);

    window.location.href = "categorias.html";

});