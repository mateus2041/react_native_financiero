import axios from "axios";

// 🔥 CAMBIA ESTA IP por la de tu PC (NO uses localhost)
const API_URL = "http://192.168.1.72:8000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// =======================
// AUTH SERVICES
// =======================

export const registerUser = async (data) => {
  try {
    const response = await api.post("/register", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error en registro";
  }
};

export const loginUser = async (data) => {
  try {
    const response = await api.post("/login", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error en login";
  }
};

export const testDB = async () => {
  try {
    const response = await api.get("/test-db");
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error en DB";
  }
};

export default api;