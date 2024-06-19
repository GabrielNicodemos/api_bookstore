import { author } from "../models/Author.js";

class AuthorController {
    static async listAuthors(req, res) {
        try {
            const listAuthor = await author.find({});
            res.status(200).json(listAuthor);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao listar autores`,
            });
        }
    }

    static async listAuthorById(req, res) {
        try {
            const id = req.params.id;
            const authorFound = await author.findById(id);
            res.status(200).json(authorFound);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao encontrar autor`,
            });
        }
    }

    static async registerAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body)
            res.status(201).json({
                message: "Criado com Sucesso",
                author: newAuthor,
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao cadastrar autor`,
            });
        }
    }

    static async editAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);

            res.status(200).json({
                message: "Editado com Sucesso",
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao editar autor`,
            });
        }
    }

    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);

            res.status(200).json({
                message: "Deletado com Sucesso",
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao excluir autor`,
            });
        }
    }
};

export default AuthorController;