import { author } from "../models/Author.js";
import book from "../models/Book.js";

class BookController {
    static async listBook(req, res) {
        try {
            const listbook = await book.find({});
            res.status(200).json(listbook);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao listar livros`,
            });
        }
    }

    static async listBookById(req, res) {
        try {
            const id = req.params.id;
            const bookFound = await book.findById(id);
            res.status(200).json(bookFound);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao encontrar livro`,
            });
        }
    }

    static async registerBook(req, res) {
        const newBookRequest = req.body

        try {
            const authorFound = author.findById(newBookRequest.author)
            const newBook = {
                ...newBookRequest,
                author: {
                    ...authorFound._doc,
                }};


            const bookCreated = await book.create(newBook)
            res.status(201).json({
                message: "Criado com Sucesso",
                book: bookCreated,
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao cadastrar livro`,
            });
        }
    }

    static async editBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);

            res.status(200).json({
                message: "Editado com Sucesso",
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao editar livro`,
            });
        }
    }

    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);

            res.status(200).json({
                message: "Deletado com Sucesso",
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao excluir livro`,
            });
        }
    }

    static async listBooksByPublisher (req, res){
        try {
            const listBooksByPublisher = await book.find({editora: req.query.editora});
            res.status(200).json(listBooksByPublisher)
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha na busca`,
            });

        }
    }
};

export default BookController;