export function make_innerHTML(lista){
    let HTML = ''
    lista.categorias.forEach((categoria)=>{
        //El Parametro producto contendra en cada interaccion un producto differente
        HTML += `
        <section id="${categoria[0].categoria}">
        <h3>${categoria[0].categoria}</h3>
        <ul class="catalogo-lst" id="catalogo${categoria[0].categoria}">`
            categoria.forEach((producto)=>{
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
    HTML += `
    </ul>
    </section>`
    })
    return HTML
}