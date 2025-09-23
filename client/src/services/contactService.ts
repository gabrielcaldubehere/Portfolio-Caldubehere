import axios from "axios";

// Tipos de datos que envías al backend
interface ContactData {
  nombre: string;
  email: string;
  mensaje: string;
}

// Tipo de respuesta que espera tu frontend
interface ContactResponse {
  message: string; // ojo, tu backend devuelve "message", no "msg"
}

// URL base del backend
const API_BASE =
  import.meta.env.MODE === "production"
    ? "https://portfolio-caldubehere.onrender.com" // 🔹 reemplazá con la URL pública de Render
    : "http://localhost:5000";          // 🔹 tu backend local para desarrollo

// Función que envía el formulario
export const sendContactForm = async (
  data: ContactData
): Promise<ContactResponse> => {
  try {
    const response = await axios.post<ContactResponse>(
      `${API_BASE}/api/contact`,
      data
    );
    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      const message = (err.response?.data as { message?: string })?.message;
      throw new Error(
        message || "Hubo un error al enviar el formulario desde el servidor"
      );
    } else if (err instanceof Error) {
      throw err;
    } else {
      throw new Error("Error desconocido al enviar el formulario");
    }
  }
};
