/* /* /* importamos la libreria express */
const express = require('express');
/* los paquetes instalados de mysql */
const sql =require('mysql');


/* llamamos a los metodos express */
const app = express();

app.use('/', express.static('public'));
/* app.use(express.static("public")); */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Configuración de conexión a la base de datos
const bd = sql.createConnection({
    host: 'comentarios.cvhpxwifv1ft.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'jhonbrayansilva',
    database: 'formulario'
});

// Conexión a la base de datos
bd.connect((erro) => {
    if (erro) {
        console.error('Error al conectar a la base de datos:', erro.stack);
        process.exit(1); // Salir si falla la conexión
    }
    console.log('Conectado a la base de datos MySQL');
});

/* Ruta personalizada para la sesión (HTML de contacto) */
//app.get('/envio', (req, res) => {
    //res.sendFile(__dirname + '/html/contacto.html'); // Ruta completa al archivo HTML
    //res.send('Gracais por ennviar los datos')
//});


// Ruta para insertar datos en la tabla `usuario` del formulario
app.post('/api/datos', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const sql = 'INSERT INTO usuario (nombre, email, mensaje) VALUES (?, ?, ?);';
    bd.query(sql, [nombre, email, mensaje], (error, result) => {
        if (error) {
            console.error('Error al insertar datos:', error);
            return res.status(500).json({ error: 'Error al insertar datos' });
        }

        res.send('Datos insertados correctamente');
    });
});

// Ruta para actualizar un mensaje de usuario
app.put('/api/datos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email, mensaje } = req.body;

    const sql = 'UPDATE usuario SET nombre = ?, email = ?, mensaje = ? WHERE id = ?;';
    bd.query(sql, [nombre, email, mensaje, id], (error, result) => {
        if (error) {
            console.error('Error al actualizar datos:', error);
            return res.status(500).json({ error: 'Error al actualizar datos' });
        }

        res.send('Datos actualizados correctamente');
    });
});

// Ruta para eliminar un usuario
app.delete('/api/datos/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM usuario WHERE id = ?;';
    bd.query(sql, [id], (error, result) => {
        if (error) {
            console.error('Error al eliminar datos:', error);
            return res.status(500).json({ error: 'Error al eliminar datos' });
        }

        res.send('Datos eliminados correctamente');
    });
});

// Ruta para obtener todos los usuarios
app.get('/api/datos', (req, res) => {
    const sql = 'SELEC T * FROM usuario;';
    bd.query(sql, (error, results) => {
        if (error) {
            console.error('Error al obtener datos:', error);
            return res.status(500).json({ error: 'Error al obtener datos' });
        }

        res.json(results);
    });
});
/* servidor donde se va a ejecutar */
app.listen(3001,()=>{ console.log(' servidor comentarios iniciando en http://localhost:3001')}); 