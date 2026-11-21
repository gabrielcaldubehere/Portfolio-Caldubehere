const baseURL = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const contactConfig = {
  name: "Gabriel Caldubehere",
  title: "Junior Full Stack & AI Developer",
  email: "caldubeheregabriel@gmail.com",
  whatsappUser: "@gabriel_caldubehere",
  whatsappUrl: "https://wa.link/oz4ccx",
  githubUrl: "https://github.com/gabrielcaldubehere",
  linkedinUrl: "https://linkedin.com/in/gabrielcaldubehere",
  cvPath: `${baseURL}Gabriel-Caldubehere.pdf`,
} as const;
