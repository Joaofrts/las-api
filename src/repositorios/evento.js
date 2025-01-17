const query = require("../infraestrutura/database/queries");

class Evento {
  listar() {
    const sql = "SELECT * FROM Eventos";

    return query(sql);
  }
  buscaPorId(id) {
    const sql = "SELECT * FROM Eventos WHERE id = ?";
    return query(sql, id);
  }
  adicionar(evento) {
    const sql = "INSERT INTO Eventos SET ?";
    return query(sql, evento);
  }
  alterar(id, valores) {
    const sql = "UPDATE Eventos SET ? WHERE id = ?";
    return query(sql, [valores, id]);
  }
  excluir(id) {
    const sql = "DELETE FROM Eventos WHERE id = ?";
    return query(sql, id);
  }
}

module.exports = new Evento();
