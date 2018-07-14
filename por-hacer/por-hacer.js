const fs = require('fs');

let listadoporhacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoporhacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se puede guardar', err)
            //     reject(err)
            // else
            //     resolve('Data Saved!'.yellow)
    });
}

const cargarDB = () => {
    try {
        listadoporhacer = require('../db/data.json');

    } catch (error) {
        listadoporhacer = [];
    }

}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoporhacer.push(porHacer);

    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoporhacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoporhacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoporhacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoporhacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}