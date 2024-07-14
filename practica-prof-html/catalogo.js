//Importaciones
import { make_innerHTML } from "./funciones.js"

//Referencias al DOM
const Tienda = document.getElementById('Tienda')
console.log(Tienda)

//Productos

let inventario = {categorias: [[{
    nombre: "Latita",
    rutaImagen: "./Recursos/latas.jpg",
    precio: 2000,
    categoria: "Cumpleaños"
}],[],[]]}
fetch("inventario.json")
    .then((res) => {
        if (!res.ok) {
            throw {ok: false, msg: "error 404"};
        }
        return res.json()
    })
    .then((data) => {
        inventario.categorias[0] = data[0]
        inventario.categorias[1] = data[1]
        inventario.categorias[2] = data[2]
        Tienda.innerHTML = make_innerHTML(inventario)
    })
    .catch((err) => console.log(err))