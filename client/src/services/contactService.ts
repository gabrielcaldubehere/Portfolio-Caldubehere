import axios from "axios";

interface ContactData {
  nombre: string;
  email: string;
  mensaje: string;
}

interface ContactResponse {
  message: string;
}

export const sendContactForm = async (data: ContactData): Promise<ContactResponse> => {
  try {
    const response = await axios.post<ContactResponse>(
      "https://portfolio-caldubehere.onrender.com/api/contact",
      data
    );
    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data || { message: "Hubo un error al enviar el formulario" };
    }
    throw { message: "Hubo un error al enviar el formulario" };
  }
};

