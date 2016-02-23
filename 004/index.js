let largest = 0;

for(let i=100; i<999; i++) {
	for(let j=i; j<999; j++) {
		let num = j*i;
		if(num.toString() === num.toString().split('').reverse().join('')) {
			if(num > largest) {
				largest = num;
			}
		}
	}
}

console.log(largest);