import "./app.css";
import Head from "./header.jsx";
import Foot from "./footer.jsx";
import data from "../db.json";
import Carrito from "./hooks/Carrito.jsx"; // COMPONENTES
import ProductCard from "./hooks/product-card.jsx";
import { useCarrito } from "./hooks/useCarrito.js"; // CUSTOM HOOK

function App() {

  const pizzas = data.pizzas; // Datos de db.json

  const {                     // Lógica del carrito
    carrito,
    agregarAlCarrito,
    calcularTotal,
    vaciarCarrito,
    comprar,
  } = useCarrito();

  return (
    <div className="App">
      <Head />
      <div className="botones-container">
        {pizzas.map((pizza) => (
          <ProductCard
            key={pizza.nombre}
            sabor={pizza}
            onAgregar={agregarAlCarrito}
          />
        ))}
      </div>

      <Carrito
        carrito={carrito}
        total={calcularTotal()}
        vaciar={vaciarCarrito}
        comprar={comprar}
      />
      <Foot />
    </div>
  );
}

export default App;