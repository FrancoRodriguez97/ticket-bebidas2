class Item {
    ///atributos
    nombre;
    precio;
    cantidad;
    marca;

    ///si no hay constructor, va a tomar el que existe por defecto (sin parametros)

////metodos ///acciones

    subTotal = () => {
        return this.precio*this.cantidad;
    }

}