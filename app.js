// Importar libreria
const express = require("express");

// Modulo de mysql
const mysql = require("mysql");

// Crear conexion a la base de datos
let conexion = mysql.createConnection({
    host: "localhost",
    database: "gymconnect",
    user: "root",
    password: ""
});

// Objetos para llamar los metodos de express (server)
const app = express();

// motor para conectar mysql y js
app.set("view engine", "ejs");

// funcion para reconocer los datos de las paginas
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Rutas a cada pagina
app.get("/", function(req,res){
    res.render("index");
});

app.get("/form_registro_Admin", function(req,res){
    res.render("form_registro_Admin");
});

app.get("/form_singin_admin", function(req,res){
    res.render("form_singin_admin");
});

app.get("/interface_admin", function(req,res){
    res.render("interface_admin");
});

// Middleware ruta de archivos estaticos
app.use(express.static("public"));

// Activar ruta en el formulario
app.post("/validar", function(req,res){
    const datos = req.body;

    let cedula = datos.docId;
    let nombre = datos.name;
    let correo = datos.email;
    let contraseña = datos.pwd;
    let genero = datos.sexo
    let nacimiento = datos.birthDate
    let celular = datos.numero

    let buscar = "SELECT * FROM administrador WHERE identificacion = "+cedula +" ";

    conexion.query(buscar, function(error, row){
        if(error){
            throw error;
        }else{
            let mensaje;
            if(row.length>0){
                mensaje = "No se puede registrar, usuario ya existe";
                res.render("form_registro_Admin", {mensaje})
            }else{
                let registrar = "INSERT INTO administrador (identificacion, nombre, fecha_nacimiento, genero, correo, telefono, contrasenia) VALUES ('"+cedula +"', '"+nombre +"', '"+nacimiento +"', '"+genero +"', '"+correo +"', '"+celular +"', '"+contraseña +"')";
                conexion.query(registrar, function(error){
                    if(error){
                        throw error;
                    }else{
                        mensaje = "Datos almacenados correctamente";
                        res.render("index", {mensaje})
                    }
                });
            }
        }
    });
});

// autenticar datos de login
app.post("/auth", (req, res)=>{
   const correo = req.body.email;
   const contraseña = req.body.pwd;
   let mensaje = "";

   if(correo && contraseña){
    conexion.query("SELECT * FROM administrador WHERE correo = ?", [correo], (error, results)=>{
        if(results.length === 0 || contraseña !== results[0].contrasenia){
            mensaje = "Usuario o contraeña incorrecta";
            res.render("form_singin_admin", {mensaje});
        }else{
            res.render("interface_admin")
        }
    })

   }
})


// configurar el puerto usado para el servidor local
app.listen(3000,function(){
    console.log("El servidor es http://localhost:3000");
});
