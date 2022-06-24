let miFormulario = document.getElementById('formulario');
miFormulario.addEventListener('submit', validarFormulario);


function validarFormulario(e) {
    e.preventDefault();
    let id = 0;
    let formulario = e.target;
    let nombre = formulario.children[0].value;
    let precio = formulario.children[1].value;
    let descripcion = formulario.children[2].value;
    let categoria = formulario.children[3].value;
    let stock = formulario.children[4].value;
    productos.push(new Producto(id, nombre, precio, descripcion, categoria, stock));
    agregarProductos();
    totalCarritoHTML();
    e.target.reset();
};

