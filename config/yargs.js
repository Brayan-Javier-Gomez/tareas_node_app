const opc = {
    descripcion: {
        demand: false,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}
const argv = require('yargs')
    .command('crear', 'Genera en la base de datos una nueva tarea por hacer', opc)
    .command('listar', 'Genera en la base de datos una nueva tarea por hacer', opc)
    .command('actualizar', 'Actualiza una tarea para cambiar su estado', opc)
    .command('borrar', 'Elimina del registro de tareas una tarea en especifico', opc)
    .help()
    .argv



module.exports = {
    argv
}