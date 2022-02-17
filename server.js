const express = require("express");
const path= require("path");

const userRoutes=require("./routes/users")

function views(document){
  return path.join(__dirname,"views",document)
}

const app = express();

/*===================
 Procesos Intermedios
=====================*/
app.use(express.text()); //Cada vez que se haga uso de la app, se ejecutará express.text()
app.use(express.json()); //Cada vez que se haga uso de la app, se ejecutará express.json()
app.use(express.urlencoded({extended:true})) // Cada vez que se haga uso de la app, se ejecute express.urlencoded()
app.use(express.static(path.join(__dirname,"static")));
app.use(userRoutes)



/*======================
          Rutas
========================*/
app.get('/',function(req,res){
  
  // Podemos obtener el path con join
  return res.sendFile(views("index.html"))
})


/*===================
        API
=====================*/
// app.post("/registrar_usuario", async (req, res) => {
//   const user = req.body;
//   const results = await db.insert("users", user);
//   console.log(results);
//   return res.json(results);
// });
// app.get("/mostrar_usuarios", async (req, res) => {
//   try {
//     const results = await db.query("SELECT * FROM users");
//     return res.json(results);
//   } catch (err) {
//     return res.json(err);
//   }
// });
// app.post("/editar_usuario", async (req, res) => {
//   try {
//     const id = req.body.id;
//     const user = req.body.user;
//     const results = await db.query("UPDATE users SET ? WHERE id=?", [user, id]);
//     return res.json(results);
//   } catch (err) {
//     return res.json(err);
//   }
// });
// app.post("/borrar_usuario", async (req, res) => {
//   const id = req.body.id;
//   const results = await db.del("users", id);
//   return res.json(results);
// });

app.listen(4000, () => {
  console.log("Running... http://localhost:4000/");
});
