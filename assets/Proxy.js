const target = {
	blue: 'Azul',
	yellow: 'Amarillo',
	red: 'Rojo',
	green: 'Verde'
}

const handler = {
	get(target, prop) {
		if(prop in target) {
			return target[prop];
		}
		let suggestion = Object.keys(target).find(key => Levenshtein.get(prop, key) <= 3);
		console.error(`${prop} no existe. ${suggestion ? `Quisiste decir ${suggestion}?`: ""}`);
		return target[prop];
	}
}

const proxy = new Proxy(target, handler);

//console.log(`Obteniendo blue: ${proxy.blue}`);
//console.log(`Obteniendo bluw: ${proxy.bluw}`);


function* fibonacci() {
	let a = 1;
	let b = 1;
	while(true) {
		yield a;
		a = a + b;
		yield b;
		b = a + b;
	}
}