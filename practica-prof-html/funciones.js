function make_innerHTML(HTML, lista){
    lista.productos.forEach((producto)=>{
        //El Parametro producto contendra en cada interaccion un producto differente
        HTML += `
        <li>
        <img class="foto-catalogo" src=${producto.rutaImagen} alt="Latas" width="336" height="252">
        <ul>
            <li>Nombre: ${producto.nombre}</li>
            <li>Precio: $${producto.precio}</li>
            <li>Descripcion:</li>
        </ul>
        </li>
        `
    })
    return HTML
}

export default function make_innerHTML(){}