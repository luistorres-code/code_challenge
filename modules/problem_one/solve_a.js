function getNumbersMissing(arrayOfNumbers) {
	const missingNumbers = [];

	if (!Array.isArray(arrayOfNumbers)) {
		return missingNumbers;
	}

	if (arrayOfNumbers.length === 0) {
		return missingNumbers;
	}

	const setOfNumbers = new Set(arrayOfNumbers);

	for (let i = 1; i <= arrayOfNumbers.length; i++) {
		if (!setOfNumbers.has(i)) {
			missingNumbers.push(i);
		}
	}

	return missingNumbers;
}

// module.exports = getNumbersMissing;

console.log(getNumbersMissing([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(getNumbersMissing([1, 1]));
