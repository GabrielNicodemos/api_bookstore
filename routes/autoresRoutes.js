import express from "express";
import AutorController from "../controllers/autoresController.js";
import pagina from "../middlewares/pagina.js";

const router = express.Router();

router
  .get("/autores", AutorController.listarAutores, pagina)
  .get("/autores/:id", AutorController.listarAutorPorId)
  .post("/autores", AutorController.cadastrarAutor)
  .put("/autores/:id", AutorController.atualizarAutor)
  .delete("/autores/:id", AutorController.excluirAutor);

export default router;