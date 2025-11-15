import { useState } from "react";
import "../app.css";

export function useCarrito() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (sabor) => {
    const existe = carrito.find((item) => item.sabor === sabor.nombre);

    if (existe) {
      const nuevoCarrito = carrito.map((item) =>
        item.sabor === sabor.nombre
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([
        ...carrito,
        { sabor: sabor.nombre, cantidad: 1, precio: sabor.precio },
      ]);
    }
  };

  const calcularTotal = () => {
    return carrito.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
  };

  const vaciarCarrito = () => setCarrito([]);

  const comprar = () => {
    const total = calcularTotal();
    alert(`Gracias por tu compra 🧾 Total: $${total}`);
    setCarrito([]);
  };

  return {
    carrito,
    agregarAlCarrito,
    calcularTotal,
    vaciarCarrito,
    comprar,
  };
}

