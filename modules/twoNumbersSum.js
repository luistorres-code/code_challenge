export default function twoNumbersSum(array, target) {
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
