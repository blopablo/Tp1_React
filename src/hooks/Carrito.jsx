import "../app.css";

function Carrito({ carrito, total, vaciar, comprar }) {
  return (
    <div>
      <h2>🛒 Tu carrito</h2>

      <ul className="carrito-lista">
        {carrito.map((item, index) => (
          <li key={index}>
            {item.sabor} x {item.cantidad} — ${item.precio * item.cantidad}
          </li>
        ))}
      </ul>
      <div className="total">
         <h3>Total: ${total}</h3>
      </div>
      <div className="botones-acciones">
        <button className="boton-vaciar" onClick={vaciar}>Vaciar</button>
        <button className="boton-comprar" onClick={comprar}>Comprar</button>
      </div>
    </div>
  );
}

export default Carrito;