import ErroBase from "./ErroBase.js";

class Erro404 extends ErroBase {
  constructor(msg="Página não encontrada") {
    super(msg, 404);
  }
}

export default Erro404;