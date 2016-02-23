function isValidNum(num) {
	for(let i=2; i<=20; i++) {
		if(num%i !== 0) {
			return false;
		}
	}
	return true;
}

let check = 20;

while(!isValidNum(check)) {
	check++;
}

console.log(check);