require("dotenv").config()// usar variables de entorno

const express = require("express") // nos ayuda a levantar la app
const conectarBD = require('../config/db');
const cors = require("cors")
const app = express()



const port = 5000;
app.use(express.json());
//aca van las rutas
app.use('/api/cliente', require('../routes/RoutesCliente'))



conectarBD();
app.use(cors());

app.listen(port, () => console.log('nuestro servidor se encuentra conectado http://localhost:5000', port))
app.get('/', (req, res) => {
    res.send("Bienvenidos ");
});

