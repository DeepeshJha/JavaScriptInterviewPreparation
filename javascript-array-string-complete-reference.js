/**
 * JavaScript Array and String Methods - Complete Reference Guide
 * 
 * Author: DeepeshJha
 * Date: 2025-09-02
 * Last Updated: 2025-09-02 18:22:05 UTC
 * 
 * This file contains comprehensive examples of JavaScript array and string methods
 * along with logical programming interview questions and solutions.
 */

// ==========================================
// JAVASCRIPT ARRAY METHODS
// ==========================================

console.log("=".repeat(50));
console.log("JAVASCRIPT ARRAY METHODS");
console.log("=".repeat(50));

// 1. PUSH - Adds elements to end of array
function demonstratePush() {
    console.log("\n1. PUSH METHOD");
    console.log("-".repeat(20));
    
    let fruits = ['apple', 'banana'];
    console.log("Original array:", fruits);
    
    let newLength = fruits.push('orange', 'grape');
    console.log("After push('orange', 'grape'):", fruits);
    console.log("New length:", newLength);
    
    // Real-world example: Shopping cart
    let cart = [];
    cart.push({ id: 1, name: 'iPhone', price: 999 });
    cart.push({ id: 2, name: 'iPad', price: 599 });
    console.log("Shopping cart:", cart);
    
    return fruits;
}

// 2. POP - Removes last element
function demonstratePop() {
    console.log("\n2. POP METHOD");
    console.log("-".repeat(20));
    
    let fruits = ['apple', 'banana', 'orange'];
    console.log("Original array:", fruits);
    
    let lastFruit = fruits.pop();
    console.log("Popped element:", lastFruit);
    console.log("Array after pop:", fruits);
    
    // Real-world example: Undo functionality
    let undoStack = ['action1', 'action2', 'action3'];
    function undo() {
        let lastAction = undoStack.pop();
        if (lastAction) {
            console.log(`Undoing: ${lastAction}`);
        }
        return lastAction;
    }
    
    undo(); // Undoing: action3
    console.log("Undo stack after undo:", undoStack);
    
    return fruits;
}

// 3. UNSHIFT - Adds elements to beginning
function demonstrateUnshift() {
    console.log("\n3. UNSHIFT METHOD");
    console.log("-".repeat(20));
    
    let fruits = ['banana', 'orange'];
    console.log("Original array:", fruits);
    
    let newLength = fruits.unshift('apple', 'grape');
    console.log("After unshift('apple', 'grape'):", fruits);
    console.log("New length:", newLength);
    
    // Real-world example: Recent files list
    let recentFiles = [];
    function openFile(filename) {
        recentFiles.unshift(filename);
        if (recentFiles.length > 5) {
            recentFiles.pop(); // Keep only 5 recent files
        }
    }
    
    openFile('document1.txt');
    openFile('document2.txt');
    openFile('document3.txt');
    console.log("Recent files:", recentFiles);
    
    return fruits;
}

// 4. SHIFT - Removes first element
function demonstrateShift() {
    console.log("\n4. SHIFT METHOD");
    console.log("-".repeat(20));
    
    let fruits = ['apple', 'banana', 'orange'];
    console.log("Original array:", fruits);
    
    let firstFruit = fruits.shift();
    console.log("Shifted element:", firstFruit);
    console.log("Array after shift:", fruits);
    
    // Real-world example: Queue processing (FIFO)
    let jobQueue = ['job1', 'job2', 'job3'];
    function processNextJob() {
        let job = jobQueue.shift();
        if (job) {
            console.log(`Processing: ${job}`);
        }
        return job;
    }
    
    processNextJob(); // Processing: job1
    console.log("Job queue after processing:", jobQueue);
    
    return fruits;
}

// 5. SLICE - Extracts portion of array
function demonstrateSlice() {
    console.log("\n5. SLICE METHOD");
    console.log("-".repeat(20));
    
    let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
    console.log("Original array:", fruits);
    
    let sliced = fruits.slice(1, 4);
    console.log("slice(1, 4):", sliced);
    console.log("Original array unchanged:", fruits);
    
    // Negative indices
    let lastTwo = fruits.slice(-2);
    console.log("slice(-2) (last two):", lastTwo);
    
    // Real-world example: Pagination
    function paginate(array, page, pageSize) {
        let start = (page - 1) * pageSize;
        let end = start + pageSize;
        return {
            data: array.slice(start, end),
            currentPage: page,
            totalPages: Math.ceil(array.length / pageSize)
        };
    }
    
    let users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
    let page1 = paginate(users, 1, 3);
    console.log("Page 1 of users:", page1);
    
    return sliced;
}

// 6. SPLICE - Modifies array by removing/adding elements
function demonstrateSplice() {
    console.log("\n6. SPLICE METHOD");
    console.log("-".repeat(20));
    
    let fruits = ['apple', 'banana', 'orange', 'grape'];
    console.log("Original array:", fruits);
    
    // Remove elements
    let removed = fruits.splice(1, 2);
    console.log("splice(1, 2) removed:", removed);
    console.log("Array after removal:", fruits);
    
    // Insert elements
    fruits.splice(1, 0, 'mango', 'pineapple');
    console.log("After splice(1, 0, 'mango', 'pineapple'):", fruits);
    
    // Replace elements
    fruits.splice(1, 2, 'kiwi');
    console.log("After splice(1, 2, 'kiwi'):", fruits);
    
    return fruits;
}

// 7. CONCAT - Merges arrays
function demonstrateConcat() {
    console.log("\n7. CONCAT METHOD");
    console.log("-".repeat(20));
    
    let fruits = ['apple', 'banana'];
    let vegetables = ['carrot', 'potato'];
    let grains = ['rice', 'wheat'];
    
    console.log("Fruits:", fruits);
    console.log("Vegetables:", vegetables);
    console.log("Grains:", grains);
    
    let combined = fruits.concat(vegetables, grains, 'olive oil');
    console.log("Combined array:", combined);
    
    // ES6 spread operator alternative
    let combinedES6 = [...fruits, ...vegetables, ...grains, 'olive oil'];
    console.log("Using spread operator:", combinedES6);
    
    return combined;
}

// 8. JOIN - Converts array to string
function demonstrateJoin() {
    console.log("\n8. JOIN METHOD");
    console.log("-".repeat(20));
    
    let fruits = ['apple', 'banana', 'orange'];
    console.log("Original array:", fruits);
    
    let joined1 = fruits.join();
    console.log("join() default:", joined1);
    
    let joined2 = fruits.join(' - ');
    console.log("join(' - '):", joined2);
    
    let joined3 = fruits.join('');
    console.log("join(''):", joined3);
    
    // Real-world example: Creating file paths
    let pathParts = ['home', 'DeepeshJha', 'documents', 'projects'];
    let fullPath = pathParts.join('/');
    console.log("File path:", fullPath);
    
    // Creating CSV data
    let userData = ['DeepeshJha', '25', 'Developer', 'India'];
    let csvLine = userData.join(',');
    console.log("CSV line:", csvLine);
    
    return joined2;
}

// 9. REVERSE - Reverses array in place
function demonstrateReverse() {
    console.log("\n9. REVERSE METHOD");
    console.log("-".repeat(20));
    
    let numbers = [1, 2, 3, 4, 5];
    console.log("Original array:", numbers);
    
    numbers.reverse();
    console.log("After reverse():", numbers);
    
    // To reverse without modifying original
    let original = [1, 2, 3, 4, 5];
    let reversed = [...original].reverse();
    console.log("Original unchanged:", original);
    console.log("Reversed copy:", reversed);
    
    return numbers;
}

// 10. SORT - Sorts array elements
function demonstrateSort() {
    console.log("\n10. SORT METHOD");
    console.log("-".repeat(20));
    
    // Basic sorting (lexicographic)
    let fruits = ['banana', 'apple', 'Cherry', 'date'];
    console.log("Original fruits:", fruits);
    fruits.sort();
    console.log("After sort():", fruits);
    
    // Numeric sorting
    let numbers = [10, 5, 40, 25, 1000, 1];
    console.log("Original numbers:", numbers);
    numbers.sort((a, b) => a - b); // Ascending
    console.log("Sorted ascending:", numbers);
    
    numbers.sort((a, b) => b - a); // Descending
    console.log("Sorted descending:", numbers);
    
    // Object sorting
    let users = [
        { name: 'DeepeshJha', age: 25, score: 95 },
        { name: 'Alice', age: 30, score: 87 },
        { name: 'Bob', age: 22, score: 92 }
    ];
    
    // Sort by score (descending)
    users.sort((a, b) => b.score - a.score);
    console.log("Users sorted by score:", users);
    
    return numbers;
}

// 11. INDEXOF - Finds first index of element
function demonstrateIndexOf() {
    console.log("\n11. INDEXOF METHOD");
    console.log("-".repeat(20));
    
    let fruits = ['apple', 'banana', 'orange', 'banana'];
    console.log("Array:", fruits);
    
    let index1 = fruits.indexOf('banana');
    console.log("indexOf('banana'):", index1);
    
    let index2 = fruits.indexOf('banana', 2); // Start search from index 2
    console.log("indexOf('banana', 2):", index2);
    
    let index3 = fruits.indexOf('grape');
    console.log("indexOf('grape'):", index3); // -1 (not found)
    
    return index1;
}

// 12. INCLUDES - Checks if array contains element
function demonstrateIncludes() {
    console.log("\n12. INCLUDES METHOD");
    console.log("-".repeat(20));
    
    let fruits = ['apple', 'banana', 'orange'];
    console.log("Array:", fruits);
    
    console.log("includes('banana'):", fruits.includes('banana'));
    console.log("includes('grape'):", fruits.includes('grape'));
    console.log("includes('Apple'):", fruits.includes('Apple')); // Case sensitive
    
    // With NaN
    let numbers = [1, 2, NaN, 4];
    console.log("Array with NaN:", numbers);
    console.log("includes(NaN):", numbers.includes(NaN)); // true (unlike indexOf)
    
    return fruits.includes('banana');
}

// 13. FIND - Returns first element that satisfies condition
function demonstrateFind() {
    console.log("\n13. FIND METHOD");
    console.log("-".repeat(20));
    
    let numbers = [1, 2, 3, 4, 5];
    console.log("Array:", numbers);
    
    let found = numbers.find(num => num > 3);
    console.log("find(num => num > 3):", found);
    
    // Real-world example: Finding user by ID
    let users = [
        { id: 1, name: 'DeepeshJha', email: 'deepesh@github.com' },
        { id: 2, name: 'Alice', email: 'alice@example.com' },
        { id: 3, name: 'Bob', email: 'bob@example.com' }
    ];
    
    function getUserById(id) {
        return users.find(user => user.id === id);
    }
    
    let user = getUserById(1);
    console.log("User with ID 1:", user);
    
    return found;
}

// 14. FILTER - Creates new array with elements that pass test
function demonstrateFilter() {
    console.log("\n14. FILTER METHOD");
    console.log("-".repeat(20));
    
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("Original array:", numbers);
    
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log("Even numbers:", evenNumbers);
    
    // Real-world example: User management
    let users = [
        { name: 'DeepeshJha', age: 25, role: 'admin', active: true },
        { name: 'Alice', age: 17, role: 'user', active: false },
        { name: 'Bob', age: 30, role: 'user', active: true },
        { name: 'Charlie', age: 22, role: 'moderator', active: true }
    ];
    
    let activeAdultUsers = users.filter(user => user.active && user.age >= 18);
    console.log("Active adult users:", activeAdultUsers);
    
    let admins = users.filter(user => user.role === 'admin');
    console.log("Admin users:", admins);
    
    return evenNumbers;
}

// 15. MAP - Creates new array with results of calling function on every element
function demonstrateMap() {
    console.log("\n15. MAP METHOD");
    console.log("-".repeat(20));
    
    let numbers = [1, 2, 3, 4, 5];
    console.log("Original array:", numbers);
    
    let doubled = numbers.map(num => num * 2);
    console.log("Doubled:", doubled);
    
    // Real-world example: Data transformation
    let users = [
        { firstName: 'Deepesh', lastName: 'Jha', age: 25 },
        { firstName: 'Alice', lastName: 'Smith', age: 30 },
        { firstName: 'Bob', lastName: 'Johnson', age: 22 }
    ];
    
    let displayNames = users.map(user => `${user.firstName} ${user.lastName}`);
    console.log("Display names:", displayNames);
    
    let userProfiles = users.map(user => ({
        fullName: `${user.firstName} ${user.lastName}`,
        age: user.age,
        isAdult: user.age >= 18,
        initials: `${user.firstName[0]}${user.lastName[0]}`
    }));
    console.log("User profiles:", userProfiles);
    
    return doubled;
}

// 16. REDUCE - Reduces array to single value
function demonstrateReduce() {
    console.log("\n16. REDUCE METHOD");
    console.log("-".repeat(20));
    
    let numbers = [1, 2, 3, 4, 5];
    console.log("Array:", numbers);
    
    // Sum all numbers
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log("Sum:", sum);
    
    // Find maximum
    let max = numbers.reduce((max, num) => num > max ? num : max);
    console.log("Maximum:", max);
    
    // Real-world example: Shopping cart total
    let cartItems = [
        { name: 'iPhone', price: 999, quantity: 1 },
        { name: 'Case', price: 29, quantity: 2 },
        { name: 'Charger', price: 49, quantity: 1 }
    ];
    
    let cartTotal = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    console.log("Cart total:", cartTotal);
    
    // Grouping data
    let employees = [
        { name: 'DeepeshJha', department: 'Engineering', salary: 75000 },
        { name: 'Alice', department: 'Marketing', salary: 65000 },
        { name: 'Bob', department: 'Engineering', salary: 80000 },
        { name: 'Charlie', department: 'Marketing', salary: 70000 }
    ];
    
    let groupedByDepartment = employees.reduce((groups, employee) => {
        let dept = employee.department;
        if (!groups[dept]) {
            groups[dept] = [];
        }
        groups[dept].push(employee);
        return groups;
    }, {});
    console.log("Grouped by department:", groupedByDepartment);
    
    return sum;
}

// 17. FOREACH - Executes function for each element
function demonstrateForEach() {
    console.log("\n17. FOREACH METHOD");
    console.log("-".repeat(20));
    
    let fruits = ['apple', 'banana', 'orange'];
    console.log("Array:", fruits);
    
    console.log("Iterating with forEach:");
    fruits.forEach((fruit, index) => {
        console.log(`  ${index}: ${fruit}`);
    });
    
    // Real-world example: Processing notifications
    let notifications = [
        { userId: 1, message: 'Welcome to GitHub!', type: 'welcome' },
        { userId: 2, message: 'Your order has shipped', type: 'shipping' }
    ];
    
    console.log("\nProcessing notifications:");
    notifications.forEach(notification => {
        console.log(`  Sending to user ${notification.userId}: ${notification.message}`);
    });
    
    return fruits;
}

// 18. SOME - Tests if at least one element passes test
function demonstrateSome() {
    console.log("\n18. SOME METHOD");
    console.log("-".repeat(20));
    
    let numbers = [1, 2, 3, 4, 5];
    console.log("Array:", numbers);
    
    let hasEven = numbers.some(num => num % 2 === 0);
    console.log("Has even number:", hasEven);
    
    let hasNegative = numbers.some(num => num < 0);
    console.log("Has negative number:", hasNegative);
    
    // Real-world example: Permission checking
    let userPermissions = ['read', 'write', 'execute'];
    
    function canPerformAction(requiredPermissions) {
        return requiredPermissions.some(permission => 
            userPermissions.includes(permission)
        );
    }
    
    console.log("Can perform ['admin', 'write']:", canPerformAction(['admin', 'write'])); // true
    console.log("Can perform ['admin', 'delete']:", canPerformAction(['admin', 'delete'])); // false
    
    return hasEven;
}

// 19. EVERY - Tests if all elements pass test
function demonstrateEvery() {
    console.log("\n19. EVERY METHOD");
    console.log("-".repeat(20));
    
    let numbers = [2, 4, 6, 8];
    console.log("Array:", numbers);
    
    let allEven = numbers.every(num => num % 2 === 0);
    console.log("All numbers are even:", allEven);
    
    let allPositive = numbers.every(num => num > 0);
    console.log("All numbers are positive:", allPositive);
    
    // Real-world example: Data validation
    let users = [
        { name: 'DeepeshJha', email: 'deepesh@github.com', age: 25 },
        { name: 'Alice', email: 'alice@example.com', age: 30 },
        { name: 'Bob', email: 'bob@example.com', age: 22 }
    ];
    
    let allUsersValid = users.every(user => 
        user.name && 
        user.email && 
        user.email.includes('@') && 
        user.age >= 18
    );
    console.log("All users are valid:", allUsersValid);
    
    return allEven;
}

// 20. FLAT - Flattens nested arrays
function demonstrateFlat() {
    console.log("\n20. FLAT METHOD");
    console.log("-".repeat(20));
    
    let nested1 = [1, [2, 3], [4, [5, 6]]];
    console.log("Original nested array:", nested1);
    
    let flat1 = nested1.flat();
    console.log("flat() - one level:", flat1);
    
    let flat2 = nested1.flat(2);
    console.log("flat(2) - two levels:", flat2);
    
    let deepNested = [1, [2, [3, [4, [5]]]]];
    let flatAll = deepNested.flat(Infinity);
    console.log("flat(Infinity) - all levels:", flatAll);
    
    return flat2;
}

// ==========================================
// JAVASCRIPT STRING METHODS
// ==========================================

console.log("\n" + "=".repeat(50));
console.log("JAVASCRIPT STRING METHODS");
console.log("=".repeat(50));

// 21. CHARAT - Returns character at index
function demonstrateCharAt() {
    console.log("\n21. CHARAT METHOD");
    console.log("-".repeat(20));
    
    let text = "Hello World";
    console.log("String:", text);
    
    console.log("charAt(0):", text.charAt(0));
    console.log("charAt(6):", text.charAt(6));
    console.log("charAt(20):", text.charAt(20)); // Empty string for out of range
    
    // Real-world example: Getting initials
    function getInitials(fullName) {
        return fullName
            .split(' ')
            .map(name => name.charAt(0).toUpperCase())
            .join('');
    }
    
    console.log("Initials of 'Deepesh Jha':", getInitials("Deepesh Jha"));
    
    return text.charAt(0);
}

// 22. CHARCODEAT - Returns Unicode of character
function demonstrateCharCodeAt() {
    console.log("\n22. CHARCODEAT METHOD");
    console.log("-".repeat(20));
    
    let text = "Hello";
    console.log("String:", text);
    
    console.log("charCodeAt(0) - 'H':", text.charCodeAt(0));
    console.log("charCodeAt(1) - 'e':", text.charCodeAt(1));
    
    // Real-world example: Caesar cipher
    function caesarCipher(text, shift) {
        return text.split('').map(char => {
            if (char.match(/[a-z]/i)) {
                let code = char.charCodeAt(0);
                let base = code >= 65 && code <= 90 ? 65 : 97;
                return String.fromCharCode(((code - base + shift) % 26) + base);
            }
            return char;
        }).join('');
    }
    
    console.log("Caesar cipher of 'Hello' with shift 3:", caesarCipher("Hello", 3));
    
    return text.charCodeAt(0);
}

// 23. CONCAT - Concatenates strings
function demonstrateStringConcat() {
    console.log("\n23. STRING CONCAT METHOD");
    console.log("-".repeat(20));
    
    let greeting = "Hello";
    let name = "DeepeshJha";
    let punctuation = "!";
    
    console.log("Parts:", greeting, name, punctuation);
    
    let message = greeting.concat(" ", name, punctuation);
    console.log("concat result:", message);
    
    // Alternative methods
    let result1 = greeting + " " + name + punctuation;
    let result2 = `${greeting} ${name}${punctuation}`;
    
    console.log("Using + operator:", result1);
    console.log("Using template literals:", result2);
    
    return message;
}

// 24. INDEXOF - Finds first occurrence
function demonstrateStringIndexOf() {
    console.log("\n24. STRING INDEXOF METHOD");
    console.log("-".repeat(20));
    
    let text = "Hello World, Hello Universe";
    console.log("String:", text);
    
    console.log("indexOf('Hello'):", text.indexOf("Hello"));
    console.log("indexOf('Hello', 5):", text.indexOf("Hello", 5));
    console.log("indexOf('hello'):", text.indexOf("hello")); // Case sensitive
    
    // Real-world example: Email validation
    function isValidEmail(email) {
        let atIndex = email.indexOf('@');
        let dotIndex = email.indexOf('.', atIndex);
        
        return atIndex > 0 &&                    // @ not at beginning
               dotIndex > atIndex + 1 &&         // . after @ with at least one char
               dotIndex < email.length - 1;      // . not at end
    }
    
    console.log("isValidEmail('deepesh@github.com'):", isValidEmail("deepesh@github.com"));
    console.log("isValidEmail('invalid.email'):", isValidEmail("invalid.email"));
    
    return text.indexOf("Hello");
}

// 25. SLICE - Extracts portion of string
function demonstrateStringSlice() {
    console.log("\n25. STRING SLICE METHOD");
    console.log("-".repeat(20));
    
    let text = "Hello World, DeepeshJha!";
    console.log("String:", text);
    
    console.log("slice(0, 5):", text.slice(0, 5));
    console.log("slice(6, 11):", text.slice(6, 11));
    console.log("slice(-12):", text.slice(-12)); // Last 12 characters
    console.log("slice(6, -1):", text.slice(6, -1));
    
    // Real-world example: Text truncation
    function truncateText(text, maxLength, suffix = '...') {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength - suffix.length) + suffix;
    }
    
    console.log("Truncated text:", truncateText("This is a very long text that needs truncation", 20));
    
    return text.slice(0, 5);
}

// 26. TOLOWERCASE & TOUPPERCASE - Case conversion
function demonstrateCaseConversion() {
    console.log("\n26. CASE CONVERSION METHODS");
    console.log("-".repeat(20));
    
    let text = "Hello World from DeepeshJha";
    console.log("Original:", text);
    console.log("toLowerCase():", text.toLowerCase());
    console.log("toUpperCase():", text.toUpperCase());
    
    // Real-world example: Case-insensitive comparison
    function caseInsensitiveEquals(str1, str2) {
        return str1.toLowerCase() === str2.toLowerCase();
    }
    
    console.log("'GitHub' equals 'github':", caseInsensitiveEquals("GitHub", "github"));
    
    // Title case conversion
    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }
    
    console.log("Title case:", toTitleCase("hello world from deepeshJha"));
    
    return text.toLowerCase();
}

// 27. TRIM - Removes whitespace
function demonstrateTrim() {
    console.log("\n27. TRIM METHODS");
    console.log("-".repeat(20));
    
    let text = "  Hello World  \n\t  ";
    console.log("Original (with quotes):", `"${text}"`);
    console.log("trim():", `"${text.trim()}"`);
    console.log("trimStart():", `"${text.trimStart()}"`);
    console.log("trimEnd():", `"${text.trimEnd()}"`);
    
    // Real-world example: Form data processing
    function processFormData(formData) {
        let processed = {};
        
        for (let [key, value] of Object.entries(formData)) {
            if (typeof value === 'string') {
                processed[key] = value.trim();
            } else {
                processed[key] = value;
            }
        }
        
        return processed;
    }
    
    let rawForm = {
        name: "  DeepeshJha  ",
        email: " deepesh@github.com\n",
        age: 25,
        bio: "\t  Developer from India  \t"
    };
    
    console.log("Processed form data:", processFormData(rawForm));
    
    return text.trim();
}

// 28. SPLIT - Converts string to array
function demonstrateSplit() {
    console.log("\n28. SPLIT METHOD");
    console.log("-".repeat(20));
    
    let text = "apple,banana,orange";
    console.log("String:", text);
    
    console.log("split(','):", text.split(','));
    console.log("split(',', 2):", text.split(',', 2)); // Limit to 2 elements
    
    // Real-world example: CSV parsing
    function parseCSVLine(line) {
        return line.split(',').map(field => field.trim());
    }
    
    console.log("Parsed CSV:", parseCSVLine("  DeepeshJha  ,  25  ,  Developer  "));
    
    // Path parsing
    let filePath = "/home/DeepeshJha/documents/file.txt";
    let pathParts = filePath.split('/').filter(part => part !== '');
    console.log("Path parts:", pathParts);
    
    // Word counting
    function countWords(text) {
        return text.trim().split(/\s+/).length;
    }
    
    console.log("Word count in 'Hello world from DeepeshJha':", countWords("Hello world from DeepeshJha"));
    
    return text.split(',');
}

// 29. REPLACE & REPLACEALL - Text replacement
function demonstrateReplace() {
    console.log("\n29. REPLACE METHODS");
    console.log("-".repeat(20));
    
    let text = "Hello DeepeshJha! Welcome DeepeshJha to GitHub!";
    console.log("Original:", text);
    
    let replaced1 = text.replace("DeepeshJha", "Developer");
    console.log("replace() - first only:", replaced1);
    
    let replaced2 = text.replaceAll("DeepeshJha", "Developer");
    console.log("replaceAll() - all:", replaced2);
    
    // Using regex for global replace
    let replaced3 = text.replace(/DeepeshJha/g, "Developer");
    console.log("replace() with regex:", replaced3);
    
    // Real-world example: Template replacement
    function fillTemplate(template, data) {
        return template.replace(/{(\w+)}/g, (match, key) => data[key] || match);
    }
    
    let template = "Hello {name}, welcome to {platform}!";
    let filled = fillTemplate(template, { name: 'DeepeshJha', platform: 'GitHub' });
    console.log("Template filled:", filled);
    
    return replaced2;
}

// 30. INCLUDES, STARTSWITH, ENDSWITH - String searching
function demonstrateStringSearch() {
    console.log("\n30. STRING SEARCH METHODS");
    console.log("-".repeat(20));
    
    let text = "Hello World from DeepeshJha";
    console.log("String:", text);
    
    console.log("includes('World'):", text.includes('World'));
    console.log("includes('world'):", text.includes('world')); // Case sensitive
    console.log("startsWith('Hello'):", text.startsWith('Hello'));
    console.log("endsWith('DeepeshJha'):", text.endsWith('DeepeshJha'));
    
    // Real-world example: File type checking
    function isImageFile(filename) {
        let imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
        return imageExtensions.some(ext => filename.toLowerCase().endsWith(ext));
    }
    
    console.log("'photo.jpg' is image:", isImageFile('photo.jpg'));
    console.log("'document.pdf' is image:", isImageFile('document.pdf'));
    
    // URL validation
    function isValidUrl(url) {
        return url.startsWith('http://') || url.startsWith('https://');
    }
    
    console.log("'https://github.com' is valid URL:", isValidUrl('https://github.com'));
    console.log("'github.com' is valid URL:", isValidUrl('github.com'));
    
    return text.includes('World');
}

// ==========================================
// INTERVIEW QUESTIONS - ARRAYS
// ==========================================

console.log("\n" + "=".repeat(50));
console.log("ARRAY INTERVIEW QUESTIONS");
console.log("=".repeat(50));

// 31. Find Maximum and Minimum
function findMaxMin() {
    console.log("\n31. FIND MAX AND MIN");
    console.log("-".repeat(20));
    
    let numbers = [3, 7, 1, 9, 4, 2, 8];
    console.log("Array:", numbers);
    
    // Approach 1: Using Math.max/min
    function findMaxMin1(arr) {
        return {
            max: Math.max(...arr),
            min: Math.min(...arr)
        };
    }
    
    // Approach 2: Using reduce
    function findMaxMin2(arr) {
        return arr.reduce((acc, curr) => ({
            max: curr > acc.max ? curr : acc.max,
            min: curr < acc.min ? curr : acc.min
        }), { max: arr[0], min: arr[0] });
    }
    
    // Approach 3: Using loop
    function findMaxMin3(arr) {
        let max = arr[0], min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
            if (arr[i] < min) min = arr[i];
        }
        return { max, min };
    }
    
    console.log("Method 1 (Math.max/min):", findMaxMin1(numbers));
    console.log("Method 2 (reduce):", findMaxMin2(numbers));
    console.log("Method 3 (loop):", findMaxMin3(numbers));
    
    return findMaxMin1(numbers);
}

// 32. Remove Duplicates
function removeDuplicatesDemo() {
    console.log("\n32. REMOVE DUPLICATES");
    console.log("-".repeat(20));
    
    let duplicates = [1, 2, 2, 3, 4, 4, 5, 1];
    console.log("Array with duplicates:", duplicates);
    
    // Approach 1: Using Set
    function removeDuplicates1(arr) {
        return [...new Set(arr)];
    }
    
    // Approach 2: Using filter and indexOf
    function removeDuplicates2(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }
    
    // Approach 3: Using reduce
    function removeDuplicates3(arr) {
        return arr.reduce((acc, curr) => {
            if (!acc.includes(curr)) {
                acc.push(curr);
            }
            return acc;
        }, []);
    }
    
    console.log("Method 1 (Set):", removeDuplicates1(duplicates));
    console.log("Method 2 (filter + indexOf):", removeDuplicates2(duplicates));
    console.log("Method 3 (reduce):", removeDuplicates3(duplicates));
    
    return removeDuplicates1(duplicates);
}

// 33. Two Sum Problem
function twoSumDemo() {
    console.log("\n33. TWO SUM PROBLEM");
    console.log("-".repeat(20));
    
    let nums = [2, 7, 11, 15];
    let target = 9;
    console.log("Array:", nums);
    console.log("Target:", target);
    
    // Approach 1: Brute force O(n²)
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
    
    // Approach 2: Hash map O(n)
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
    
    console.log("Brute force result:", twoSumBrute(nums, target));
    console.log("Optimized result:", twoSumOptimal(nums, target));
    
    return twoSumOptimal(nums, target);
}

// 34. Array Rotation
function arrayRotationDemo() {
    console.log("\n34. ARRAY ROTATION");
    console.log("-".repeat(20));
    
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let k = 3;
    console.log("Original array:", arr);
    console.log("Rotate right by:", k);
    
    // Approach 1: Using slice and concat
    function rotateArray1(arr, k) {
        k = k % arr.length;
        return arr.slice(-k).concat(arr.slice(0, -k));
    }
    
    // Approach 2: Using reverse method
    function rotateArray2(arr, k) {
        k = k % arr.length;
        let result = [...arr];
        
        function reverse(arr, start, end) {
            while (start < end) {
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--;
            }
        }
        
        reverse(result, 0, result.length - 1);
        reverse(result, 0, k - 1);
        reverse(result, k, result.length - 1);
        
        return result;
    }
    
    console.log("Method 1 (slice):", rotateArray1(arr, k));
    console.log("Method 2 (reverse):", rotateArray2(arr, k));
    
    return rotateArray1(arr, k);
}

// 35. Maximum Subarray Sum (Kadane's Algorithm)
function maxSubarraySumDemo() {
    console.log("\n35. MAXIMUM SUBARRAY SUM");
    console.log("-".repeat(20));
    
    let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    console.log("Array:", nums);
    
    function maxSubarraySum(nums) {
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
        
        return {
            maxSum: maxSoFar,
            subarray: nums.slice(start, end + 1),
            indices: [start, end]
        };
    }
    
    let result = maxSubarraySum(nums);
    console.log("Maximum sum:", result.maxSum);
    console.log("Subarray:", result.subarray);
    console.log("Indices:", result.indices);
    
    return result;
}

// ==========================================
// INTERVIEW QUESTIONS - STRINGS
// ==========================================

console.log("\n" + "=".repeat(50));
console.log("STRING INTERVIEW QUESTIONS");
console.log("=".repeat(50));

// 36. Reverse a String
function reverseStringDemo() {
    console.log("\n36. REVERSE A STRING");
    console.log("-".repeat(20));
    
    let str = "Hello DeepeshJha";
    console.log("Original string:", str);
    
    // Approach 1: Built-in methods
    function reverseString1(s) {
        return s.split('').reverse().join('');
    }
    
    // Approach 2: Two pointers
    function reverseString2(s) {
        let arr = s.split('');
        let left = 0, right = arr.length - 1;
        
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
        
        return arr.join('');
    }
    
    // Approach 3: For loop
    function reverseString3(s) {
        let reversed = '';
        for (let i = s.length - 1; i >= 0; i--) {
            reversed += s[i];
        }
        return reversed;
    }
    
    console.log("Method 1 (built-in):", reverseString1(str));
    console.log("Method 2 (two pointers):", reverseString2(str));
    console.log("Method 3 (for loop):", reverseString3(str));
    
    return reverseString1(str);
}

// 37. Check Palindrome
function palindromeDemo() {
    console.log("\n37. CHECK PALINDROME");
    console.log("-".repeat(20));
    
    let test1 = "A man, a plan, a canal: Panama";
    let test2 = "race a car";
    
    function isPalindrome(s) {
        let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let left = 0, right = cleaned.length - 1;
        
        while (left < right) {
            if (cleaned[left] !== cleaned[right]) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
    
    console.log(`"${test1}" is palindrome:`, isPalindrome(test1));
    console.log(`"${test2}" is palindrome:`, isPalindrome(test2));
    
    return isPalindrome(test1);
}

// 38. First Non-Repeating Character
function firstNonRepeatingCharDemo() {
    console.log("\n38. FIRST NON-REPEATING CHARACTER");
    console.log("-".repeat(20));
    
    let str1 = "leetcode";
    let str2 = "loveleetcode";
    
    function firstNonRepeatingChar(s) {
        let charCount = new Map();
        
        // Count characters
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
    
    console.log(`First non-repeating in "${str1}":`, firstNonRepeatingChar(str1));
    console.log(`First non-repeating in "${str2}":`, firstNonRepeatingChar(str2));
    
    return firstNonRepeatingChar(str1);
}

// 39. Check Anagrams
function anagramDemo() {
    console.log("\n39. CHECK ANAGRAMS");
    console.log("-".repeat(20));
    
    let str1 = "listen";
    let str2 = "silent";
    let str3 = "hello";
    let str4 = "bello";
    
    function areAnagrams(s1, s2) {
        if (s1.length !== s2.length) return false;
        
        let charCount = {};
        
        // Count characters in first string
        for (let char of s1.toLowerCase()) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        
        // Subtract characters from second string
        for (let char of s2.toLowerCase()) {
            if (!charCount[char]) return false;
            charCount[char]--;
        }
        
        return Object.values(charCount).every(count => count === 0);
    }
    
    console.log(`"${str1}" and "${str2}" are anagrams:`, areAnagrams(str1, str2));
    console.log(`"${str3}" and "${str4}" are anagrams:`, areAnagrams(str3, str4));
    
    return areAnagrams(str1, str2);
}

// 40. Longest Substring Without Repeating Characters
function longestSubstringDemo() {
    console.log("\n40. LONGEST SUBSTRING WITHOUT REPEATING");
    console.log("-".repeat(20));
    
    let str1 = "abcabcbb";
    let str2 = "pwwkew";
    
    function longestSubstring(s) {
        let seen = new Set();
        let left = 0, maxLength = 0, result = "";
        
        for (let right = 0; right < s.length; right++) {
            while (seen.has(s[right])) {
                seen.delete(s[left]);
                left++;
            }
            seen.add(s[right]);
            
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                result = s.substring(left, right + 1);
            }
        }
        
        return { length: maxLength, substring: result };
    }
    
    console.log(`Longest in "${str1}":`, longestSubstring(str1));
    console.log(`Longest in "${str2}":`, longestSubstring(str2));
    
    return longestSubstring(str1);
}

// ==========================================
// MAIN EXECUTION
// ==========================================

function runAllDemonstrations() {
    console.log("JavaScript Array and String Methods - Complete Demo by DeepeshJha");
    console.log("Started at:", new Date().toISOString());
    
    // Array Methods
    demonstratePush();
    demonstratePop();
    demonstrateUnshift();
    demonstrateShift();
    demonstrateSlice();
    demonstrateSplice();
    demonstrateConcat();
    demonstrateJoin();
    demonstrateReverse();
    demonstrateSort();
    demonstrateIndexOf();
    demonstrateIncludes();
    demonstrateFind();
    demonstrateFilter();
    demonstrateMap();
    demonstrateReduce();
    demonstrateForEach();
    demonstrateSome();
    demonstrateEvery();
    demonstrateFlat();
    
    // String Methods
    demonstrateCharAt();
    demonstrateCharCodeAt();
    demonstrateStringConcat();
    demonstrateStringIndexOf();
    demonstrateStringSlice();
    demonstrateCaseConversion();
    demonstrateTrim();
    demonstrateSplit();
    demonstrateReplace();
    demonstrateStringSearch();
    
    // Interview Questions
    findMaxMin();
    removeDuplicatesDemo();
    twoSumDemo();
    arrayRotationDemo();
    maxSubarraySumDemo();
    reverseStringDemo();
    palindromeDemo();
    firstNonRepeatingCharDemo();
    anagramDemo();
    longestSubstringDemo();
    
    console.log("\n" + "=".repeat(50));
    console.log("All demonstrations completed!");
    console.log("Author: DeepeshJha");
    console.log("Completed at:", new Date().toISOString());
    console.log("=".repeat(50));
}

// Utility functions for interview practice
const InterviewUtils = {
    // Time complexity analyzer
    analyzeTimeComplexity: function(func, testSizes = [100, 1000, 10000]) {
        console.log("\nTime Complexity Analysis:");
        console.log("-".repeat(30));
        
        testSizes.forEach(size => {
            let testArray = Array.from({length: size}, (_, i) => Math.floor(Math.random() * size));
            
            let startTime = performance.now();
            func(testArray);
            let endTime = performance.now();
            
            console.log(`Size ${size}: ${(endTime - startTime).toFixed(4)}ms`);
        });
    },
    
    // Generate test data
    generateTestData: {
        randomArray: (size, max = 100) => Array.from({length: size}, () => Math.floor(Math.random() * max)),
        sortedArray: (size) => Array.from({length: size}, (_, i) => i),
        reverseSortedArray: (size) => Array.from({length: size}, (_, i) => size - i),
        randomString: (length) => {
            let chars = 'abcdefghijklmnopqrstuvwxyz';
            return Array.from({length}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
        }
    },
    
    // Common interview patterns
    patterns: {
        twoPointers: "Used for sorted arrays, palindromes, pair finding",
        slidingWindow: "Used for subarray/substring problems",
        hashMap: "Used for counting, O(1) lookups, grouping",
        dynamicProgramming: "Used for optimization problems with overlapping subproblems",
        binarySearch: "Used for sorted data, search space reduction"
    }
};

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        InterviewUtils,
        runAllDemonstrations
    };
}

// Run demonstrations if this file is executed directly
if (typeof window === 'undefined') {
    // Node.js environment
    runAllDemonstrations();
} else {
    // Browser environment
    console.log("JavaScript Array and String Methods Reference loaded!");
    console.log("Call runAllDemonstrations() to see all examples");
    console.log("Access InterviewUtils for additional utilities");
}