const descripcion = {
    demand: true,
    alias: 'd',
    descripcion: 'Nombre de la tarea'
}

const completado = {
    alias: 'c',
    default: true,
    descripcion: 'Marca completado la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Elimina un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}