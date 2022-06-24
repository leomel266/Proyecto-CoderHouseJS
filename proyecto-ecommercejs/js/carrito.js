const carrito = [];
const listaCarrito = document.getElementById("listadoCarrito");





function generarCarrito() {
    carrito.push(productos)

}
generarCarrito()



function totalCarritoHTML() {
    const totalCarrito = document.getElementById("totalCarrito");
    let total = productos.reduce((acc, producto) => acc + producto.precioFinal(), 0);
    totalCarrito.innerText = "El total es: " + total.toFixed(2);

}
// funcion para que te diga el total del carrito (no se como hacerlo)
function tCarritoHTML() {
    const tcarritoH = document.getElementById("tcarrito");
    let total = carrito.reduce((acc, producto) => acc + producto.precioFinal(), 0);
    tcarritoH.innerText = "El total es: " + total.toFixed(2);

}


function listarCarritoTable() {
    console.table(carrito);

}
totalCarritoHTML();