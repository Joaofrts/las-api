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

  buscarDadosPessoais(id) {
    const sql =
      "SELECT nomeCompleto,dataNascimento,rg,cpf FROM Usuarios WHERE id = ?";

    return query(sql, id);
  }

  buscarContatos(id) {
    const sql = "SELECT telefone,celular,email FROM Usuarios WHERE id = ?";

    return query(sql, id);
  }

  buscarEndereco(id) {
    const sql =
      "SELECT cep,endereco,numero,complemento,bairro FROM Usuarios WHERE id =?";

    return query(sql, id);
  }

  adicionar(usuario) {
    const sql = "INSERT INTO Usuarios SET ?";
    return query(sql, usuario);
  }

  alterar(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return query(sql, [valores, id]);
  }

  atualizarDadosPessoais(id, dadosPessoais) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return query(sql, [dadosPessoais, id]);
  }

  atualizarContatos(id, contatos) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";

    return query(sql, [contatos, id]);
  }

  atualizarSenha(id, senha) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";

    return query(sql, [senha, id]);
  }

  atualizarEndereco(id, endereço) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";

    return query(sql, [endereço, id]);
  }

  excluir(id) {
    const sql = "DELETE FROM Usuarios WHERE id = ?";
    return query(sql, id);
  }
}

module.exports = new Usuarios();
