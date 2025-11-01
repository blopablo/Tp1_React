import { useState } from "react";
import "./app.css";

function App() {
  const [carrito, setCarrito] = useState([]);

  // Cada sabor ahora tiene su precio
  const sabores = [
    { nombre: "Muzzarella", precio: 10500 },
    { nombre: "Especial", precio: 12000 },
    { nombre: "Muzza con Ajo", precio: 12000 },
    { nombre: "Calabresa", precio: 12000 },
    { nombre: "Chipza", precio: 17000 },
  ];

  const agregarAlCarrito = (sabor) => {
    const existe = carrito.find((item) => item.sabor === sabor.nombre);

    if (existe) {
      // Si existe, incrementamos cantidad
      const nuevoCarrito = carrito.map((item) =>
        item.sabor === sabor.nombre
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      // Si no existe, lo agregamos
      setCarrito([
        ...carrito,
        { sabor: sabor.nombre, cantidad: 1, precio: sabor.precio },
      ]);
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Calcular total de la compra
  const calcularTotal = () => {
    return carrito.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
  };

  const comprar = () => {
    const total = calcularTotal();
    alert(`Gracias por tu compra 🧾 Total: $${total}`);
    setCarrito([]); // Limpia el carrito después de comprar
  };

  return (
    <div className="App">
      <h1>🍕 Larry Capizza 🍕</h1>
      <h2>ELIGE LAS PIPSHAZ</h2>

      <div className="botones-container">
        {sabores.map((sabor) => (
          <button
            key={sabor.nombre}
            onClick={() => agregarAlCarrito(sabor)}
            className="boton-sabor"
          >
            {sabor.nombre} <br /> ${sabor.precio}
          </button>
        ))}
      </div>

      <h2>🛒</h2>
      {carrito.length === 0 ? (
        <p>🛒Tu carrito está vacío🛒</p>
      ) : (
        <>
          <ul className="carrito-lista">
            {carrito.map((item, index) => (
              <li key={index}>
                {item.sabor} x {item.cantidad} <br /> 💲
                {item.precio * item.cantidad}
              </li>
            ))}
          </ul>

          <h3>Total: ${calcularTotal()}</h3>

          <div className="botones-acciones">
            <button className="boton-vaciar" onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
            <button className="boton-comprar" onClick={comprar}>
              Comprar
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;