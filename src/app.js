import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connect = await connectDB();

connect.on("error", (error) => {
    console.error("Erro de conexão", error)
});

connect.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});

const app = express();
routes(app)

export default app;
