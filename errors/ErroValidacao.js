import ErroBase from "./ErroBase.js";

class ErroValidacao extends ErroBase {
  constructor(erro) {
    const msgErros = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");

    super(`Os seguintes erros foram encontrados: ${msgErros}`, 400);
  }
}

export default ErroValidacao;