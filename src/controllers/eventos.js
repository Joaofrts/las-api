const Eventos = require("../models/eventos");

module.exports = (app) => {
  app.get("/eventos", (req, res, next) => {
    Eventos.listar()
      .then((resultados) => res.json(resultados))
      .catch((erros) => next(erros));
  });
  app.get("/eventos/status/:status", (req, res, next) => {
    const status = req.params.status;

    Eventos.listarStatus(status)
      .then((resultados) => res.json(resultados))
      .catch((erros) => next(erros));
  });
  app.get("/eventos/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Eventos.buscaPorId(id)
      .then((resultados) => res.json(resultados))
      .catch((erros) => next(erros));
  });
  app.post("/eventos", (req, res, next) => {
    const evento = req.body;

    const dataEhValida = Eventos.isDatasValidas(evento);
    if (dataEhValida) {
      Eventos.adicionar(evento)
        .then(() => res.send("Evento incluído com sucesso"))
        .catch((erros) => next(erros));
    } else {
      res.send("Data Invalida!! Por favor insira a data corretamente.");
    }
  });
  app.put("/eventos/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Eventos.alterar(id, valores)
      .then(() => res.send("Evento atualizado com sucesso"))
      .catch((erros) => next(erros));
  });
  app.delete("/eventos/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Eventos.excluir(id)
      .then(() => res.send("Evento excluído com sucesso"))
      .catch((erros) => next(erros));
  });
};
