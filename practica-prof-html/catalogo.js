//Referencias al DOM
const cumpleaños = document.getElementById('catalogoCumpleaños')
console.log(cumpleaños)

//Productos
const tienda = {
    productos: [
        {
            nombre: "Latita",
            rutaImagen: "./Recursos/latas.jpg",
            precio: 2000
        },
        {
            nombre: "Latita",
            rutaImagen: "./Recursos/latas.jpg",
            precio: 2000
        },
        {
            nombre: "Latita",
            rutaImagen: "./Recursos/latas.jpg",
            precio: 2000
        }
    ]
}
let productoHTML = ''

tienda.productos.forEach((producto)=>{
    //El Parametro producto contendra en cada interaccion un producto differente
    productoHTML += `
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
cumpleaños.innerHTML = productoHTML
