// src/services/contactService.ts
import axios from "axios";

// Tipos de datos que envías al backend
interface ContactData {
  nombre: string;
  email: string;
  mensaje: string;
}


// Tipo de respuesta que espera tu frontend
interface ContactResponse {
  msg: string;
}

// Función que envía el formulario
export const sendContactForm = async (data: ContactData): Promise<ContactResponse> => {
  try {
    const response = await axios.post<ContactResponse>(
      "http://localhost:3000/api/contact",
      data
    );
    return response.data;
  } catch (err: unknown) {
    // Verificamos si es un error de Axios
    if (axios.isAxiosError(err)) {
      // Si el backend manda un mensaje en err.response.data, lo usamos
      const message = (err.response?.data as { message?: string })?.message;
      throw new Error(message || "Hubo un error al enviar el formulario desde el servidor");
    } else if (err instanceof Error) {
      // Si es cualquier otro Error de JS
      throw err;
    } else {
      // Error desconocido
      throw new Error("Error desconocido al enviar el formulario");
    }
  }
};
