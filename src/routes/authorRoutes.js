import express from "express";
import AuthorController from "../controller/authorController.js"

const routes = express.Router();
routes.get("/autores", AuthorController.listAuthors);
routes.get("/autores/:id", AuthorController.listAuthorById);
routes.post("/autores", AuthorController.registerAuthor);
routes.put("/autores/:id", AuthorController.editAuthor);
routes.delete("/autores/:id", AuthorController.deleteAuthor);

export default routes;