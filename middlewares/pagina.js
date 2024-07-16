import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";


async function pagina(req, res, next) {
    let { limite=5, pagina=1, ordenacao ="_id:-1"} = req.query;

    let [campo, ordem] = ordenacao.split(":");
    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem in ["decrescente", "desc"] ? -1 : 1);

    const resultado = req.resultado;

    if (limite > 0 && pagina > 0) {
    const resultadoFinal = await resultado.find()
        .sort({[campo]: ordem})
        .skip((pagina - 1)*limite)
        .limit(limite)
        .exec();

    res.status(200).json(resultadoFinal);
    } else {
        next(new RequisicaoIncorreta());
    }
}

export default pagina;
