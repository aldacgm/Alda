const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const form = document.getElementById("formEditarCategoria");

async function cargarCategoria(){

    const response = await fetch(
        `http://localhost:3000/api/categorias/${id}`
    );

    const categoria = await response.json();

    document.getElementById("nombre").value = categoria.CATNombr;

    document.getElementById("descripcion").value = categoria.CATDescri;

    document.getElementById("estado").value = categoria.CATEstado;

}

cargarCategoria();

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        CATNombr: document.getElementById("nombre").value,

        CATDescri: document.getElementById("descripcion").value,

        CATEstado: document.getElementById("estado").value

    };

    const response = await fetch(

        `http://localhost:3000/api/categorias/${id}`,

        {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        }

    );

    const resultado = await response.json();

    alert(resultado.mensaje);

    window.location.href = "categorias.html";

});