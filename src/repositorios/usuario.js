const query = require("../infraestrutura/database/queries");

class Usuarios {
  listar() {
    const sql = "SELECT id,nome,urlFotoPerfil FROM Usuarios";
    return query(sql);
  }
  buscarPorId(id) {
    const sql = "SELECT id,nome,urlFotoPerfil FROM Usuarios WHERE id = ?";
    return query(sql, id);
  }
  buscarPorNome(nome) {
    const sql = "SELECT id,nome,urlFotoPerfil FROM Usuarios WHERE nome like ?";
    return query(sql, "%" + nome + "%");
  }

  adicionar(usuario) {
    const sql = "INSERT INTO Usuarios SET ?";
    return query(sql, usuario);
  }

  alterar(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return query(sql, [valores, id]);
  }
  excluir(id) {
    const sql = "DELETE FROM Usuarios WHERE id = ?";
    return query(sql, id);
  }
}

module.exports = new Usuarios();
