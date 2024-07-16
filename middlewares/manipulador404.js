import Erro404 from "../errors/Erro404.js";

function Manipulador404(req, res, next) {
  const error404 = new Erro404();
  next(error404);
}

export default Manipulador404;