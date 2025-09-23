const express = require('express');
const dotenv = require('dotenv');
const contactRoute = require('./routes/contact.routes');
const cors = require('cors'); // ✅ importar cors

dotenv.config();

const app = express();

// Configuración de CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || "*", // usa la variable de entorno
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));


app.use(express.json());
app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
