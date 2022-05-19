const repositorio = require("../repositorios/evento");
const moment = require("moment");

class Eventos {
  listar() {
    return repositorio.listar();
  }
  listarStatus(status) {
    return repositorio.listarStatus(status);
  }
  buscaPorId(id) {
    return repositorio.buscaPorId(id);
  }
  adicionar(evento) {
    return repositorio.adicionar(evento);
  }
  alterar(id, valores) {
    return repositorio.alterar(id, valores);
  }

  excluir(id) {
    return repositorio.excluir(id);
  }

  isDatasValidas(evento) {
    if (evento.dataFim && evento.dataInicio) {
      return (
        moment().isBefore(evento.dataInicio) &&
        moment(evento.dataFim).isSameOrAfter(evento.dataInicio)
      );
    } else {
      return true;
    }
  }
}

module.exports = new Eventos();
