const express = require('express');
const dotenv = require('dotenv');
const contactRoute = require('./routes/contact.routes');
const cors = require('cors'); // ✅ importar cors

dotenv.config();

const app = express();

// Configuración de CORS
app.use(cors({
  origin: "http://localhost:5173", // tu frontend
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json());
app.use("/api/contact", contactRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
