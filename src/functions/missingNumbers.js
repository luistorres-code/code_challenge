export default function getMissingNumbers(arrayOfNumbers) {
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
