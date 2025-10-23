class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

/***
 * Clase Carrito para gestionar los productos añadidos por el usuario
 * y calcular el total de la compra.
 */
class Carrito {

  /***
   * Constructor de la clase Carrito
   * Inicializa una lista vacía de productos.
   */
  constructor() {
    this.productos = [];
  }

  /***
   * Agrega un producto al carrito.
   * @param {Producto} producto - El producto a agregar al carrito.
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  /***
   * Calcula el total del carrito.
   * @returns {number} - El total de la compra.
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  /***
   * Vacía el carrito de compras.
   * No retorna nada.
   */
  vaciarCarrito() {
    this.productos = [];
  }
}

class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }

  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}


const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
