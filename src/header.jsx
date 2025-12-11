import { useState } from "react";
import { useAuth } from "./contexts/AuthContext.jsx";
import LoginForm from "./hooks/LoginForm.jsx";
import RegisterForm from "./hooks/RegisterForm.jsx";
import "./header.css";

function Head() {
  const { user, logout } = useAuth();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="header">

      <div className="home-button">
        <a href="/" target="_blank" rel="noopener noreferrer"></a>
      </div>

      <div className="Login-right">
        {!user ? (
          <>
            <button className="button-logreg"
              onClick={() => {
                setShowLogin(true);
                setShowRegister(false);
              }}
            >
              <h1>Login</h1>
            </button>

            <button className="button-logreg"
              onClick={() => {
                setShowRegister(true);
                setShowLogin(false);
              }}
            >
              <h1>Registrar</h1>
            </button>
          </>
        ) : (
          <>
            <span>Hola, {user.username}</span>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>

      {/* --- MODAL LOGIN --- */}
      {showLogin && !user && (
        <div className="modal">
          <LoginForm />
          <button onClick={() => setShowLogin(false)}>Cerrar</button>
        </div>
      )}

      {/* --- MODAL REGISTER --- */}
      {showRegister && !user && (
        <div className="modal">
          <RegisterForm />
          <button onClick={() => setShowRegister(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default Head;