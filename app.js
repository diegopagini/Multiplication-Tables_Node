/** @format */

const fs = require('fs'); // "fs" is from File System. And "require" is the way to import packages in node.

console.clear(); // To clear the console.

const base = 3;
console.log('====================');
console.log(`Tabla del: ${base}`);
console.log('====================');
let salida = '';

for (let i = 1; i <= 10; i++) {
	salida += `${base} x ${i} = ${base * i}\n`;
}

console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`, salida, (err) => {
	// First parameter the name of the file. Second the content of the file. Third the error.
	// fs.writeFileSync to create a file
	if (err) throw err;
	console.log(`tabla-${base}.txt creado`);
});
