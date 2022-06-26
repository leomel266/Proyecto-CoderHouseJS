import { db } from './config/db.js';
import { Producto } from './models/producto.js';
import { $ } from './utils/selectors.js';


const addToList = async ()=>{
    const productsList = await db.products.toArray();
    productsList.forEach( element =>{
        const tr = document.createElement('tr');
        for (const iterator of Object.values(element)) {
            const td  = document.createElement('td');
            td.textContent =  iterator;
            tr.appendChild(td);
            
        }
        $('[data-table="list"]').appendChild(tr);
    });
};

$('#formulario').addEventListener('submit', function (event){
    event.preventDefault();
    const formChildren = this.children;
    const product  = new Producto(
        null,
        formChildren[0].value,
        formChildren[1].value,
        formChildren[2].value,
        formChildren[3].value,
        formChildren[4].value
    );
    db.products.add(product);
    addToList();
    this.reset();
});

