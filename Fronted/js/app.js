async function listarProductos(){

    const response = await fetch(
        "http://localhost:3000/api/productos"
    );

    const productos = await response.json();

    const tabla = document.getElementById("tablaProductos");

    tabla.innerHTML = "";

    productos.forEach(producto => {

        tabla.innerHTML += `

            <tr id="fila-${producto.PROId}">

                <td>${producto.PROId}</td>

                <td>${producto.PRONombr}</td>

                <td>S/. ${producto.PROPreci}</td>

                <td>${producto.PROStock}</td>

                <td>${producto.PROMarca}</td>

                <td>

                    <a href="editarProducto.html?id=${producto.PROId}">
                        <button class="btn">
                            Editar
                        </button>
                    </a>

                    <button
                        class="btn btn-delete"
                        onclick="ocultarFila(${producto.PROId})"
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

listarProductos();