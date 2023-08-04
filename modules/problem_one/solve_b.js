function getNumbersMissing(arrayOfNumbers) {
	const missingNumbers = [];

	if (!Array.isArray(arrayOfNumbers)) {
		return missingNumbers;
	}

	if (arrayOfNumbers.length === 0) {
		return missingNumbers;
	}

	arrayOfNumbers.sort((a, b) => a - b); // Ordenar el arreglo

	const numberSet = {}; // Usar un objeto para verificar existencia más eficientemente

	for (let i = 0; i < arrayOfNumbers.length; i++) {
		numberSet[arrayOfNumbers[i]] = true;
	}

	for (let i = 1; i <= arrayOfNumbers.length; i++) {
		if (!numberSet[i]) {
			missingNumbers.push(i);
		}
	}

	return missingNumbers;
}

console.log(getNumbersMissing([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(getNumbersMissing([1, 1]));
