import { v4 as uuidv4 } from 'uuid';
export class Producto {

    constructor(id,nombre, precio, descripcion, categoria, stock) {
        this.id = id ?? uuidv4();
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.stock = stock;
    }

    precioFinal() {
        return parseFloat((this.precio * 1.21).toFixed(2));
    }

}