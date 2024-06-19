// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

// Porta que quero rodar minha api.
const PORT = 3000;

// Adiconando servidor á uma porta.
app.listen(PORT, () => {
    console.log("Servidor escutando");
});