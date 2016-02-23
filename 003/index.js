let num = 600851475143;
let max = Math.ceil(Math.sqrt(num));
let factors = [];

function isPrime(num) {
	for(let i=3; i<num; i++) {
		if(num%i === 0) {
			return false;
		}
	}
	return true;
}

for(let i=2; i<=max; i++) {
	if(num%i === 0) {
		factors.push(i);
		factors.push(num / i);
	}
}

let maxPrimeFactor = null;
factors.forEach(factor => {
	if(isPrime(factor)) {
		if(factor > maxPrimeFactor || maxPrimeFactor === null) {
			maxPrimeFactor = factor;
		}
	}
});

console.log(maxPrimeFactor);
