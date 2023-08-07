function twoNumbersSum(array, target) {
	// Create a Map data structure to store elements of the input array along with their indices
	const hashMap = new Map();

	// Iterate through the input array
	for (let i = 0; i < array.length; i++) {
		// Calculate the complement of the current element
		const complement = target - array[i];

		// If the complement is in the hashMap, return the indices of the two numbers
		if (hashMap.has(complement)) {
			return [hashMap.get(complement), i];
		}

		// Add the current element to the hashMap if it is not already in the hashMap
		hashMap.set(array[i], i);
	}

	// Return an empty array if no two numbers in the input array add up to the target
	return [];
}

function runUnitTest(testNumber, inputArray, target, expectedResult) {
	const result = twoNumbersSum(inputArray, target);
	const testPassed = JSON.stringify(result) === JSON.stringify(expectedResult);
	console.log(`Test ${testNumber}:`);
	console.log(`Input Array: [${inputArray.join(", ")}]`);
	console.log(`Target: ${target}`);
	console.log(`Expected Result: [${expectedResult.join(", ")}]`);
	console.log(`Actual Result: [${result.join(", ")}]`);
	console.log(`Test Passed: ${testPassed}`);
	console.log();
}

// Test 1
runUnitTest(1, [2, 7, 11, 15], 9, [0, 1]);
// Test 2
runUnitTest(2, [3, 2, 4], 6, [1, 2]);
// Test 3
runUnitTest(3, [3, 3], 6, [0, 1]);
// Test 4
runUnitTest(4, [3, 2, 3], 6, [0, 2]);
// Test 5
runUnitTest(5, [3, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6, [0, 2]);
// Test 6
runUnitTest(6, [1, 1, 1, 1, 1, 1, 1], 3, []);
// Test 7
runUnitTest(7, [5, 5, 5, 5], 10, [0, 1]);
// Test 8
runUnitTest(8, [0, 1, 2, 3, 4, 5], 5, [2, 3]);
// Test 9
runUnitTest(9, [100, 200, 300, 400, 500], 700, [2, 3]);
// Test 10
runUnitTest(10, [1, 2, 3, 4, 5], 9, [3, 4]);
