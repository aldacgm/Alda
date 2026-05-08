async function listarCategorias(){

    const response = await fetch(
        "http://localhost:3000/api/categorias"
    );

    const categorias = await response.json();

    const tabla = document.getElementById("tablaCategorias");

    tabla.innerHTML = "";

    categorias.forEach(categoria => {

        tabla.innerHTML += `

            <tr id="fila-${categoria.CATId}">

                <td>${categoria.CATId}</td>

                <td>${categoria.CATNombr}</td>

                <td>${categoria.CATDescri}</td>

                <td>${categoria.CATEstado}</td>

                <td>

                    <a href="editarCategoria.html?id=${categoria.CATId}">
                        <button class="btn">
                            Editar
                        </button>
                    </a>

                    <button
                        class="btn btn-delete"
                        onclick="ocultarFila(${categoria.CATId})"
                    >
                        Eliminar
                    </button>

                </td>

            </tr>

        `;

    });

}

function ocultarFila(id){

    const fila = document.getElementById(`fila-${id}`);

    fila.style.transition = "0.5s";

    fila.style.opacity = "0";

    fila.style.transform = "translateX(100px)";

    setTimeout(() => {

        fila.style.display = "none";

    }, 500);

}

listarCategorias();