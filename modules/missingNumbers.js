function getMissingNumbers(arrayOfNumbers) {
	// Create an empty array to store the missing numbers
	const missingNumbers = [];

	// Return an empty array if the input is not an array
	if (!Array.isArray(arrayOfNumbers)) {
		return missingNumbers;
	}

	// Return an empty array if the input array is empty
	if (arrayOfNumbers.length === 0) {
		return missingNumbers;
	}

	// Create a Set data structure to store the elements of the input array
	const setOfNumbers = new Set(arrayOfNumbers);

	// Iterate through the numbers from 1 to the length of the input array
	for (let i = 1; i <= arrayOfNumbers.length; i++) {
		// If the current number is not in the set, add it to the missing numbers array
		if (!setOfNumbers.has(i)) {
			missingNumbers.push(i);
		}
	}

	// Return the missing numbers array
	return missingNumbers;
}

function runUnitTest(testNumber, inputArray, expectedResult) {
	const result = getMissingNumbers(inputArray);
	const testPassed = JSON.stringify(result) === JSON.stringify(expectedResult);
	console.log(`Test ${testNumber}:`);
	console.log(`Input Array: [${inputArray.join(", ")}]`);
	console.log(`Expected Result: [${expectedResult.join(", ")}]`);
	console.log(`Actual Result: [${result.join(", ")}]`);
	console.log(`Test Passed: ${testPassed}`);
	console.log();
}

// Test 1
runUnitTest(1, [], []);
// Test 2
runUnitTest(2, [1, 2, 3, 4, 5], []);
// Test 3
runUnitTest(3, [2, 3, 5, 7, 9], [1, 4]);
// Test 4
runUnitTest(4, [1, 2, 4, 6, 8], [3, 5]);
// Test 5
runUnitTest(5, [5, 2, 1, 6, 3], [4]);
// Test 6
runUnitTest(6, [0, 2, 3, 4], [1]);
// Test 7
runUnitTest(7, [0], [1]);
// Test 8
runUnitTest(8, [0, 1, 2, 3, 4], [5]);
// Test 9
runUnitTest(9, [1, 3, 5, 7, 9], [2, 4]);
// Test 10
runUnitTest(10, [10, 8, 6, 4, 2], [1, 3, 5]);
