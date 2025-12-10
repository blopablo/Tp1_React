import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function RegisterForm() {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = register(username, password);

    if (!result.ok) setMsg(result.msg);
    else setMsg("Usuario creado correctamente. Ya puedes iniciar sesión.");
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Crear Cuenta</h2>
      {msg && <p>{msg}</p>}

      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Registrarse</button>
    </form>
  );
}
