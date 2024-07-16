import express from "express";
import LivroController from "../controllers/livrosController.js";
import pagina from "../middlewares/pagina.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros, pagina)
  .get("/livros/busca", LivroController.listarLivroPorFiltro, pagina)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro);

export default router;