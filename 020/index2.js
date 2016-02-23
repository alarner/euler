const MAX_NUM = 9007199254740991;
let BigNumber = function(num) {
	num = num || 0;
	if(Array.isArray(num)) {
		this._internal = num.reverse();
	}
	else {
		this._internal = [num];
	}

	while(this._internal[this._internal.length-1] === 0 && this._internal.length > 1) {
		this._internal.pop();
	}
};

BigNumber.prototype.add = function(other) {
	let num1 = other._internal;
	let num2 = this._internal;

	while(num1.length > num2.length) {
		num2.push(0);
	}

	while(num2.length > num1.length) {
		num1.push(0);
	}

	console.log(num1, num2);

	let carry = 0;
	let i = 0;
	let newInternal = [0];

	do {
		let bit1 = num1[i] & 1;
		let bit2 = num2[i] & 1;
		let sum = carry + bit1 + bit2;
		// let newBit = 0;
		// if(sum === 3) {
		// 	carry = 1;
		// 	newBit = 1;
		// }
		// else if(sum === 2) {
		// 	carry = 1;
		// 	newBit = 0;
		// }
		// else {
		// 	carry = 0;
		// 	newBit = 1;
		// }

		// console.log('bits', bit1, bit2);
		console.log('sum', sum);
		// console.log('newBit', newBit);
		console.log('new-pre', newInternal);

		newInternal[newInternal.length-1] += sum;

		// if(MAX_NUM - newBit > newInternal[newInternal.length-1]) {
		// 	console.log('a');
		// 	newInternal[newInternal.length-1] += newBit;
		// }
		// else {
		// 	console.log('b');
		// 	let old = newInternal[newInternal.length-1];
		// 	newInternal[newInternal.length-1] = MAX_NUM;
		// 	newInternal.push(sum - (MAX_NUM - old));
		// }

		num1[i] = num1[i] >> 1;
		num2[i] = num2[i] >> 1;

		if(num1[i] === 0 && num2[i] == 0) {
			i++;
		}

		if(i<num1.length) {
			newInternal[newInternal.length-1] = newInternal[newInternal.length-1] << 1;
		}

		console.log('new-post', newInternal);

	} while(i<num1.length);

	console.log(newInternal);


	// while(i<num1.length) {
	// 	let bit1 = num1[i] & 1;
	// 	let bit2 = num2[i] & 1;
	// 	let sum = carry + bit1 + bit2;
		// let newBit = 0;
		// console.log('sum', sum);
		// if(sum === 3) {
		// 	carry = 1;
		// 	newBit = 1;
		// }
		// else if(sum === 2) {
		// 	carry = 1;
		// 	newBit = 0;
		// }
		// else {
		// 	carry = 0;
		// 	newBit = 1;
		// }
	// 	newInternal[i] += newBit;
	// 	num1[i] = num1[i] >> 1;
	// 	num2[i] = num2[i] >> 1;
	// 	console.log('newInternal', newInternal);
	// 	console.log(num1[i], num2[i]);

	// 	if(num1[i] === 0 && num2[i] == 0) {
	// 		i++;
	// 		if(i >= num1.length) {
	// 			if(newInternal[i-1] > 9007199254740990) {
	// 				console.log('a');
	// 				newInternal.push(carry);
	// 			}
	// 			else if(carry) {
	// 				console.log('b');
	// 				newInternal[i-1] += carry;
	// 				newInternal[i-1] = newInternal[i-1] << 1;
	// 			}
	// 		}
	// 	}
	// 	else {
	// 		newInternal[i] = newInternal[i] << 1;
	// 	}
	// }

	console.log(newInternal);

	return new BigNumber(newInternal.reverse());
};

BigNumber.prototype.toString = function() {
	let result = '';
	for(let i=this._internal.length-1; i>=0; i--) {
		result += this._internal[i];
	}
	return result;
};

// Test: toString
console.assert((new BigNumber(0)).toString() === '0');
console.assert((new BigNumber(10)).toString() === '10');
console.assert((new BigNumber(1234567)).toString() === '1234567');
console.assert((new BigNumber([1, 9007199254740991])).toString() === '19007199254740991');

// Test: add
// console.assert((new BigNumber(0)).add(new BigNumber(1)).toString() === '1');
// console.assert((new BigNumber(1)).add(new BigNumber(1)).toString() === '2');
console.assert((new BigNumber(3)).add(new BigNumber(1)).toString() === '4');
