import { jwtDecode } from "jwt-decode";

export function AuthToken(): boolean {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Usuario no reconocido")
    localStorage.clear()
    return false;
  }

  try {
    const decoded = jwtDecode<{ exp: number }>(token);
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}
