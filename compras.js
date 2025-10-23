/***
 * Clase Producto para representar un artículo en el sistema de compras.
 */
class Producto {
  /*** 
   * Constructor de la clase Producto
   * @param {string} nombre - Nombre del producto.
   * @param {number} precio - Precio unitario del producto.
   * @param {number} cantidad - Cantidad del producto.
   */
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
  /**
   * Crea una instancia de Usuario. Chicharron
   * @param {nombre de usuario} nombre 
   * @param {correo del usuario} correo 
   */
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }
/**
 * Agrega un producto al carrito del usuario
 * @param {productoAgregado} producto 
 */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }
/**
 * Finaliza la compra del usuario
 */
  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}

/***
 * Ejemplo de uso de las clases Producto, Carrito y Usuario.
 */

const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
