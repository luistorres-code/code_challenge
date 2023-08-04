function getIndecesToSum(array, target) {
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

console.log(getIndecesToSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(getIndecesToSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(getIndecesToSum([3, 3], 6)); // Output: [0, 1]
console.log(getIndecesToSum([3, 2, 3], 6)); // Output: [0, 2]
