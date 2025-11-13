import { useState } from "react";
import "./app.css";
import Head from "./header.jsx";
import Foot from "./footer.jsx";
import calabresa from "./assets/calabresa.png";
import muzajo from "./assets/muzajo.png";
import especial from "./assets/especial.png";
import muza from "./assets/muza.png";


function App() {
  const [carrito, setCarrito] = useState([]);

  // Cada sabor ahora tiene su precio
 const sabores = [
  {
    nombre: "Muzza",
    precio: 10500,
    imagen: muza,
    descripcion: "Clásica pizza con abundante queso muzzarella fundido."
  },
  {
    nombre: "Especial",
    precio: 12000,
    imagen: especial,
    descripcion: "Muzzarella, jamón, morrones y aceitunas verdes."
  },
  {
    nombre: "Muzzajo",
    precio: 12000,
    imagen: muzajo,
    descripcion: "Nuestra muzzarella tradicional con un toque intenso de ajo."
  },
  {
    nombre: "Calabresa",
    precio: 12000,
    imagen: calabresa,
    descripcion: "Sabor fuerte con rodajas de longaniza y un toque picante."
  },
  {
    nombre: "Chipza",
    precio: 17000,
    imagen: "./assets/chipza.png",
    descripcion: "Base de mandioca con queso y salsa especial de la casa."
  },
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
    <>
      <Head />
      <div className="App">
        <h1>Llegaron las pipshaz!</h1>
        <h2>selecciona tu compra</h2>
        <div className="botones-container">
          {sabores.map((sabor) => (
            <button
              key={sabor.nombre}
              onClick={() => agregarAlCarrito(sabor)}
              className="boton-sabor"
              style={{ backgroundImage: `url(${sabor.imagen})` }}
            >
              <div className="contenido">
              <h4>{sabor.nombre}</h4>
              <p>${sabor.precio}</p>
              <p>{sabor.descripcion}</p>
              </div>
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

            
            <div className="total">Total: ${calcularTotal()}</div>
            

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
      <Foot />
    </>
  );
}

export default App;