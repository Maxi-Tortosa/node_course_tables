const argvTarea = require('yargs')
	.option('b', {
		alias: 'base',
		type: 'number',
		demandOption: true,
		describe: 'Es la base de la tabla de multiplicar',
	})
	.option('l', {
		alias: 'listar',
		type: 'boolean',
		default: false,
		describe: 'Muestra la tabla de multiplicar',
	})
	.option('m', {
		alias: 'limit',
		type: 'number',
		default: 10,
		describe: 'Establece el límite de filas en la tabla de multiplicar',
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw 'La base tiene que ser un número';
		}
		return true;
	}).argv;

module.exports = argvTarea;
