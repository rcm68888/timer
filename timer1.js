let input = process.argv.slice(2);

const beepInterval = input
	.map(x => (x = Number(x)))
	.filter(element => {
		if (isNaN(element) || element < 0) {
			return false;
		}
		return true;
	});

for (let x of beepInterval) {
	setTimeout(() => {
		process.stdout.write("\x07");

		// console.log(x);
	}, x * 1000);
};