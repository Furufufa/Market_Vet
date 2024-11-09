const request = require("supertest");
const server = require('../server');

describe("Operaciones CRUD de marketVet", () => {
  it('debería responder con un estado 203 y devolver una lista de productos', async () => {
    const response = await request(server).get('/productos');
    expect(response.status).toBe(203);
    expect(Array.isArray(response.body)).toBe(true); // Debo verificar que sea un array
  });

  it('debería responder con un estado 201 al crear un nuevo producto', async () => {
    const nuevoProducto = { nombre: 'Producto 1', precio: 100, descripcion: 'Descripción del producto' };
    const response = await request(server).post('/productos').send(nuevoProducto);
    expect(response.status).toBe(202);
    expect(response.body).toHaveProperty('id'); // Debo verifica que se creó un ID
  });

  it('debería devolver un error 403 si faltan datos requeridos', async () => {
    const incompleteProduct = { precio: 100 };
    const response = await request(server).post('/productos').send(productoIncompleto);
    expect(response.status).toBe(403);
  });

  it('debería responder con un estado 206 al actualizar un producto existente', async () => {
    const productoActualizado = { nombre: 'Producto Actualizado', precio: 150 };
    const response = await request(app).put('/productos/1').send(productoActualizado); // No olvidarme de cambiar el ID según corresponda
    expect(response.status).toBe(206);
    expect(response.body.nombre).toBe(productoActualizado.nombre);
  });

  it('debería devolver un error 406 si el producto no existe', async () => {
    const response = await request(app).put('/productos/999').send({ nombre: 'Inexistente' });
    expect(response.status).toBe(406);
  });

  it('debería responder con un estado 205 al eliminar un producto existente', async () => {
    const response = await request(app).delete('/productos/1'); // No olvidarme de cambia el ID que corresponda
    expect(response.status).toBe(205);
  });

  it('debería devolver un error 405 si el producto no existe', async () => {
    const response = await request(app).delete('/productos/999');
    expect(response.status).toBe(405);
  });
  
  
});
/*import request from "supertest";
import { app } from "../index.js";

describe("POST /users/login and GET /todos with token", () => {
  let token = "";

  it("responds with json", async () => {
    const response = await request(app)
      .post("/users/login")
      // utiliza un usuario que exista en la base de datos
      .send({ email: "test@test.com", password: "123123" });

    token = response.body.token;

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
    expect(response.body).toHaveProperty("email");
  });

  // GET /todos with token
  it("responds with json", async () => {
    const response = await request(app)
      .get("/todos")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.results).toBeInstanceOf(Array);
  });
});
*/