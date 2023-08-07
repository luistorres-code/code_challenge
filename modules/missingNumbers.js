function getMissingNumbers(arrayOfNumbers) {
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

console.log(getMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
console.log(getMissingNumbers([1, 1])); // [2]
console.log(getMissingNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // []
console.log(getMissingNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12])); // [12]
