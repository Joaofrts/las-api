const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());

jest.mock("../src/repositorios/usuario");

describe("API de Usuarios", () => {
  test("Listar Usuarios", async () => {
    const resp = await request.get("/usuarios");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual([
      {
        id: 1,
        nome: "Paulo Silva",
        urlFotoPerfil: "https://randomuser.me/api/portraits/men/91.jpg",
      },
      {
        id: 2,
        nome: "Wellington Silva",
        urlFotoPerfil: "https://randomuser.me/api/portraits/men/92.jpg",
      },
    ]);
  });
});
