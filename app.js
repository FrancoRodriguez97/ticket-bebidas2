let carrito = []; ///array de items


function cargarUnItem() {

    const nuevoItem = new Item(); ///instancio el objeto nuevo
    nuevoItem.nombre = prompt('Ingrese un nombre');
    nuevoItem.marca = prompt('Ingrese un nombre para la marca');
    nuevoItem.precio = Number(prompt('Ingrese un precio'));
    nuevoItem.cantidad = Number(prompt('Ingrese cantidad'));

    return nuevoItem;
}

const cargarItems = () => {
    let seguir;
    let nuevoItem;
    do {
        nuevoItem= cargarUnItem();
        carrito.push(nuevoItem); ///agregar un item al final del array
        seguir = prompt('Desea ingresar otro item si/no');

    }while (seguir == 'si');
}

////mostrar los items del carrito
//// -> nombre: leche  precio: 25  cantidad: 1  marca: La serenisima  
function mostrarCarrito() {
    let ticket = '';
    let totalTicket = 0;
        carrito.forEach((item) => {
            ticket = ticket + `nombre: ${item.nombre} \n precio: ${item.precio} \n cantidad: ${item.cantidad} \n marca: ${item.marca} \n subtotal: ${item.subTotal()} \n\n`;
        });

    totalTicket = carrito.reduce((total,item) => {
        return total + item.subTotal();
    },0);

    alert(ticket + `Total: ${totalTicket}`);
}

cargarItems();
mostrarCarrito();