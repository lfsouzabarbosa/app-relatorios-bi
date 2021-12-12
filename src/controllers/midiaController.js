const Midia = require('../models/midia');
const status = require('http-status');

//inserir os dados no banco
exports.Insert = (req, res, next) => {
    //na requisicao de insert
    //ele retorna um json no corpo
    //precisamos pegar cada dados e inserir na respectiva propriedade
    const cliente = req.body.cliente;
    const tipo = req.body.tipo;
    const valor = req.body.valor;
    const dataInicio = req.body.dataInicio;
    const dataFinal = req.body.dataFinal;

    //aqui passa os parametros com dados para os atributos do model
    Midia.create({
        cliente: cliente,
        tipo: tipo,
        valor: valor,
        dataInicio: dataInicio,
        dataFinal: dataFinal
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(midia => {
            if (midia) {
                res.status(status.OK).send(midia);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SearchAll = (req, res, next) => {
    Midia.findAll()
        .then(midia => {
            if (midia) {
                res.status(status.OK).send(midia);
            }
        })
        .catch(error => next(error));
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Midia.findByPk(id)
        .then(midia => {
            if (midia) {
                res.status(status.OK).send(midia);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};


//atualizar os dados
exports.Update = (req, res, next) => {
    //na requisicao de atualizar
    //quando atualizamos enviamos o id, que vai ser pego da url
    const id = req.params.id;
    const cliente = req.body.cliente;
    const tipo = req.body.tipo;
    const valor = req.body.valor;
    const dataInicio = req.body.dataInicio;
    const dataFinal = req.body.dataFinal;

    Midia.findByPk(id)
        //primeiro precisamos verificar se o dado existe
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(midia => {
            if (midia) {
                //se existir, vai atualizar
                //passa um objeto com as infos
                midia.update({
                    cliente: cliente,
                    tipo: tipo,
                    valor: valor,
                    dataInicio: dataInicio,
                    dataFinal: dataFinal
                },
                    //recebe um parametro id na clausula where
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        //status 200 é o padrao
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                //caso nao existir, retorna erro
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Midia.findByPk(id)
        .then(midia => {
            if (midia) {
                midia.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
