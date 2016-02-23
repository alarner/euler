let one = 1;
let two = 1;
let sum = 0;

do {
	let next = one + two;
	if(next%2 === 0) {
		sum += next;
	}
	one = two;
	two = next;
} while(two < 4000000);

console.log(sum);