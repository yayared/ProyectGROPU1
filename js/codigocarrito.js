
    // Función para comprar un producto individualmente
    function comprarProducto(precio, inputId) {
        // Obtener la cantidad del producto del campo de entrada
        const cantidad = parseInt(document.getElementById(inputId).value);
        // Calcular el total del producto
        const totalProducto = precio * cantidad;
        // Mostrar una alerta con el total del producto
        alert('Total del Producto: $' + totalProducto);
      }
  
      // Función para calcular y mostrar el total de todos los productos
      function calcularTotal() {
        // Precios de los productos
        const precioProducto1 = 10;
        const precioProducto2 = 20;
        const precioProducto3 = 30;
        const precioProducto4 = 10;
  
        // Cantidades de los productos
        const cantidadProducto1 = parseInt(document.getElementById('product1').value);
        const cantidadProducto2 = parseInt(document.getElementById('product2').value);
        const cantidadProducto3 = parseInt(document.getElementById('product3').value);
        const cantidadProducto4 = parseInt(document.getElementById('product4').value);
  
        // Calcular el total de todos los productos
        const total = (precioProducto1 * cantidadProducto1) + (precioProducto2 * cantidadProducto2) + (precioProducto3 * cantidadProducto3) + (precioProducto4 * cantidadProducto4);
  
        // Mostrar una alerta con el total de la compra
        alert('Total: $' + total);
      }