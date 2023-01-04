// const { crearArchivo } = require('./helpers/multiplicar');
const { crearArchivo_tarea } = require('./helpers/tarea.js');
// const argv = require('./config/yargs.js');
const argvTarea = require('./config/yargs_tarea.js');
// const colors = require('colors');

console.clear();

console.log(argvTarea.b, argvTarea.limit);

// console.log(argv.b, argv.l);
// console.log(process.argv);
// console.log(argv);
// console.log('base:yargs', argv.b);
// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;

// const [, base = 5] = arg3.split('=');

// crearArchivo(argv.b, argv.l)
// 	.then((nombreArchivo) =>
// 		console.log(nombreArchivo.underline.yellow, 'creado')
// 	)
// 	.catch((error) => console.log(error));

crearArchivo_tarea(argvTarea.b, argvTarea.l, argvTarea.m)
	.then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
	.catch((error) => console.log(error));
