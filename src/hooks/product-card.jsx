import "../app.css";

function ProductCard({ sabor, onAgregar }) {
  return (
    <button
      className="boton-sabor"
      onClick={() => onAgregar(sabor)}
      style={{ backgroundImage: `url(${sabor.imagen})` }}
    >
      <div className="contenido">
        <h4>{sabor.nombre}</h4>
        <p>${sabor.precio}</p>
        <p>{sabor.descripcion}</p>
      </div>
    </button>
  );
}

export default ProductCard;