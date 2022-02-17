const express = require("express");
const { get } = require("http");
const path = require("path");
const UserController = require("../controllers/users");

function views(document) {
  return path.join(__dirname, "../", "views", document);
}
const router = express.Router();
//Define the controller
const userController = new UserController();

/*=============
    CREATE
=============*/
router.get("/registro", function (req, res) {
  return res.sendFile(views("registro.html"));
});

router.post("/registro", async function (request, response) {
  const persona = request.body;
  const user = await userController.create(persona);
  if (user.success) {
    return response.redirect("/");
  } else {
    return response.redirect("/registro");
  }
  // Nos lleva luego a la página principal
});

/*=============
    READ
=============*/

router.get("/users", (req, res) => {
  return res.sendFile(views("users.html"));
});

router.get("/api/users", async function (req, res) {
  var users = await userController.readAll();
  return res.json(users);
});

/*=============
    UPDATE
=============*/
router.get("/edit", (req, res) => {
  return res.sendFile(views("edit.html"));
});

router.post("/edit", async function (req, res) {
  const persona = req.body;
  const id = req.body.id;
  const user = await userController.edit(id, persona);
  return res.redirect("/users");
});

/*=============
    DELETE
=============*/

router.get("/del", (req, res) => {
  return res.sendFile(views("delete.html"));
});

router.post("/del", async function (req, res)  {
  const id = req.body.id;
  await userController.del(id);
  return res.redirect("/del");  
});

module.exports = router;
