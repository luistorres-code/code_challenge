import twoNumbersSum from "./twoNumbersSum";
import getMissingNumbers from "./missingNumbers";

const problemsDict = {
	1: {
		name: "Two Numbers Sum",
		functionSolve: twoNumbersSum,
		funtionInString: `function twoNumbersSum(array, target) {
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
		}`,
		problem: "Given a list nums of n integers where nums[i] is in the range [1, list length], write a function that solves the following problem; return a list of all the integers in the range [1, list length] that do not appear in nums.",
		examples: ["Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].", "Input: nums = [3,2,4], target = 6\nOutput: [1,2]", "Input: nums = [3,3], target = 6\nOutput: [0,1]"],
		timeComplexity: {
			note: "O(n) - linear time complexity",
			explanation: "The time complexity of the function is O(n), where n is the number of elements in the input array. The function iterates through the input array exactly once with a loop that goes from 0 to array.length - 1. In each iteration, it performs constant time operations such as map lookups, additions, and checks. The most time-consuming operation in this function is the loop, and since it iterates through the array once, the time complexity is linear in terms of the array size.",
		},
		spaceComplexity: {
			note: "O(n) - linear space complexity",
			explanation: "The space complexity of the function is O(n), where n is the number of elements in the input array. The function uses a Map data structure named hashMap to store elements of the input array along with their indices. In the worst case, all elements of the array can be stored in the hashMap. Therefore, the space required by the hashMap is proportional to the number of elements in the array, resulting in a linear space complexity.",
		},
	},
	2: {
		name: "Missing Numbers",
		functionSolve: getMissingNumbers,
		funtionInString: `function getMissingNumbers(arrayOfNumbers) {
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
		}`,
		problem: "Given a list of integers nums and an integer target, write a function that solves the following problem; return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
		examples: ["Input: nums = [4,3,2,7,8,2,3,1]\nOutput: [5,6]", "Input: nums = [1,1]\nOutput: [2]"],
		timeComplexity: {
			note: "O(n) - linear time complexity",
			explanation: "The time complexity of the function is O(n), where n is the number of elements in the arrayOfNumbers. The function has a single loop that goes from 1 to arrayOfNumbers.length. In each iteration, it performs constant time operations such as set lookups and array push operations. The loop iterates through the entire range of 1 to arrayOfNumbers.length once. Hence, the time complexity is linear in terms of the number of elements in the input array.",
		},
		spaceComplexity: {
			note: "O(n) - linear space complexity",
			explanation: "The space complexity of the function is O(n), where n is the number of elements in the arrayOfNumbers. The function creates a new array named missingNumbers, which can potentially store all missing numbers from the range 1 to arrayOfNumbers.length. In the worst case, if all numbers from 1 to arrayOfNumbers.length are missing, the missingNumbers array will contain all those numbers. Additionally, the function also creates a setOfNumbers using the Set constructor to store the unique elements from the input array. The size of the setOfNumbers is bounded by the number of elements in the arrayOfNumbers.",
		},
	},
};

export default problemsDict;
