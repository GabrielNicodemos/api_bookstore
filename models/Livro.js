import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: {
      type: String,
      required: [true, "O título é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O autor é obrigatório"],
      autopopulate: true
    },
    editora: {
      type: String,
      required: [true, "O editora é obrigatório"],
      enum: {
        values: ['Alura', 'Casa do Código'],
        message: "A Editora {VALUE} não é um valor permitido"
      }
    },
    numeroPaginas: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "O número de páginas deve estar entre 10 e 5000"
      }
    },
  }
);

livroSchema.plugin(autopopulate);
const livros = mongoose.model("livros", livroSchema);

export default livros;