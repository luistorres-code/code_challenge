function twoNumbersSum(array, target) {
	const hashMap = new Map();

	for (let i = 0; i < array.length; i++) {
		const complement = target - array[i];
		if (hashMap.has(complement)) {
			return [hashMap.get(complement), i];
		}
		hashMap.set(array[i], i);
	}

	return [];
}

console.log(twoNumbersSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoNumbersSum([3, 2, 4], 6)); // [1, 2]
console.log(twoNumbersSum([3, 3], 6)); // [0, 1]
console.log(twoNumbersSum([3, 2, 3], 6)); // [0, 2]
console.log(twoNumbersSum([3, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)); // [1, 2]
