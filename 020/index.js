let num = '1';

function multiply(a, b) {
	console.log('multiply', a, b);
	let alist = getList(a);
	let blist = getList(b);
	let multipliedList = multiplyLists(alist, blist);
	// let reducedList = reduceList(multipliedList);
	return multipliedList.reduce((s, multiples) => {
		let power = multiples.pop();
		let multiplier = multiples.pop();
		console.log(power, multiplier);
		let newSum = sum(s, multiplier+'0'.repeat(power));
		console.log(newSum);
		return newSum;
	}, '0');
}

function sum(a, b) {
	console.log('sum', a, b);
	let result = '';

	// Pad the shorter number with zeros
	while(a.length > b.length) {
		b = '0'+b;
	}
	while(b.length > a.length) {
		a = '0'+a;
	}

	// Set up the addition columns
	let columns = [];
	for(let i=0; i<a.length; i++) {
		columns.push([
			a.charAt(i),
			b.charAt(i)
		]);
	}

	// Reverse the columns so that we go
	// from least significant to most
	// significant digits
	columns.reverse();

	// Sum all columns
	for(let i=0; i<columns.length; i++) {
		let sum = columns[i].reduce((partial, num) => {
			return partial + parseInt(num);
		}, 0).toString();

		// Store the digit
		result = sum.charAt(sum.length-1) + result;

		// Chop off the digit that we just stored
		sum = sum.substr(0, sum.length-1);
		if(sum.length) {
			if(columns.length <= i+1) {
				columns.push([]);
			}
			columns[i+1].push(sum);
		}
	};

	if(parseInt(result) !== parseInt(a)+parseInt(b)) {
		console.log(columns);
		console.log(a, b, result);
	}

	return result;
}

function getList(num) {
	let list = [];
	for(let i=0; i<num.length; i++) {
		let digit = num.charAt(i);
		if(digit === '0') {
			continue;
		}
		let power = num.length-i-1;
		list.push([digit, power]);
	}
	return list;
}

function multiplyLists(alist, blist) {
	console.log('alist', alist);
	console.log('blist', blist);
	let result = [];
	alist.forEach(a => {
		blist.forEach(b => {
			// result.concat(multiplyLists(
			// 	[[a[0], 0]],
			// 	[[b[0], 0]]
			// ));
			let pow = 0;
			let mult = a[0]*b[0];
			while(mult%10 === 0) {
				pow++;
				mult /= 10;
			}
			result.push([mult.toString(), pow]);
			result.push([a[0], b[1]]);
			result.push([b[0], a[1]]);
			result.push(['1', a[1]+b[1]]);
			// let newList = [];
			// for(let i=0; i<a.length-1; i++) {
			// 	newList.push(a[i]);
			// }
			// for(let i=0; i<b.length-1; i++) {
			// 	newList.push(b[i]);
			// }
			// newList.push(a[a.length-1]+b[b.length-1]);
			// result.push(newList);
		});
	});
	return result;
}

function reduceList(list) {
	let f = list.reduce((factored, multiples) => {
		let power = multiples.pop();
		let multiplied = multiples.reduce((m, num) => {
			return m*num;
		});
		while(multiplied%10 === 0) {
			power++;
			multiplied /= 10;
		}

		if(!factored.hasOwnProperty(power)) {
			factored[power] = '0';
		}

		factored[power] = sum(factored[power], multiplied.toString());
		return factored;
	}, {});

	let result = [];
	for(let power in f) {
		result.push([f[power], parseInt(power)]);
	}
	return result;
}

// console.assert(sum('1', '1') === '2', 1);
// console.assert(sum('0', '1') === '1', 2);
// console.assert(sum('999', '79') === '1078', 3);

// console.assert(multiply('1', '1') === '1', 4);
// console.assert(multiply('0', '1') === '0', 5);
// console.assert(multiply('999', '79') === '7821', 6);
// console.log('multiply', multiply('1', '1'));
// let alist = getList('1');
// let blist = getList('1');
// let ml = multiplyLists(alist, blist);
// console.log('ml', ml);


let factorial = 1;
for(let i=2; i<=100; i++) {
	factorial *= i;
	while(factorial % 10 == 0) {
		factorial /= 10;
	}
}
console.log(factorial);

// console.log(num);

// console.log(multiply('51090942171709440000', '22'));

// console.log(multiply('56', '72'));

// (multiply('1', '2'));
// (multiply('100', '2'));
// console.log(multiply('56', '72'), 56*72);