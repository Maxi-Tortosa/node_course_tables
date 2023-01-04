const fs = require('fs');

const crearArchivo_tarea = async (base, listar, limit) => {
	try {
		let salida = '';

		for (var i = 1; i < limit + 1; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
		}

		if (listar !== false) {
			console.log('==================================');
			console.log(`         TABLAS DEL ${base}       `);
			console.log('==================================');
			console.log(salida);
		}

		await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

		return `tabla-${base}.txt`;
	} catch (error) {
		throw error;
	}
};

module.exports = { crearArchivo_tarea };
