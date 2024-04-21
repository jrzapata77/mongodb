const mongoose = require('mongoose');

require('dotenv').config();

// funcion para hacer la coneccion

const conectarBD = () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => console.log("estamos conectados con mongoBD"))
        .catch((err) => console.error(err));
        
}
module.exports = conectarBD;