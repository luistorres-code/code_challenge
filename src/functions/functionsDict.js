import twoNumbersSum from "./twoNumbersSum";
import getMissingNumbers from "./missingNumbers";

const problemsDict = {
	1: {
		name: "Two Numbers Sum",
		functionSolve: twoNumbersSum,
		problem: "Given a list nums of n integers where nums[i] is in the range [1, list length], write a function that solves the following problem; return a list of all the integers in the range [1, list length] that do not appear in nums.",
		examples: ["Input: nums = [4,3,2,7,8,2,3,1]\nOutput: [5,6]", "Input: nums = [1,1]\nOutput: [2]"],
	},
	2: {
		name: "Missing Numbers",
		functionSolve: getMissingNumbers,
		problem: "Given a list of integers nums and an integer target, write a function that solves the following problem; return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
		examples: ["Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].", "Input: nums = [3,2,4], target = 6\nOutput: [1,2]", "Input: nums = [3,3], target = 6\nOutput: [0,1]"],
	},
};

export default problemsDict;
