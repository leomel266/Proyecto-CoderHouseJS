import Dexie from 'dexie';

export const db = new Dexie('products');

db.version(1).stores({
    products: 'id, nombre, precio, descripcion, categoria, stock'
});