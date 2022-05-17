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

  isDatasValidas(datas) {
    return (
      moment().isBefore(datas.dataInicio) &&
      moment(datas.dataFim).isSameOrAfter(datas.dataInicio)
    );
  }
}

module.exports = new Eventos();
