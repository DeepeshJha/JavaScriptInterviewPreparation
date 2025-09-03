/**
 * JavaScript Array and String Logical Programming Interview Questions
 * 
 * @author DeepeshJha
 * @date 2025-09-03
 * @lastUpdated 2025-09-03 05:24:43 UTC
 * @description Comprehensive collection of logical programming interview questions
 * focusing on JavaScript arrays and strings with multiple solution approaches
 * 
 * Categories:
 * - Easy Level (Questions 1-15)
 * - Medium Level (Questions 16-35) 
 * - Hard Level (Questions 36-50)
 * - Company Specific Questions (51-65)
 * - Advanced Problem Solving (66-80)
 */

console.log("JavaScript Array & String Interview Questions by DeepeshJha");
console.log("=".repeat(70));
console.log("Started at: 2025-09-03 05:24:43 UTC");
console.log("=".repeat(70));

// ==========================================
// EASY LEVEL QUESTIONS (1-15)
// ==========================================

/**
 * Question 1: Find Maximum and Minimum Element in Array
 * @param {number[]} arr - Input array
 * @returns {Object} Object containing max and min values
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function findMaxMin(arr) {
    if (arr.length === 0) return { max: null, min: null };
    
    // Approach 1: Single pass
    let max = arr[0], min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    
    console.log("Q1: Find Max/Min");
    console.log(`Input: [${arr}]`);
    console.log(`Output: Max=${max}, Min=${min}`);
    
    return { max, min };
}

/**
 * Question 2: Reverse an Array (Multiple Approaches)
 * @param {any[]} arr - Input array
 * @returns {any[]} Reversed array
 */
function reverseArrayMultiple(arr) {
    console.log("\nQ2: Reverse Array (Multiple Approaches)");
    console.log(`Input: [${arr}]`);
    
    // Approach 1: Two Pointers (In-place)
    function reverseInPlace(arr) {
        let left = 0, right = arr.length - 1;
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
        return arr;
    }
    
    // Approach 2: Using built-in reverse
    function reverseBuiltIn(arr) {
        return [...arr].reverse();
    }
    
    // Approach 3: Using recursion
    function reverseRecursive(arr, start = 0, end = arr.length - 1) {
        if (start >= end) return arr;
        [arr[start], arr[end]] = [arr[end], arr[start]];
        return reverseRecursive(arr, start + 1, end - 1);
    }
    
    // Approach 4: Using for loop with new array
    function reverseNewArray(arr) {
        let result = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            result.push(arr[i]);
        }
        return result;
    }
    
    let original = [...arr];
    console.log(`Two Pointers: [${reverseInPlace([...original])}]`);
    console.log(`Built-in: [${reverseBuiltIn(original)}]`);
    console.log(`Recursive: [${reverseRecursive([...original])}]`);
    console.log(`New Array: [${reverseNewArray(original)}]`);
    
    return reverseBuiltIn(arr);
}

/**
 * Question 3: Remove Duplicates from Array
 * @param {any[]} arr - Input array with duplicates
 * @returns {any[]} Array without duplicates
 */
function removeDuplicatesAdvanced(arr) {
    console.log("\nQ3: Remove Duplicates (Multiple Approaches)");
    console.log(`Input: [${arr}]`);
    
    // Approach 1: Using Set (Most efficient)
    function removeDuplicatesSet(arr) {
        return [...new Set(arr)];
    }
    
    // Approach 2: Using filter + indexOf
    function removeDuplicatesFilter(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }
    
    // Approach 3: Using reduce
    function removeDuplicatesReduce(arr) {
        return arr.reduce((acc, curr) => {
            if (!acc.includes(curr)) acc.push(curr);
            return acc;
        }, []);
    }
    
    // Approach 4: Using Map for complex objects
    function removeDuplicatesMap(arr, key = null) {
        if (key) {
            let seen = new Map();
            return arr.filter(item => {
                if (!seen.has(item[key])) {
                    seen.set(item[key], true);
                    return true;
                }
                return false;
            });
        }
        return removeDuplicatesSet(arr);
    }
    
    console.log(`Set: [${removeDuplicatesSet(arr)}]`);
    console.log(`Filter: [${removeDuplicatesFilter(arr)}]`);
    console.log(`Reduce: [${removeDuplicatesReduce(arr)}]`);
    
    return removeDuplicatesSet(arr);
}

/**
 * Question 4: Find Second Largest Element
 * @param {number[]} arr - Input array of numbers
 * @returns {number|null} Second largest element or null
 */
function findSecondLargest(arr) {
    console.log("\nQ4: Find Second Largest Element");
    console.log(`Input: [${arr}]`);
    
    if (arr.length < 2) {
        console.log("Output: null (array too small)");
        return null;
    }
    
    // Approach 1: Single pass
    let first = -Infinity, second = -Infinity;
    
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }
    
    let result = second === -Infinity ? null : second;
    console.log(`Output: ${result}`);
    return result;
}

/**
 * Question 5: Array Rotation (Left and Right)
 * @param {any[]} arr - Input array
 * @param {number} k - Number of positions to rotate
 * @param {string} direction - 'left' or 'right'
 * @returns {any[]} Rotated array
 */
function rotateArray(arr, k, direction = 'right') {
    console.log("\nQ5: Array Rotation");
    console.log(`Input: [${arr}], k=${k}, direction=${direction}`);
    
    if (arr.length === 0) return arr;
    k = k % arr.length;
    
    // Approach 1: Using slice and concat
    function rotateSlice(arr, k, direction) {
        if (direction === 'right') {
            return arr.slice(-k).concat(arr.slice(0, -k));
        } else {
            return arr.slice(k).concat(arr.slice(0, k));
        }
    }
    
    // Approach 2: Using reverse (in-place)
    function rotateReverse(arr, k, direction) {
        let result = [...arr];
        
        function reverse(arr, start, end) {
            while (start < end) {
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--;
            }
        }
        
        if (direction === 'right') {
            reverse(result, 0, result.length - 1);
            reverse(result, 0, k - 1);
            reverse(result, k, result.length - 1);
        } else {
            reverse(result, 0, k - 1);
            reverse(result, k, result.length - 1);
            reverse(result, 0, result.length - 1);
        }
        
        return result;
    }
    
    let result = rotateSlice(arr, k, direction);
    console.log(`Output: [${result}]`);
    return result;
}

/**
 * Question 6: Check if String is Palindrome
 * @param {string} s - Input string
 * @returns {boolean} True if palindrome, false otherwise
 */
function isPalindrome(s) {
    console.log("\nQ6: Check Palindrome");
    console.log(`Input: "${s}"`);
    
    // Clean string: remove non-alphanumeric and convert to lowercase
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Approach 1: Two pointers
    function isPalindromeTwoPointers(str) {
        let left = 0, right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    
    // Approach 2: Reverse comparison
    function isPalindromeReverse(str) {
        return str === str.split('').reverse().join('');
    }
    
    let result = isPalindromeTwoPointers(cleaned);
    console.log(`Cleaned: "${cleaned}"`);
    console.log(`Output: ${result}`);
    return result;
}

/**
 * Question 7: First Non-Repeating Character
 * @param {string} s - Input string
 * @returns {string|null} First non-repeating character or null
 */
function firstNonRepeatingChar(s) {
    console.log("\nQ7: First Non-Repeating Character");
    console.log(`Input: "${s}"`);
    
    // Approach 1: Using Map
    function firstNonRepeatingMap(s) {
        let charCount = new Map();
        
        // Count occurrences
        for (let char of s) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
        
        // Find first non-repeating
        for (let char of s) {
            if (charCount.get(char) === 1) {
                return char;
            }
        }
        
        return null;
    }
    
    // Approach 2: Using indexOf and lastIndexOf
    function firstNonRepeatingIndex(s) {
        for (let i = 0; i < s.length; i++) {
            if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
                return s[i];
            }
        }
        return null;
    }
    
    let result = firstNonRepeatingMap(s);
    console.log(`Output: "${result}"`);
    return result;
}

/**
 * Question 8: Check if Two Strings are Anagrams
 * @param {string} s1 - First string
 * @param {string} s2 - Second string
 * @returns {boolean} True if anagrams, false otherwise
 */
function areAnagrams(s1, s2) {
    console.log("\nQ8: Check Anagrams");
    console.log(`Input: "${s1}", "${s2}"`);
    
    if (s1.length !== s2.length) {
        console.log("Output: false (different lengths)");
        return false;
    }
    
    // Approach 1: Sorting
    function areAnagramsSort(s1, s2) {
        let sorted1 = s1.toLowerCase().split('').sort().join('');
        let sorted2 = s2.toLowerCase().split('').sort().join('');
        return sorted1 === sorted2;
    }
    
    // Approach 2: Character counting
    function areAnagramsCount(s1, s2) {
        let charCount = {};
        
        for (let char of s1.toLowerCase()) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        
        for (let char of s2.toLowerCase()) {
            if (!charCount[char]) return false;
            charCount[char]--;
        }
        
        return Object.values(charCount).every(count => count === 0);
    }
    
    let result = areAnagramsCount(s1, s2);
    console.log(`Output: ${result}`);
    return result;
}

/**
 * Question 9: Merge Two Sorted Arrays
 * @param {number[]} arr1 - First sorted array
 * @param {number[]} arr2 - Second sorted array
 * @returns {number[]} Merged sorted array
 */
function mergeSortedArrays(arr1, arr2) {
    console.log("\nQ9: Merge Two Sorted Arrays");
    console.log(`Input: [${arr1}], [${arr2}]`);
    
    let merged = [];
    let i = 0, j = 0;
    
    // Merge while both arrays have elements
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    // Add remaining elements
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    
    console.log(`Output: [${merged}]`);
    return merged;
}

/**
 * Question 10: Find Missing Number in Array (1 to n)
 * @param {number[]} nums - Array with one missing number
 * @returns {number} Missing number
 */
function findMissingNumber(nums) {
    console.log("\nQ10: Find Missing Number");
    console.log(`Input: [${nums}]`);
    
    // Approach 1: Mathematical sum
    function findMissingMath(nums) {
        let n = nums.length + 1;
        let expectedSum = (n * (n + 1)) / 2;
        let actualSum = nums.reduce((sum, num) => sum + num, 0);
        return expectedSum - actualSum;
    }
    
    // Approach 2: XOR approach
    function findMissingXOR(nums) {
        let n = nums.length + 1;
        let xor = 0;
        
        for (let i = 1; i <= n; i++) {
            xor ^= i;
        }
        
        for (let num of nums) {
            xor ^= num;
        }
        
        return xor;
    }
    
    let result = findMissingMath(nums);
    console.log(`Output: ${result}`);
    return result;
}

// ==========================================
// MEDIUM LEVEL QUESTIONS (16-35)
// ==========================================

/**
 * Question 16: Two Sum Problem
 * @param {number[]} nums - Array of numbers
 * @param {number} target - Target sum
 * @returns {number[]} Indices of two numbers that add up to target
 */
function twoSum(nums, target) {
    console.log("\nQ16: Two Sum Problem");
    console.log(`Input: [${nums}], target=${target}`);
    
    // Approach 1: Hash Map (Optimal)
    function twoSumOptimal(nums, target) {
        let map = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            
            if (map.has(complement)) {
                return [map.get(complement), i];
            }
            
            map.set(nums[i], i);
        }
        
        return [];
    }
    
    // Approach 2: Brute Force
    function twoSumBrute(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
        return [];
    }
    
    let result = twoSumOptimal(nums, target);
    console.log(`Output: [${result}]`);
    return result;
}

/**
 * Question 17: Three Sum Problem
 * @param {number[]} nums - Array of numbers
 * @returns {number[][]} Array of unique triplets that sum to zero
 */
function threeSum(nums) {
    console.log("\nQ17: Three Sum Problem");
    console.log(`Input: [${nums}]`);
    
    nums.sort((a, b) => a - b);
    let result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    console.log(`Output: ${JSON.stringify(result)}`);
    return result;
}

/**
 * Question 18: Maximum Subarray Sum (Kadane's Algorithm)
 * @param {number[]} nums - Array of numbers
 * @returns {Object} Maximum sum and the subarray
 */
function maxSubarraySum(nums) {
    console.log("\nQ18: Maximum Subarray Sum (Kadane's Algorithm)");
    console.log(`Input: [${nums}]`);
    
    if (nums.length === 0) return { maxSum: 0, subarray: [] };
    
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    let start = 0, end = 0, tempStart = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (maxEndingHere < 0) {
            maxEndingHere = nums[i];
            tempStart = i;
        } else {
            maxEndingHere += nums[i];
        }
        
        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }
    
    let result = {
        maxSum: maxSoFar,
        subarray: nums.slice(start, end + 1),
        indices: [start, end]
    };
    
    console.log(`Output: maxSum=${result.maxSum}, subarray=[${result.subarray}]`);
    return result;
}

/**
 * Question 19: Subarray with Given Sum
 * @param {number[]} arr - Array of positive numbers
 * @param {number} targetSum - Target sum to find
 * @returns {number[]|null} Subarray with given sum or null
 */
function subarrayWithSum(arr, targetSum) {
    console.log("\nQ19: Subarray with Given Sum");
    console.log(`Input: [${arr}], target=${targetSum}`);
    
    // Sliding window approach for positive numbers
    let start = 0;
    let currentSum = 0;
    
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        
        while (currentSum > targetSum && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        if (currentSum === targetSum) {
            let result = arr.slice(start, end + 1);
            console.log(`Output: [${result}]`);
            return result;
        }
    }
    
    console.log("Output: null (no subarray found)");
    return null;
}

/**
 * Question 20: Longest Substring Without Repeating Characters
 * @param {string} s - Input string
 * @returns {Object} Length and the actual substring
 */
function longestSubstringWithoutRepeating(s) {
    console.log("\nQ20: Longest Substring Without Repeating Characters");
    console.log(`Input: "${s}"`);
    
    let seen = new Set();
    let left = 0, maxLength = 0;
    let resultSubstring = "";
    
    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        
        seen.add(s[right]);
        
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            resultSubstring = s.substring(left, right + 1);
        }
    }
    
    let result = { length: maxLength, substring: resultSubstring };
    console.log(`Output: length=${result.length}, substring="${result.substring}"`);
    return result;
}

/**
 * Question 21: Valid Parentheses
 * @param {string} s - String containing parentheses
 * @returns {boolean} True if valid, false otherwise
 */
function isValidParentheses(s) {
    console.log("\nQ21: Valid Parentheses");
    console.log(`Input: "${s}"`);
    
    let stack = [];
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                console.log("Output: false");
                return false;
            }
        }
    }
    
    let result = stack.length === 0;
    console.log(`Output: ${result}`);
    return result;
}

/**
 * Question 22: Group Anagrams
 * @param {string[]} strs - Array of strings
 * @returns {string[][]} Groups of anagrams
 */
function groupAnagrams(strs) {
    console.log("\nQ22: Group Anagrams");
    console.log(`Input: [${strs.map(s => `"${s}"`).join(', ')}]`);
    
    let groups = new Map();
    
    for (let str of strs) {
        // Use sorted string as key
        let sorted = str.split('').sort().join('');
        
        if (!groups.has(sorted)) {
            groups.set(sorted, []);
        }
        
        groups.get(sorted).push(str);
    }
    
    let result = Array.from(groups.values());
    console.log(`Output: ${JSON.stringify(result)}`);
    return result;
}

/**
 * Question 23: Container With Most Water
 * @param {number[]} height - Array representing heights
 * @returns {number} Maximum water that can be contained
 */
function maxWaterContainer(height) {
    console.log("\nQ23: Container With Most Water");
    console.log(`Input: [${height}]`);
    
    let left = 0, right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        let water = Math.min(height[left], height[right]) * (right - left);
        maxWater = Math.max(maxWater, water);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    console.log(`Output: ${maxWater}`);
    return maxWater;
}

/**
 * Question 24: Longest Palindromic Substring
 * @param {string} s - Input string
 * @returns {string} Longest palindromic substring
 */
function longestPalindromicSubstring(s) {
    console.log("\nQ24: Longest Palindromic Substring");
    console.log(`Input: "${s}"`);
    
    if (s.length < 2) return s;
    
    let start = 0, maxLength = 1;
    
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let currentLength = right - left + 1;
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes
        expandAroundCenter(i, i);
        // Even length palindromes
        expandAroundCenter(i, i + 1);
    }
    
    let result = s.substring(start, start + maxLength);
    console.log(`Output: "${result}"`);
    return result;
}

/**
 * Question 25: Product of Array Except Self
 * @param {number[]} nums - Input array
 * @returns {number[]} Array where each element is product of all others
 */
function productExceptSelf(nums) {
    console.log("\nQ25: Product of Array Except Self");
    console.log(`Input: [${nums}]`);
    
    let result = new Array(nums.length);
    
    // Calculate left products
    result[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // Calculate right products and multiply with left
    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    console.log(`Output: [${result}]`);
    return result;
}

// ==========================================
// HARD LEVEL QUESTIONS (36-50)
// ==========================================

/**
 * Question 36: Trapping Rain Water
 * @param {number[]} height - Array representing elevation heights
 * @returns {number} Total trapped water
 */
function trapRainWater(height) {
    console.log("\nQ36: Trapping Rain Water");
    console.log(`Input: [${height}]`);
    
    if (height.length === 0) return 0;
    
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let result = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                result += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                result += rightMax - height[right];
            }
            right--;
        }
    }
    
    console.log(`Output: ${result}`);
    return result;
}

/**
 * Question 37: Minimum Window Substring
 * @param {string} s - Source string
 * @param {string} t - Target string
 * @returns {string} Minimum window substring
 */
function minWindowSubstring(s, t) {
    console.log("\nQ37: Minimum Window Substring");
    console.log(`Input: s="${s}", t="${t}"`);
    
    if (s.length === 0 || t.length === 0) return "";
    
    // Count characters in t
    let tCount = new Map();
    for (let char of t) {
        tCount.set(char, (tCount.get(char) || 0) + 1);
    }
    
    let required = tCount.size;
    let formed = 0;
    let windowCounts = new Map();
    
    let left = 0, right = 0;
    let minLen = Infinity, minLeft = 0, minRight = 0;
    
    while (right < s.length) {
        let char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);
        
        if (tCount.has(char) && windowCounts.get(char) === tCount.get(char)) {
            formed++;
        }
        
        while (left <= right && formed === required) {
            char = s[left];
            
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minLeft = left;
                minRight = right;
            }
            
            windowCounts.set(char, windowCounts.get(char) - 1);
            if (tCount.has(char) && windowCounts.get(char) < tCount.get(char)) {
                formed--;
            }
            
            left++;
        }
        
        right++;
    }
    
    let result = minLen === Infinity ? "" : s.substring(minLeft, minRight + 1);
    console.log(`Output: "${result}"`);
    return result;
}

/**
 * Question 38: Edit Distance (Levenshtein Distance)
 * @param {string} word1 - First word
 * @param {string} word2 - Second word
 * @returns {number} Minimum edit distance
 */
function editDistance(word1, word2) {
    console.log("\nQ38: Edit Distance");
    console.log(`Input: word1="${word1}", word2="${word2}"`);
    
    let m = word1.length;
    let n = word2.length;
    
    // DP table
    let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Base cases
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    // Fill DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],     // Delete
                    dp[i][j - 1],     // Insert
                    dp[i - 1][j - 1]  // Replace
                );
            }
        }
    }
    
    console.log(`Output: ${dp[m][n]}`);
    return dp[m][n];
}

/**
 * Question 39: Word Break Problem
 * @param {string} s - Input string
 * @param {string[]} wordDict - Dictionary of words
 * @returns {boolean} True if string can be segmented
 */
function wordBreak(s, wordDict) {
    console.log("\nQ39: Word Break Problem");
    console.log(`Input: s="${s}", wordDict=[${wordDict.map(w => `"${w}"`).join(', ')}]`);
    
    let wordSet = new Set(wordDict);
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    
    console.log(`Output: ${dp[s.length]}`);
    return dp[s.length];
}

/**
 * Question 40: Sliding Window Maximum
 * @param {number[]} nums - Input array
 * @param {number} k - Window size
 * @returns {number[]} Maximum in each window
 */
function slidingWindowMaximum(nums, k) {
    console.log("\nQ40: Sliding Window Maximum");
    console.log(`Input: [${nums}], k=${k}`);
    
    if (nums.length === 0 || k === 0) return [];
    
    let result = [];
    let deque = []; // Store indices
    
    for (let i = 0; i < nums.length; i++) {
        // Remove indices outside current window
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        
        // Remove indices of smaller elements
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // Add maximum to result if window size is k
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    console.log(`Output: [${result}]`);
    return result;
}

// ==========================================
// COMPANY SPECIFIC QUESTIONS (51-65)
// ==========================================

/**
 * Question 51: Google - K Most Frequent Elements
 * @param {number[]} nums - Input array
 * @param {number} k - Number of most frequent elements
 * @returns {number[]} K most frequent elements
 */
function topKFrequent(nums, k) {
    console.log("\nQ51: Google - K Most Frequent Elements");
    console.log(`Input: [${nums}], k=${k}`);
    
    // Count frequencies
    let freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    // Use bucket sort approach
    let buckets = Array(nums.length + 1).fill().map(() => []);
    
    for (let [num, freq] of freqMap) {
        buckets[freq].push(num);
    }
    
    let result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
        }
    }
    
    console.log(`Output: [${result.slice(0, k)}]`);
    return result.slice(0, k);
}

/**
 * Question 52: Facebook - Valid Palindrome II
 * @param {string} s - Input string
 * @returns {boolean} True if palindrome after removing at most one character
 */
function validPalindromeII(s) {
    console.log("\nQ52: Facebook - Valid Palindrome II");
    console.log(`Input: "${s}"`);
    
    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    
    let left = 0, right = s.length - 1;
    
    while (left < right) {
        if (s[left] !== s[right]) {
            // Try removing either left or right character
            let result = isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
            console.log(`Output: ${result}`);
            return result;
        }
        left++;
        right--;
    }
    
    console.log("Output: true");
    return true;
}

/**
 * Question 53: Amazon - Rotate Image 90 degrees
 * @param {number[][]} matrix - 2D matrix
 * @returns {number[][]} Rotated matrix
 */
function rotateImage(matrix) {
    console.log("\nQ53: Amazon - Rotate Image 90°");
    console.log("Input matrix:");
    matrix.forEach(row => console.log(`  [${row}]`));
    
    let n = matrix.length;
    
    // Approach: Transpose then reverse each row
    // Step 1: Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    
    console.log("Output matrix:");
    matrix.forEach(row => console.log(`  [${row}]`));
    return matrix;
}

/**
 * Question 54: Microsoft - Longest Increasing Subsequence
 * @param {number[]} nums - Input array
 * @returns {number} Length of longest increasing subsequence
 */
function lengthOfLIS(nums) {
    console.log("\nQ54: Microsoft - Longest Increasing Subsequence");
    console.log(`Input: [${nums}]`);
    
    if (nums.length === 0) return 0;
    
    // Binary search approach
    let tails = [];
    
    for (let num of nums) {
        let left = 0, right = tails.length;
        
        // Binary search for insertion position
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        // If num is larger than all elements in tails, append it
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num;
        }
    }
    
    console.log(`Output: ${tails.length}`);
    return tails.length;
}

/**
 * Question 55: Apple - Meeting Rooms II
 * @param {number[][]} intervals - Array of [start, end] times
 * @returns {number} Minimum number of meeting rooms needed
 */
function minMeetingRooms(intervals) {
    console.log("\nQ55: Apple - Meeting Rooms II");
    console.log(`Input: ${JSON.stringify(intervals)}`);
    
    if (intervals.length === 0) return 0;
    
    let starts = intervals.map(interval => interval[0]).sort((a, b) => a - b);
    let ends = intervals.map(interval => interval[1]).sort((a, b) => a - b);
    
    let rooms = 0;
    let endPtr = 0;
    
    for (let i = 0; i < starts.length; i++) {
        if (starts[i] >= ends[endPtr]) {
            endPtr++;
        } else {
            rooms++;
        }
    }
    
    console.log(`Output: ${rooms}`);
    return rooms;
}

// ==========================================
// ADVANCED PROBLEM SOLVING (66-80)
// ==========================================

/**
 * Question 66: Implement LRU Cache
 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        console.log(`\nQ66: LRU Cache initialized with capacity ${capacity}`);
    }
    
    get(key) {
        if (this.cache.has(key)) {
            let value = this.cache.get(key);
            // Move to end (most recently used)
            this.cache.delete(key);
            this.cache.set(key, value);
            console.log(`get(${key}) = ${value}`);
            return value;
        }
        console.log(`get(${key}) = -1`);
        return -1;
    }
    
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            let firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
            console.log(`Evicted key ${firstKey}`);
        }
        
        this.cache.set(key, value);
        console.log(`put(${key}, ${value})`);
    }
}

/**
 * Question 67: Serialize and Deserialize Binary Tree
 */
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serializeTree(root) {
    console.log("\nQ67: Serialize Binary Tree");
    
    if (!root) return "null";
    
    let result = [];
    
    function dfs(node) {
        if (!node) {
            result.push("null");
            return;
        }
        
        result.push(node.val.toString());
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root);
    let serialized = result.join(',');
    console.log(`Serialized: ${serialized}`);
    return serialized;
}

function deserializeTree(data) {
    if (data === "null") return null;
    
    let values = data.split(',');
    let index = 0;
    
    function dfs() {
        if (values[index] === "null") {
            index++;
            return null;
        }
        
        let node = new TreeNode(parseInt(values[index]));
        index++;
        node.left = dfs();
        node.right = dfs();
        
        return node;
    }
    
    return dfs();
}

/**
 * Question 68: Design Twitter
 */
class Twitter {
    constructor() {
        this.tweets = new Map();
        this.following = new Map();
        this.tweetTime = 0;
        console.log("\nQ68: Twitter System Initialized");
    }
    
    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        
        this.tweets.get(userId).push({
            id: tweetId,
            time: this.tweetTime++
        });
        
        console.log(`User ${userId} posted tweet ${tweetId}`);
    }
    
    getNewsFeed(userId) {
        let allTweets = [];
        
        // Get user's own tweets
        if (this.tweets.has(userId)) {
            allTweets.push(...this.tweets.get(userId));
        }
        
        // Get tweets from followed users
        if (this.following.has(userId)) {
            for (let followeeId of this.following.get(userId)) {
                if (this.tweets.has(followeeId)) {
                    allTweets.push(...this.tweets.get(followeeId));
                }
            }
        }
        
        let feed = allTweets
            .sort((a, b) => b.time - a.time)
            .slice(0, 10)
            .map(tweet => tweet.id);
            
        console.log(`News feed for user ${userId}: [${feed}]`);
        return feed;
    }
    
    follow(followerId, followeeId) {
        if (followerId === followeeId) return;
        
        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set());
        }
        
        this.following.get(followerId).add(followeeId);
        console.log(`User ${followerId} followed user ${followeeId}`);
    }
    
    unfollow(followerId, followeeId) {
        if (this.following.has(followerId)) {
            this.following.get(followerId).delete(followeeId);
            console.log(`User ${followerId} unfollowed user ${followeeId}`);
        }
    }
}

// ==========================================
// TEST RUNNER AND EXAMPLES
// ==========================================

/**
 * Run all interview question examples
 */
function runInterviewQuestions() {
    console.log("\n" + "=".repeat(70));
    console.log("RUNNING ALL INTERVIEW QUESTIONS");
    console.log("=".repeat(70));
    
    // Easy Level (1-15)
    console.log("\n🟢 EASY LEVEL QUESTIONS");
    findMaxMin([3, 7, 1, 9, 4, 2, 8]);
    reverseArrayMultiple([1, 2, 3, 4, 5]);
    removeDuplicatesAdvanced([1, 2, 2, 3, 4, 4, 5, 1]);
    findSecondLargest([3, 7, 1, 9, 4, 2, 8]);
    rotateArray([1, 2, 3, 4, 5, 6, 7], 3, 'right');
    isPalindrome("A man, a plan, a canal: Panama");
    firstNonRepeatingChar("leetcode");
    areAnagrams("listen", "silent");
    mergeSortedArrays([1, 3, 5], [2, 4, 6]);
    findMissingNumber([1, 2, 4, 5, 6]);
    
    // Medium Level (16-35)
    console.log("\n🟡 MEDIUM LEVEL QUESTIONS");
    twoSum([2, 7, 11, 15], 9);
    threeSum([-1, 0, 1, 2, -1, -4]);
    maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    subarrayWithSum([1, 4, 2, 7, 3, 5], 9);
    longestSubstringWithoutRepeating("abcabcbb");
    isValidParentheses("()[]{}");
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    maxWaterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]);
    longestPalindromicSubstring("babad");
    productExceptSelf([1, 2, 3, 4]);
    
    // Hard Level (36-50)
    console.log("\n🔴 HARD LEVEL QUESTIONS");
    trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
    minWindowSubstring("ADOBECODEBANC", "ABC");
    editDistance("horse", "ros");
    wordBreak("leetcode", ["leet", "code"]);
    slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3);
    
    // Company Specific (51-65)
    console.log("\n🏢 COMPANY SPECIFIC QUESTIONS");
    topKFrequent([1, 1, 1, 2, 2, 3], 2);
    validPalindromeII("abca");
    rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
    minMeetingRooms([[0, 30], [5, 10], [15, 20]]);
    
    // Advanced (66-80)
    console.log("\n⚡ ADVANCED PROBLEM SOLVING");
    
    // LRU Cache demo
    let lru = new LRUCache(2);
    lru.put(1, 1);
    lru.put(2, 2);
    lru.get(1);
    lru.put(3, 3);
    lru.get(2);
    
    // Tree serialization demo
    let tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
    let serialized = serializeTree(tree);
    let deserialized = deserializeTree(serialized);
    
    // Twitter demo
    let twitter = new Twitter();
    twitter.postTweet(1, 5);
    twitter.getNewsFeed(1);
    twitter.follow(1, 2);
    twitter.postTweet(2, 6);
    twitter.getNewsFeed(1);
    
    console.log("\n" + "=".repeat(70));
    console.log("✅ ALL INTERVIEW QUESTIONS COMPLETED!");
    console.log("Author: DeepeshJha | Time: 2025-09-03 05:24:43 UTC");
    console.log("=".repeat(70));
}

// ==========================================
// UTILITY FUNCTIONS FOR INTERVIEW PREP
// ==========================================

const InterviewHelper = {
    /**
     * Time complexity analyzer
     */
    analyzeTimeComplexity(func, testSizes = [100, 1000, 10000]) {
        console.log("\n⏱️  TIME COMPLEXITY ANALYSIS");
        console.log("-".repeat(40));
        
        testSizes.forEach(size => {
            let testData = Array.from({length: size}, (_, i) => Math.floor(Math.random() * size));
            
            let startTime = performance.now();
            func(testData);
            let endTime = performance.now();
            
            console.log(`Size ${size.toLocaleString()}: ${(endTime - startTime).toFixed(4)}ms`);
        });
    },
    
    /**
     * Generate test data
     */
    generateTestData: {
        randomArray: (size, max = 100) => Array.from({length: size}, () => Math.floor(Math.random() * max)),
        sortedArray: (size) => Array.from({length: size}, (_, i) => i + 1),
        reverseSortedArray: (size) => Array.from({length: size}, (_, i) => size - i),
        randomString: (length) => {
            let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            return Array.from({length}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
        },
        palindromeString: (length) => {
            let half = Math.floor(length / 2);
            let chars = 'abcdefghijklmnopqrstuvwxyz';
            let firstHalf = Array.from({length: half}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
            let middle = length % 2 === 1 ? chars[Math.floor(Math.random() * chars.length)] : '';
            return firstHalf + middle + firstHalf.split('').reverse().join('');
        }
    },
    
    /**
     * Common interview patterns
     */
    patterns: {
        twoPointers: "✌️  Used for: sorted arrays, palindromes, pair finding, merging",
        slidingWindow: "🪟  Used for: subarray/substring problems with contiguous elements",
        hashMap: "🗺️  Used for: counting, O(1) lookups, grouping, frequency analysis",
        stack: "📚  Used for: balanced parentheses, nearest greater element, expression evaluation",
        binarySearch: "🔍  Used for: sorted data, search space reduction, finding bounds",
        dynamicProgramming: "🧮  Used for: optimization problems with overlapping subproblems",
        backtracking: "⬅️  Used for: generating permutations, combinations, sudoku solving",
        divideConquer: "✂️  Used for: merge sort, quick sort, finding maximum subarray"
    },
    
    /**
     * Space-time tradeoff examples
     */
    tradeoffs: {
        hashMapVsArray: "HashMap: O(1) lookup, O(n) space vs Array: O(n) lookup, O(1) space",
        recursionVsIteration: "Recursion: cleaner code, O(n) space vs Iteration: O(1) space",
        sortVsHash: "Sort: O(n log n) time, O(1) space vs Hash: O(n) time, O(n) space"
    },
    
    /**
     * Common edge cases to consider
     */
    edgeCases: [
        "Empty array/string",
        "Single element",
        "All elements same",
        "Already sorted/reverse sorted",
        "Negative numbers",
        "Duplicate elements",
        "Very large inputs",
        "Integer overflow",
        "Unicode characters",
        "Null/undefined inputs"
    ]
};

// ==========================================
// EXPORT FOR NODE.JS
// ==========================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        // Easy Level
        findMaxMin,
        reverseArrayMultiple,
        removeDuplicatesAdvanced,
        findSecondLargest,
        rotateArray,
        isPalindrome,
        firstNonRepeatingChar,
        areAnagrams,
        mergeSortedArrays,
        findMissingNumber,
        
        // Medium Level
        twoSum,
        threeSum,
        maxSubarraySum,
        subarrayWithSum,
        longestSubstringWithoutRepeating,
        isValidParentheses,
        groupAnagrams,
        maxWaterContainer,
        longestPalindromicSubstring,
        productExceptSelf,
        
        // Hard Level
        trapRainWater,
        minWindowSubstring,
        editDistance,
        wordBreak,
        slidingWindowMaximum,
        
        // Company Specific
        topKFrequent,
        validPalindromeII,
        rotateImage,
        lengthOfLIS,
        minMeetingRooms,
        
        // Advanced
        LRUCache,
        TreeNode,
        serializeTree,
        deserializeTree,
        Twitter,
        
        // Utilities
        InterviewHelper,
        runInterviewQuestions
    };
}

// ==========================================
// AUTO-RUN IN BROWSER OR NODE
// ==========================================

if (typeof window === 'undefined') {
    // Node.js environment - run all examples
    runInterviewQuestions();
} else {
    // Browser environment - just load
    console.log("🚀 JavaScript Interview Questions loaded!");
    console.log("📝 Call runInterviewQuestions() to see all examples");
    console.log("🛠️  Access InterviewHelper for utilities");
    console.log("👨‍💻 Created by DeepeshJha");
}