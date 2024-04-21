// exportamos nuestro modelo
//const { trusted } = require('mongoose');
const Cliente = require('../models/Cliente');

//funcion agregar clientes

exports.agregarClientes = async (req, res) => {
    try {
        let clientes = new Cliente(req.body)
        await clientes.save();
        res.send(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un cliente')
    }
}
// MOSTRAR CLIENTES
exports.mostrarClientes = async (req, res) => {
    try {
        let clientes = await Cliente.find();
        res.json(clientes)

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un cliente')
    }
};

exports.mostrarUnClientes = async (req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id)
        if (!clientes) {
            res.status(404).json({ msg: "no se encuentra el cliente" })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('hibo un error al agregar un cliente')
    }
}
// funcion para eliminar
exports.eliminarClientes = async (req, res) => {
    try {

        let clientes = await Cliente.findById(req.params.id);
        if (!clientes) {
            res.status(400).json({ mgs: "el cliente no esiste" })
            return
        }
        await Cliente.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "el cliente fue eliminado" })

    } catch (error) {
        console.log(error)
        res.status(500).send('hibo un error al agregar un cliente')

    }
}

// metodo de modificar 
exports.modificarCliente = async (req, res) => {
    try {
        let cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cliente) {
            return res.status(404).send('Cliente no encontrado')
        }
        res.json(cliente)



    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al modificar  un cliente')

    }
}


//***************************************************
