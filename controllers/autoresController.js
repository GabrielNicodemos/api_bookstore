import Erro404 from "../errors/Erro404.js";
import { autores } from "../models/index.js";

class AutorController {

  static listarAutores = async(req, res, next) => {
    try {
      const autoresResultado = autores.find();
      req.resultado = autoresResultado;
      next();
    } catch (erro) {
      next(erro);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorResultado = await autores.findById(id);

      if (autorResultado !== null) {
        res.status(200).send(autorResultado);
      } else {
        next(new Erro404("Id do Autor não localizado"));
      }

    } catch (erro) {
      next(erro);
    }
  };


  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new autores(req.body);

      const autorResultado = await autor.save();

      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };


  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autor_atualizado = await autores.findByIdAndUpdate(id, {$set: req.body});

      if (autor_atualizado !== null) {
        res.status(200).send({message: "Autor atualizado com sucesso"});
      } else {
        next(new Erro404("Id do Autor não localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autor_deletado = await autores.findByIdAndDelete(id);

      if (autor_deletado !== null) {
        res.status(200).send({message: "Autor removido com sucesso"});
      } else {
        next(new Erro404("Id do Autor não localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  };


}

export default AutorController;