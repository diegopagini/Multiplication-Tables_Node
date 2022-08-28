/** @format */

const fs = require('fs'); // "fs" is from File System. And "require" is the way to import packages in node.

console.clear(); // To clear the console.

// console.log('====================');
// console.log('   Tabla del: 5');
// console.log('====================');

const base = 5;
let salida = '';

for (let i = 1; i <= 10; i++) {
	salida += `${base} x ${i} = ${base * i}\n`;
}

fs.writeFileSync('tabla-5.txt', salida, (err) => {
	// fs.writeFileSync to create a file
	if (err) throw err;

	console.log('tabla-5.txt creado');
});
