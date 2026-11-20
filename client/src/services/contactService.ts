import axios from "axios";
import { supabase, isSupabaseConfigured } from "../lib/supabase";
import { contactConfig } from "../config/contact";

export interface ContactData {
  nombre: string;
  email: string;
  mensaje: string;
}

export interface ContactResponse {
  message: string;
}

function buildMailtoUrl(data: ContactData): string {
  const subject = `Contacto portfolio: ${data.nombre}`;
  const body = `Nombre: ${data.nombre}\nEmail: ${data.email}\n\nMensaje:\n${data.mensaje}`;
  return `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const sendContactForm = async (data: ContactData): Promise<ContactResponse> => {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from("contact_messages").insert([
      {
        nombre: data.nombre,
        email: data.email,
        mensaje: data.mensaje,
      },
    ]);
    if (error) {
      throw { message: "No se pudo guardar el mensaje en Supabase. Intenta nuevamente." };
    }
    return { message: "Mensaje enviado y guardado correctamente. Te responderé a la brevedad." };
  }

  const apiUrl = import.meta.env.VITE_API_URL as string | undefined;
  if (apiUrl) {
    try {
      const response = await axios.post<ContactResponse>(`${apiUrl.replace(/\/$/, "")}/api/contact`, data);
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        throw { message: err.response.data.message as string };
      }
      throw { message: "Hubo un error al enviar el formulario al servidor." };
    }
  }

  window.location.href = buildMailtoUrl(data);
  return { message: "Se abrió tu cliente de correo para completar el envío." };
};
