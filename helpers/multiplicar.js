const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar) => {
	try {
		let salida = '';
		for (var i = 1; i < 11; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
		}

		if (listar !== false) {
			console.log('=================================='.bgBlue);
			console.log(`         TABLAS DEL ${base}       `.bgWhite);
			console.log('=================================='.bgBlue);
			console.log(salida.red);
		}

		await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

		return `tabla-${base}.txt`;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	crearArchivo,
};
