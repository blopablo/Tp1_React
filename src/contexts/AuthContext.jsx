import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  // Cargar usuario desde localStorage al iniciar
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // ---- LOGIN ----
  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existing = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!existing) {
      return { ok: false, msg: "Usuario o contraseña incorrectos" };
    }

    setUser(existing);
    localStorage.setItem("user", JSON.stringify(existing));
    return { ok: true };
  };

  // ---- REGISTER ----
  const register = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.username === username)) {
      return { ok: false, msg: "El usuario ya existe" };
    }

    const newUser = { username, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    return { ok: true };
  };

  // ---- LOGOUT ----
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}