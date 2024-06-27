//Importaciones
//import make_innerHTML from "./funciones"

//Referencias al DOM
const Tienda = document.getElementById('Tienda')
console.log(Tienda)

//Productos
const tienda = {
    categorias: [
        [
            {
                nombre: "Latita",
                rutaImagen: "./Recursos/latas.jpg",
                precio: 2000,
                categoria: "Cumpleaños"
            },
            {
                nombre: "Latita",
                rutaImagen: "./Recursos/latas.jpg",
                precio: 2000,
                categoria: "Cumpleaños"
            },
            {
                nombre: "Latita",
                rutaImagen: "./Recursos/latas.jpg",
                precio: 2000,
                categoria: "CUMPLEAÑOS"
            }
        ],
        [
            {
                nombre: "Bolsa",
                rutaImagen: "./Recursos/bolsas.jpg",
                precio: 2000,
                categoria: "Comunion"
            },
            {
                nombre: "Bolsa",
                rutaImagen: "./Recursos/bolsas.jpg",
                precio: 2000,
                categoria: "Comunion"
            },
            {
                nombre: "Bolsa",
                rutaImagen: "./Recursos/bolsas.jpg",
                precio: 2000,
                categoria: "Comunion"
            }
        ],
        [
            {
                nombre: "Tarjetas",
                rutaImagen: "./Recursos/tarjetas.jpg",
                precio: 2000,
                categoria: "Souvenir"
            },
            {
                nombre: "Tarjetas",
                rutaImagen: "./Recursos/tarjetas.jpg",
                precio: 2000,
                categoria: "Souvenir"
            },
            {
                nombre: "Tarjetas",
                rutaImagen: "./Recursos/tarjetas.jpg",
                precio: 2000,
                categoria: "Souvenir"
            }
        ]
    ]
}
let tiendaHTML = ''


tienda.categorias.forEach((categoria)=>{
    tiendaHTML += `<section id="${categoria[0].categoria}">
    <h3>${categoria[0].categoria}</h3>
    <ul class="catalogo-lst" id="catalogo${categoria[0].categoria}">`
    categoria.forEach((producto)=>{
        //El Parametro producto contendra en cada interaccion un producto differente
        tiendaHTML += `
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
    tiendaHTML += `
    </ul>
    </section>`
})
Tienda.innerHTML = tiendaHTML

//Modulo no implementado problema con MIME
/* cumpleaños.innerHTML = make_innerHTML(productoHTML, tienda) */