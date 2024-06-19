import express from "express";
import BookController from "../controller/bookController.js";

const routes = express.Router();
routes.get("/livros", BookController.listBook);
routes.get("/livros/search", BookController.listBooksByPublisher);
routes.get("/livros/:id", BookController.listBookById);
routes.post("/livros", BookController.registerBook);
routes.put("/livros/:id", BookController.editBook);
routes.delete("/livros/:id", BookController.deleteBook);

export default routes;