  const argv = require('./config/yargs').argv
  const por_hacer = require('./por-hacer/por_hacer');
  const color = require('colors');



  let comando = argv._[0];


  switch (comando) {
      case 'crear':
          let tarea = por_hacer.crear(argv.descripcion)
          console.log(tarea);
          break;

      case 'listar':
          let listar = por_hacer.getLista();
          for (let tarea of listar) {
              console.log('======================='.green);
              console.log(tarea.descripcion);
              console.log(tarea.completado);
              console.log('======================='.green);

          }

          break;
      case 'actualizar':
          console.log('Actualizar tareas');
          let actualizar = por_hacer.update(argv.descripcion, argv.completado)
          console.log(actualizar);
          break;
      case 'borrar':
          console.log('borrar');
          let borrar = por_hacer.borrar(argv.descripcion)
          console.log(borrar);
          break
      default:
          console.log('El comando es invalido, verifique o visite la ayuda');
  }