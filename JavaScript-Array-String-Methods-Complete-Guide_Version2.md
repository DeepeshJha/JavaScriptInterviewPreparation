# JavaScript Array and String Methods - Complete Reference Guide

**Author:** DeepeshJha  
**Date:** 2025-09-02  
**Last Updated:** 2025-09-02 17:19:22 UTC

## Table of Contents
1. [JavaScript Array Methods](#javascript-array-methods)
2. [JavaScript String Methods](#javascript-string-methods)
3. [Modern ES6+ Methods](#modern-es6-methods)
4. [Different Approaches for Common Tasks](#different-approaches-for-common-tasks)

---

## JavaScript Array Methods

### 1. **push()**
**Syntax:** `array.push(element1, element2, ..., elementN)`

**Explanation:** Adds one or more elements to the end of an array and returns the new length of the array. This method modifies the original array.

```javascript
let fruits = ['apple', 'banana'];
let newLength = fruits.push('orange', 'grape');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
console.log(newLength); // 4

// Real-world example: Adding items to shopping cart
let cart = [];
cart.push({ id: 1, name: 'iPhone', price: 999 });
cart.push({ id: 2, name: 'iPad', price: 599 });

// Use cases:
// 1. Building dynamic lists
let todoList = [];
function addTodo(task) {
    todoList.push({
        id: Date.now(),
        task: task,
        completed: false,
        createdAt: new Date()
    });
}

// 2. Queue implementation
let queue = [];
queue.push('task1', 'task2', 'task3');

// 3. Multiple elements at once
let numbers = [1, 2, 3];
numbers.push(4, 5, 6); // [1, 2, 3, 4, 5, 6]

// 4. Spreading arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
arr1.push(...arr2); // [1, 2, 3, 4]
```

### 2. **pop()**
**Syntax:** `array.pop()`

**Explanation:** Removes the last element from an array and returns that element. If the array is empty, it returns `undefined`. This method modifies the original array.

```javascript
let fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop();
console.log(lastFruit); // 'orange'
console.log(fruits); // ['apple', 'banana']

// Use cases:
// 1. Undo functionality
let undoStack = ['action1', 'action2', 'action3'];
function undo() {
    let lastAction = undoStack.pop();
    if (lastAction) {
        console.log(`Undoing: ${lastAction}`);
    }
}

// 2. Stack implementation (LIFO)
let stack = [];
stack.push(1, 2, 3);
while (stack.length > 0) {
    console.log(stack.pop()); // 3, 2, 1
}

// 3. Processing items from end
let items = ['first', 'second', 'last'];
while (items.length > 0) {
    let item = items.pop();
    processItem(item);
}

// 4. Removing trailing empty elements
let data = ['a', 'b', '', '', ''];
while (data.length > 0 && data[data.length - 1] === '') {
    data.pop();
} // ['a', 'b']
```

### 3. **unshift()**
**Syntax:** `array.unshift(element1, element2, ..., elementN)`

**Explanation:** Adds one or more elements to the beginning of an array and returns the new length. This method modifies the original array and shifts existing elements to higher indices.

```javascript
let fruits = ['banana', 'orange'];
let newLength = fruits.unshift('apple', 'grape');
console.log(fruits); // ['apple', 'grape', 'banana', 'orange']
console.log(newLength); // 4

// Use cases:
// 1. Priority queue (high priority first)
let taskQueue = ['normal-task'];
function addHighPriorityTask(task) {
    taskQueue.unshift(`HIGH: ${task}`);
}

// 2. Recent items list
let recentFiles = [];
function openFile(filename) {
    recentFiles.unshift(filename);
    if (recentFiles.length > 10) {
        recentFiles.pop(); // Keep only 10 recent files
    }
}

// 3. Breadcrumb navigation
let breadcrumbs = ['Home'];
function navigateTo(page) {
    breadcrumbs.unshift(page);
}

// 4. Version history (newest first)
let versions = [];
function addVersion(version) {
    versions.unshift({
        version: version,
        date: new Date(),
        author: 'DeepeshJha'
    });
}
```

### 4. **shift()**
**Syntax:** `array.shift()`

**Explanation:** Removes the first element from an array and returns that element. If the array is empty, it returns `undefined`. This method modifies the original array and shifts all remaining elements down by one index.

```javascript
let fruits = ['apple', 'banana', 'orange'];
let firstFruit = fruits.shift();
console.log(firstFruit); // 'apple'
console.log(fruits); // ['banana', 'orange']

// Use cases:
// 1. Queue processing (FIFO)
let jobQueue = ['job1', 'job2', 'job3'];
function processNextJob() {
    let job = jobQueue.shift();
    if (job) {
        console.log(`Processing: ${job}`);
    }
}

// 2. Animation frames
let animationFrames = [frame1, frame2, frame3];
function nextFrame() {
    let currentFrame = animationFrames.shift();
    animationFrames.push(currentFrame); // Cycle frames
    return currentFrame;
}

// 3. Batch processing
let batch = [item1, item2, item3];
while (batch.length > 0) {
    let item = batch.shift();
    processItem(item);
}
```

### 5. **slice()**
**Syntax:** `array.slice(start, end)`

**Explanation:** Returns a shallow copy of a portion of an array into a new array. The original array is not modified. `start` is the beginning index (inclusive), `end` is the ending index (exclusive). Negative indices count from the end.

```javascript
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let sliced = fruits.slice(1, 4);
console.log(sliced); // ['banana', 'orange', 'grape']
console.log(fruits); // Original array unchanged

// Use cases:
// 1. Pagination
function paginate(array, page, pageSize) {
    let start = (page - 1) * pageSize;
    let end = start + pageSize;
    return array.slice(start, end);
}

// 2. Getting last N items
let logs = ['log1', 'log2', 'log3', 'log4', 'log5'];
let lastThreeLogs = logs.slice(-3); // ['log3', 'log4', 'log5']

// 3. Copying arrays (shallow copy)
let original = [1, 2, 3];
let copy = original.slice(); // [1, 2, 3]

// 4. Extracting specific ranges
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let middle = data.slice(3, 7); // [4, 5, 6, 7]

// 5. Safe array operations (doesn't modify original)
function getTopScores(scores, count) {
    return scores.slice().sort((a, b) => b - a).slice(0, count);
}
```

### 6. **splice()**
**Syntax:** `array.splice(start, deleteCount, item1, item2, ..., itemN)`

**Explanation:** Changes the contents of an array by removing or replacing existing elements and/or adding new elements. Returns an array of deleted elements. This method modifies the original array.

- `start`: Index to start changing the array
- `deleteCount`: Number of elements to remove (optional)
- `item1, item2, ...`: Elements to add to the array (optional)

```javascript
let fruits = ['apple', 'banana', 'orange', 'grape'];

// Remove elements
let removed = fruits.splice(1, 2);
console.log(removed); // ['banana', 'orange']
console.log(fruits); // ['apple', 'grape']

// Insert elements
fruits.splice(1, 0, 'mango', 'pineapple');
console.log(fruits); // ['apple', 'mango', 'pineapple', 'grape']

// Replace elements
fruits.splice(1, 2, 'kiwi');
console.log(fruits); // ['apple', 'kiwi', 'grape']

// Use cases:
// 1. Removing items by index
let items = ['a', 'b', 'c', 'd', 'e'];
items.splice(2, 1); // Remove 'c': ['a', 'b', 'd', 'e']

// 2. Inserting items at specific position
let fruits2 = ['apple', 'orange'];
fruits2.splice(1, 0, 'banana', 'grape'); // ['apple', 'banana', 'grape', 'orange']

// 3. Replacing items
let colors = ['red', 'green', 'blue'];
colors.splice(1, 1, 'yellow'); // ['red', 'yellow', 'blue']

// 4. Array cleanup (removing falsy values)
let mixed = [1, 0, 'hello', '', null, 'world', undefined];
for (let i = mixed.length - 1; i >= 0; i--) {
    if (!mixed[i]) {
        mixed.splice(i, 1);
    }
}

// 5. Moving elements
function moveElement(arr, fromIndex, toIndex) {
    let element = arr.splice(fromIndex, 1)[0];
    arr.splice(toIndex, 0, element);
    return arr;
}
```

### 7. **concat()**
**Syntax:** `array.concat(value1, value2, ..., valueN)`

**Explanation:** Returns a new array that is the result of merging the original array with other arrays and/or values. The original arrays are not modified. Values can be arrays or individual elements.

```javascript
let fruits = ['apple', 'banana'];
let vegetables = ['carrot', 'potato'];
let grains = ['rice', 'wheat'];

let combined = fruits.concat(vegetables, grains, 'olive oil');
console.log(combined); 
// ['apple', 'banana', 'carrot', 'potato', 'rice', 'wheat', 'olive oil']

// Alternative using spread operator (ES6+)
let combinedES6 = [...fruits, ...vegetables, ...grains, 'olive oil'];

// Real-world example: Merging user preferences
let defaultSettings = ['theme:light', 'lang:en'];
let userSettings = ['notifications:on', 'sound:off'];
let adminSettings = ['debug:false'];

let finalSettings = defaultSettings.concat(userSettings, adminSettings);
console.log(finalSettings);
// ['theme:light', 'lang:en', 'notifications:on', 'sound:off', 'debug:false']
```

### 8. **join()**
**Syntax:** `array.join(separator)`

**Explanation:** Creates and returns a new string by concatenating all elements in an array, separated by the specified separator string. If no separator is provided, elements are separated by commas.

```javascript
let fruits = ['apple', 'banana', 'orange'];

let joined1 = fruits.join();
console.log(joined1); // 'apple,banana,orange'

let joined2 = fruits.join(' - ');
console.log(joined2); // 'apple - banana - orange'

let joined3 = fruits.join('');
console.log(joined3); // 'applebananaorange'

// Real-world example: Creating file paths
let pathParts = ['home', 'DeepeshJha', 'documents', 'projects'];
let fullPath = pathParts.join('/');
console.log(fullPath); // 'home/DeepeshJha/documents/projects'

// Creating CSV data
let userData = ['DeepeshJha', '25', 'Developer', 'India'];
let csvLine = userData.join(',');
console.log(csvLine); // 'DeepeshJha,25,Developer,India'
```

### 9. **reverse()**
**Syntax:** `array.reverse()`

**Explanation:** Reverses the order of elements in an array in place. The first element becomes the last, and the last becomes the first. This method modifies the original array.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]

// To reverse without modifying original
let original = [1, 2, 3, 4, 5];
let reversed = [...original].reverse();
console.log(original); // [1, 2, 3, 4, 5] (unchanged)
console.log(reversed); // [5, 4, 3, 2, 1]

// Real-world example: Timeline display
let events = [
    { date: '2025-09-01', event: 'Project started' },
    { date: '2025-09-02', event: 'First milestone' },
    { date: '2025-09-03', event: 'Code review' }
];

// Show most recent events first
let timeline = [...events].reverse();
console.log(timeline); // Most recent event first
```

### 10. **sort()**
**Syntax:** `array.sort(compareFunction)`

**Explanation:** Sorts the elements of an array in place and returns the sorted array. Without a compare function, elements are converted to strings and sorted lexicographically. The compare function should return negative, zero, or positive values.

```javascript
// Basic sorting (lexicographic)
let fruits = ['banana', 'apple', 'Cherry', 'date'];
fruits.sort();
console.log(fruits); // ['Cherry', 'apple', 'banana', 'date']

// Numeric sorting
let numbers = [10, 5, 40, 25, 1000, 1];
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // [1, 5, 10, 25, 40, 1000]

numbers.sort((a, b) => b - a); // Descending
console.log(numbers); // [1000, 40, 25, 10, 5, 1]

// Object sorting
let users = [
    { name: 'DeepeshJha', age: 25, score: 95 },
    { name: 'Alice', age: 30, score: 87 },
    { name: 'Bob', age: 22, score: 92 }
];

// Sort by age (ascending)
users.sort((a, b) => a.age - b.age);

// Sort by name (alphabetical)
users.sort((a, b) => a.name.localeCompare(b.name));

// Multi-level sorting (by score desc, then by age asc)
users.sort((a, b) => {
    if (a.score !== b.score) {
        return b.score - a.score; // Score descending
    }
    return a.age - b.age; // Age ascending
});

// Real-world example: E-commerce product sorting
let products = [
    { name: 'iPhone', price: 999, rating: 4.5, sales: 1000 },
    { name: 'iPad', price: 599, rating: 4.7, sales: 800 },
    { name: 'MacBook', price: 1299, rating: 4.3, sales: 500 }
];

// Sort by popularity (sales * rating)
products.sort((a, b) => (b.sales * b.rating) - (a.sales * a.rating));
```

### 11. **indexOf()**
**Syntax:** `array.indexOf(searchElement, fromIndex)`

**Explanation:** Returns the first index at which a given element can be found in the array, or -1 if it is not present. Uses strict equality (===) for comparison. `fromIndex` is optional and specifies where to start the search.

```javascript
let fruits = ['apple', 'banana', 'orange', 'banana'];

let index1 = fruits.indexOf('banana');
console.log(index1); // 1

let index2 = fruits.indexOf('banana', 2); // Start search from index 2
console.log(index2); // 3

let index3 = fruits.indexOf('grape');
console.log(index3); // -1 (not found)

// Real-world example: User permission checking
let userPermissions = ['read', 'write', 'delete', 'admin'];

function hasPermission(permission) {
    return userPermissions.indexOf(permission) !== -1;
}

console.log(hasPermission('write')); // true
console.log(hasPermission('execute')); // false
```

### 12. **lastIndexOf()**
**Syntax:** `array.lastIndexOf(searchElement, fromIndex)`

**Explanation:** Returns the last index at which a given element can be found, or -1 if not present. Searches the array backwards. `fromIndex` is optional and specifies where to start the backward search.

```javascript
let numbers = [1, 2, 3, 2, 4, 2, 5];

let lastIndex = numbers.lastIndexOf(2);
console.log(lastIndex); // 5

let lastIndexFrom = numbers.lastIndexOf(2, 4); // Search backwards from index 4
console.log(lastIndexFrom); // 3

// Real-world example: Finding last occurrence in log
let logLevels = ['INFO', 'DEBUG', 'ERROR', 'INFO', 'WARN', 'ERROR'];
let lastErrorIndex = logLevels.lastIndexOf('ERROR');
console.log(`Last error at position: ${lastErrorIndex}`); // 5
```

### 13. **includes()**
**Syntax:** `array.includes(searchElement, fromIndex)`

**Explanation:** Determines whether an array includes a certain value among its entries, returning true or false. Uses the SameValueZero comparison algorithm (similar to ===, but treats NaN as equal to NaN).

```javascript
let fruits = ['apple', 'banana', 'orange'];

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape')); // false
console.log(fruits.includes('Apple')); // false (case sensitive)

// With NaN
let numbers = [1, 2, NaN, 4];
console.log(numbers.includes(NaN)); // true (unlike indexOf)

// Real-world example: Feature availability check
let availableFeatures = ['notifications', 'dark-mode', 'offline-sync'];
let requiredFeatures = ['notifications', 'payments'];

function checkFeatureSupport(features) {
    return features.every(feature => availableFeatures.includes(feature));
}

console.log(checkFeatureSupport(['notifications'])); // true
console.log(checkFeatureSupport(requiredFeatures)); // false
```

### 14. **find()**
**Syntax:** `array.find(callback(element, index, array), thisArg)`

**Explanation:** Returns the first element in the array that satisfies the provided testing function. If no element satisfies the testing function, `undefined` is returned.

```javascript
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find(num => num > 3);
console.log(found); // 4

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
console.log(user); // { id: 1, name: 'DeepeshJha', email: 'deepesh@github.com' }

// Finding with complex conditions
let products = [
    { name: 'iPhone', category: 'electronics', price: 999, inStock: true },
    { name: 'Shirt', category: 'clothing', price: 29, inStock: false },
    { name: 'Laptop', category: 'electronics', price: 1299, inStock: true }
];

let availableElectronics = products.find(product => 
    product.category === 'electronics' && 
    product.inStock && 
    product.price < 1200
);
console.log(availableElectronics); // iPhone object
```

### 15. **findIndex()**
**Syntax:** `array.findIndex(callback(element, index, array), thisArg)`

**Explanation:** Returns the index of the first element in the array that satisfies the provided testing function. If no element satisfies the testing function, -1 is returned.

```javascript
let numbers = [1, 2, 3, 4, 5];
let foundIndex = numbers.findIndex(num => num > 3);
console.log(foundIndex); // 3 (index of element 4)

// Real-world example: Finding position for insertion
let sortedScores = [95, 87, 82, 76, 65];

function findInsertPosition(newScore) {
    let index = sortedScores.findIndex(score => newScore > score);
    return index === -1 ? sortedScores.length : index;
}

let insertPos = findInsertPosition(90);
console.log(insertPos); // 1 (insert at index 1)

// Updating array element
let tasks = [
    { id: 1, task: 'Buy groceries', completed: false },
    { id: 2, task: 'Walk dog', completed: false },
    { id: 3, task: 'Write code', completed: true }
];

function completeTask(taskId) {
    let index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        tasks[index].completed = true;
    }
}

completeTask(1);
console.log(tasks[0]); // { id: 1, task: 'Buy groceries', completed: true }
```

### 16. **filter()**
**Syntax:** `array.filter(callback(element, index, array), thisArg)`

**Explanation:** Creates a new array with all elements that pass the test implemented by the provided function. The original array is not modified.

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Real-world example: User management
let users = [
    { name: 'DeepeshJha', age: 25, role: 'admin', active: true },
    { name: 'Alice', age: 17, role: 'user', active: false },
    { name: 'Bob', age: 30, role: 'user', active: true },
    { name: 'Charlie', age: 22, role: 'moderator', active: true }
];

// Get active adult users
let activeAdultUsers = users.filter(user => 
    user.active && user.age >= 18
);

// Get users by role
let admins = users.filter(user => user.role === 'admin');

// Complex filtering with multiple conditions
let eligibleModerators = users.filter(user => 
    user.active && 
    user.age >= 21 && 
    ['moderator', 'admin'].includes(user.role)
);

// E-commerce example: Product filtering
let products = [
    { name: 'iPhone', price: 999, category: 'electronics', rating: 4.5 },
    { name: 'Shirt', price: 29, category: 'clothing', rating: 4.0 },
    { name: 'Laptop', price: 1299, category: 'electronics', rating: 4.7 },
    { name: 'Jeans', price: 79, category: 'clothing', rating: 3.8 }
];

function filterProducts(filters) {
    return products.filter(product => {
        if (filters.category && product.category !== filters.category) return false;
        if (filters.maxPrice && product.price > filters.maxPrice) return false;
        if (filters.minRating && product.rating < filters.minRating) return false;
        return true;
    });
}

let filtered = filterProducts({ 
    category: 'electronics', 
    maxPrice: 1000, 
    minRating: 4.0 
});
console.log(filtered); // [iPhone]
```

### 17. **map()**
**Syntax:** `array.map(callback(element, index, array), thisArg)`

**Explanation:** Creates a new array populated with the results of calling a provided function on every element in the calling array. The original array is not modified.

```javascript
let numbers = [1, 2, 3, 4, 5];

// Double each number
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Real-world example: Data transformation
let users = [
    { firstName: 'Deepesh', lastName: 'Jha', age: 25 },
    { firstName: 'Alice', lastName: 'Smith', age: 30 },
    { firstName: 'Bob', lastName: 'Johnson', age: 22 }
];

// Create display names
let displayNames = users.map(user => `${user.firstName} ${user.lastName}`);
console.log(displayNames); // ['Deepesh Jha', 'Alice Smith', 'Bob Johnson']

// Transform to different structure
let userProfiles = users.map(user => ({
    fullName: `${user.firstName} ${user.lastName}`,
    age: user.age,
    isAdult: user.age >= 18,
    initials: `${user.firstName[0]}${user.lastName[0]}`
}));

// API response transformation
let apiUsers = [
    { user_id: 1, user_name: 'DeepeshJha', created_at: '2025-09-01' },
    { user_id: 2, user_name: 'Alice', created_at: '2025-09-02' }
];

let normalizedUsers = apiUsers.map(user => ({
    id: user.user_id,
    name: user.user_name,
    createdAt: new Date(user.created_at),
    profileUrl: `/users/${user.user_name.toLowerCase()}`
}));

// Price calculations
let products = [
    { name: 'iPhone', price: 999 },
    { name: 'iPad', price: 599 }
];

let productsWithTax = products.map(product => ({
    ...product,
    priceWithTax: Math.round(product.price * 1.08 * 100) / 100, // 8% tax
    discountPrice: Math.round(product.price * 0.9 * 100) / 100  // 10% discount
}));
```

### 18. **forEach()**
**Syntax:** `array.forEach(callback(element, index, array), thisArg)`

**Explanation:** Executes a provided function once for each array element. Unlike `map()`, it doesn't return a new array - it's used for side effects. Always returns `undefined`.

```javascript
let fruits = ['apple', 'banana', 'orange'];

// Basic iteration
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// Output: 0: apple, 1: banana, 2: orange

// Real-world example: DOM manipulation
let buttonIds = ['btn-save', 'btn-cancel', 'btn-delete'];

buttonIds.forEach(id => {
    let button = document.getElementById(id);
    if (button) {
        button.addEventListener('click', handleButtonClick);
        button.style.backgroundColor = '#007bff';
    }
});

// Logging and analytics
let userActions = [
    { action: 'login', userId: 1, timestamp: '2025-09-02T12:40:20Z' },
    { action: 'view_page', userId: 1, timestamp: '2025-09-02T12:41:15Z' },
    { action: 'purchase', userId: 1, timestamp: '2025-09-02T12:45:30Z' }
];

userActions.forEach(action => {
    // Send to analytics service
    analytics.track(action.action, {
        userId: action.userId,
        timestamp: action.timestamp,
        sessionId: 'session_123'
    });
    
    // Log to console for debugging
    console.log(`User ${action.userId} performed ${action.action} at ${action.timestamp}`);
});

// Updating external systems
let notifications = [
    { userId: 1, message: 'Welcome to GitHub!', type: 'welcome' },
    { userId: 2, message: 'Your order has shipped', type: 'shipping' }
];

notifications.forEach(notification => {
    // Send email
    emailService.send(notification.userId, notification.message);
    
    // Save to database
    database.notifications.create(notification);
    
    // Update notification count
    updateNotificationCount(notification.userId);
});
```

### 19. **reduce()**
**Syntax:** `array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)`

**Explanation:** Executes a reducer function on each element of the array, resulting in a single output value. The callback function receives four arguments: accumulator (the accumulated result), current value, current index, and the array being processed.

```javascript
let numbers = [1, 2, 3, 4, 5];

// Sum all numbers
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Find maximum
let max = numbers.reduce((max, num) => num > max ? num : max);
console.log(max); // 5

// Real-world example: Shopping cart total
let cartItems = [
    { name: 'iPhone', price: 999, quantity: 1 },
    { name: 'Case', price: 29, quantity: 2 },
    { name: 'Charger', price: 49, quantity: 1 }
];

let cartTotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);
console.log(cartTotal); // 1106

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

// Counting occurrences
let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let fruitCount = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});
console.log(fruitCount); // { apple: 3, banana: 2, orange: 1 }

// Building complex data structures
let transactions = [
    { type: 'credit', amount: 1000, date: '2025-09-01' },
    { type: 'debit', amount: 500, date: '2025-09-01' },
    { type: 'credit', amount: 750, date: '2025-09-02' },
    { type: 'debit', amount: 200, date: '2025-09-02' }
];

let accountSummary = transactions.reduce((summary, transaction) => {
    // Update totals
    if (transaction.type === 'credit') {
        summary.totalCredits += transaction.amount;
    } else {
        summary.totalDebits += transaction.amount;
    }
    
    // Update balance
    summary.balance = summary.totalCredits - summary.totalDebits;
    
    // Track transaction count
    summary.transactionCount++;
    
    // Update daily totals
    let date = transaction.date;
    if (!summary.dailyTotals[date]) {
        summary.dailyTotals[date] = { credits: 0, debits: 0 };
    }
    summary.dailyTotals[date][transaction.type + 's'] += transaction.amount;
    
    return summary;
}, {
    totalCredits: 0,
    totalDebits: 0,
    balance: 0,
    transactionCount: 0,
    dailyTotals: {}
});
```

### 20. **reduceRight()**
**Syntax:** `array.reduceRight(callback(accumulator, currentValue, currentIndex, array), initialValue)`

**Explanation:** Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value. Similar to `reduce()` but processes elements from the end of the array.

```javascript
let numbers = [1, 2, 3, 4];

// Subtract from right to left
let result = numbers.reduceRight((acc, num) => acc - num);
console.log(result); // ((4 - 3) - 2) - 1 = -2

// Compare with reduce (left to right)
let resultLeft = numbers.reduce((acc, num) => acc - num);
console.log(resultLeft); // ((1 - 2) - 3) - 4 = -8

// Real-world example: Building nested function calls
let operations = ['toString', 'toUpperCase', 'trim'];
let initialValue = '  hello world  ';

// Apply operations from right to left
let result2 = operations.reduceRight((value, operation) => {
    return value[operation]();
}, initialValue);
console.log(result2); // "HELLO WORLD"

// Function composition
let mathOperations = [
    x => x + 1,    // Add 1
    x => x * 2,    // Multiply by 2
    x => x ** 2    // Square
];

let compose = (functions, initialValue) => {
    return functions.reduceRight((value, fn) => fn(value), initialValue);
};

let result3 = compose(mathOperations, 3);
// Process: 3 → square(9) → multiply by 2(18) → add 1(19)
console.log(result3); // 19
```

### 21. **some()**
**Syntax:** `array.some(callback(element, index, array), thisArg)`

**Explanation:** Tests whether at least one element in the array passes the test implemented by the provided function. Returns a Boolean value. Short-circuits and returns `true` as soon as it finds a truthy value.

```javascript
let numbers = [1, 2, 3, 4, 5];

// Check if any number is even
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// Real-world example: User permission checking
let userPermissions = ['read', 'write', 'execute'];

function canPerformAction(requiredPermissions) {
    return requiredPermissions.some(permission => 
        userPermissions.includes(permission)
    );
}

console.log(canPerformAction(['admin', 'write'])); // true (has 'write')
console.log(canPerformAction(['admin', 'delete'])); // false

// Form validation
let formFields = [
    { name: 'email', value: 'test@example.com', required: true, valid: true },
    { name: 'password', value: '', required: true, valid: false },
    { name: 'newsletter', value: false, required: false, valid: true }
];

let hasErrors = formFields.some(field => field.required && !field.valid);
console.log(hasErrors); // true

// Inventory checking
let products = [
    { name: 'iPhone', stock: 0 },
    { name: 'iPad', stock: 5 },
    { name: 'MacBook', stock: 0 }
];

let hasAvailableProducts = products.some(product => product.stock > 0);
console.log(hasAvailableProducts); // true

// Age verification
let users = [
    { name: 'DeepeshJha', age: 25 },
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 22 }
];

let hasMinors = users.some(user => user.age < 18);
console.log(hasMinors); // true
```

### 22. **every()**
**Syntax:** `array.every(callback(element, index, array), thisArg)`

**Explanation:** Tests whether all elements in the array pass the test implemented by the provided function. Returns a Boolean value. Short-circuits and returns `false` as soon as it finds a falsy value.

```javascript
let numbers = [2, 4, 6, 8];

// Check if all numbers are even
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

// Real-world example: Data validation
let users = [
    { name: 'DeepeshJha', email: 'deepesh@github.com', age: 25 },
    { name: 'Alice', email: 'alice@example.com', age: 30 },
    { name: 'Bob', email: 'bob@example.com', age: 22 }
];

// Validate all users have required fields
let allUsersValid = users.every(user => 
    user.name && 
    user.email && 
    user.email.includes('@') && 
    user.age >= 18
);
console.log(allUsersValid); // true

// Permission verification
let requiredPermissions = ['read', 'write'];
let userPermissions = ['read', 'write', 'delete', 'admin'];

let hasAllPermissions = requiredPermissions.every(permission => 
    userPermissions.includes(permission)
);
console.log(hasAllPermissions); // true

// Quality assurance
let testResults = [
    { test: 'login', passed: true },
    { test: 'navigation', passed: true },
    { test: 'checkout', passed: true },
    { test: 'payment', passed: true }
];

let allTestsPassed = testResults.every(result => result.passed);
console.log(allTestsPassed); // true

// Product availability
let orderItems = [
    { product: 'iPhone', quantity: 1, inStock: 5 },
    { product: 'Case', quantity: 2, inStock: 10 },
    { product: 'Charger', quantity: 1, inStock: 0 }
];

let canFulfillOrder = orderItems.every(item => item.inStock >= item.quantity);
console.log(canFulfillOrder); // false (charger out of stock)
```

### 23. **flat()**
**Syntax:** `array.flat(depth)`

**Explanation:** Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. Default depth is 1. Use `Infinity` to flatten all nested levels.

```javascript
let nested1 = [1, [2, 3], [4, [5, 6]]];

// Flatten one level (default)
let flat1 = nested1.flat();
console.log(flat1); // [1, 2, 3, 4, [5, 6]]

// Flatten two levels
let flat2 = nested1.flat(2);
console.log(flat2); // [1, 2, 3, 4, 5, 6]

// Flatten all levels
let deepNested = [1, [2, [3, [4, [5]]]]];
let flatAll = deepNested.flat(Infinity);
console.log(flatAll); // [1, 2, 3, 4, 5]

// Real-world example: Processing nested data structures
let departments = [
    {
        name: 'Engineering',
        teams: [
            { name: 'Frontend', members: ['DeepeshJha', 'Alice'] },
            { name: 'Backend', members: ['Bob', 'Charlie'] }
        ]
    },
    {
        name: 'Marketing',
        teams: [
            { name: 'Digital', members: ['David', 'Eve'] }
        ]
    }
];

// Get all team members
let allMembers = departments
    .map(dept => dept.teams.map(team => team.members))
    .flat(2);
console.log(allMembers); // ['DeepeshJha', 'Alice', 'Bob', 'Charlie', 'David', 'Eve']

// Processing file paths
let folderStructure = [
    '/home/user',
    ['/home/user/documents', ['/home/user/documents/projects']],
    '/home/user/downloads'
];

let allPaths = folderStructure.flat(Infinity);
console.log(allPaths); // All file paths in a single array

// Removing empty arrays
let mixedArray = [1, 2, [], [3, 4], [], [5, [6, 7]]];
let cleanedArray = mixedArray.flat().filter(item => item !== undefined);
console.log(cleanedArray); // [1, 2, 3, 4, 5, [6, 7]]
```

### 24. **flatMap()**
**Syntax:** `array.flatMap(callback(element, index, array), thisArg)`

**Explanation:** First maps each element using a mapping function, then flattens the result into a new array. It's equivalent to calling `map()` followed by `flat()` with depth 1, but more efficient.

```javascript
let numbers = [1, 2, 3];

// Double each number and create pairs
let result = numbers.flatMap(num => [num, num * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]

// Compare with map + flat
let mapThenFlat = numbers.map(num => [num, num * 2]).flat();
console.log(mapThenFlat); // Same result: [1, 2, 2, 4, 3, 6]

// Real-world example: Processing user data
let users = [
    { name: 'DeepeshJha', skills: ['JavaScript', 'Python', 'React'] },
    { name: 'Alice', skills: ['Java', 'Spring'] },
    { name: 'Bob', skills: ['Python', 'Django', 'PostgreSQL'] }
];

// Get all skills with user names
let userSkills = users.flatMap(user => 
    user.skills.map(skill => ({ user: user.name, skill }))
);
console.log(userSkills);
// [
//   { user: 'DeepeshJha', skill: 'JavaScript' },
//   { user: 'DeepeshJha', skill: 'Python' },
//   { user: 'DeepeshJha', skill: 'React' },
//   { user: 'Alice', skill: 'Java' },
//   ...
// ]

// Text processing
let sentences = [
    'Hello world from DeepeshJha',
    'JavaScript is awesome',
    'GitHub Copilot helps developers'
];

// Extract all words
let allWords = sentences.flatMap(sentence => sentence.split(' '));
console.log(allWords); // ['Hello', 'world', 'from', 'DeepeshJha', 'JavaScript', ...]

// E-commerce: Product variants
let products = [
    {
        name: 'T-Shirt',
        colors: ['red', 'blue', 'green'],
        sizes: ['S', 'M', 'L']
    },
    {
        name: 'Jeans',
        colors: ['blue', 'black'],
        sizes: ['M', 'L', 'XL']
    }
];

// Generate all product variants
let variants = products.flatMap(product =>
    product.colors.flatMap(color =>
        product.sizes.map(size => ({
            name: product.name,
            color,
            size,
            sku: `${product.name}-${color}-${size}`.toLowerCase().replace(/\s+/g, '-')
        }))
    )
);

// Conditional flattening
let data = [1, 2, 3, 4, 5];
let conditionalResult = data.flatMap(num => 
    num % 2 === 0 ? [num, num * 2] : []
);
console.log(conditionalResult); // [2, 4, 4, 8] (only even numbers and their doubles)
```

---

## JavaScript String Methods

### 1. **charAt()**
**Syntax:** `string.charAt(index)`

**Explanation:** Returns the character at the specified index. If the index is out of range, it returns an empty string. Indices start from 0.

```javascript
let text = "Hello World";

console.log(text.charAt(0)); // "H"
console.log(text.charAt(6)); // "W"
console.log(text.charAt(20)); // "" (empty string for out of range)

// Real-world example: Initials generation
function getInitials(fullName) {
    return fullName
        .split(' ')
        .map(name => name.charAt(0).toUpperCase())
        .join('');
}

console.log(getInitials("Deepesh Jha")); // "DJ"

// Password strength checking
function checkFirstChar(password) {
    let firstChar = password.charAt(0);
    return {
        isLetter: /[a-zA-Z]/.test(firstChar),
        isUppercase: firstChar === firstChar.toUpperCase(),
        isNumber: /\d/.test(firstChar)
    };
}

// Text highlighting (first letter)
function highlightFirstLetter(text) {
    if (text.length === 0) return text;
    return `<span class="highlight">${text.charAt(0)}</span>${text.slice(1)}`;
}
```

### 2. **charCodeAt()**
**Syntax:** `string.charCodeAt(index)`

**Explanation:** Returns the Unicode code point value of the character at the specified index. Returns `NaN` if the index is out of range. Used for character manipulation and encoding.

```javascript
let text = "Hello";

console.log(text.charCodeAt(0)); // 72 (Unicode for 'H')
console.log(text.charCodeAt(1)); // 101 (Unicode for 'e')

// Real-world example: Caesar cipher encryption
function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            let base = code >= 65 && code <= 90 ? 65 : 97; // Uppercase or lowercase
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char; // Non-letter characters remain unchanged
    }).join('');
}

console.log(caesarCipher("Hello DeepeshJha", 3)); // "Khoor GhhshvkMkd"

// Character validation
function isAlphanumeric(str) {
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (!((code >= 48 && code <= 57) ||  // 0-9
              (code >= 65 && code <= 90) ||  // A-Z
              (code >= 97 && code <= 122))) { // a-z
            return false;
        }
    }
    return true;
}

// Generating random strings
function generateRandomString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        // Generate random character code for A-Z (65-90)
        let randomCode = 65 + Math.floor(Math.random() * 26);
        result += String.fromCharCode(randomCode);
    }
    return result;
}

console.log(generateRandomString(8)); // Random 8-character string
```

### 3. **concat()**
**Syntax:** `string.concat(string2, string3, ..., stringN)`

**Explanation:** Concatenates the string arguments to the calling string and returns a new string. The original string is not modified. Template literals or the + operator are often preferred for readability.

```javascript
let greeting = "Hello";
let name = "DeepeshJha";
let punctuation = "!";

let message = greeting.concat(" ", name, punctuation);
console.log(message); // "Hello DeepeshJha!"

// Multiple ways to concatenate
let result1 = greeting.concat(" ", name);        // Using concat
let result2 = greeting + " " + name;             // Using + operator
let result3 = `${greeting} ${name}`;             // Using template literals

// Real-world example: Building file paths
function buildPath(...segments) {
    return segments.reduce((path, segment) => {
        // Remove leading/trailing slashes and concatenate
        let cleanSegment = segment.replace(/^\/+|\/+$/g, '');
        return path.concat('/', cleanSegment);
    }, '').substring(1); // Remove leading slash
}

console.log(buildPath('home', 'DeepeshJha', 'documents', 'file.txt'));
// "home/DeepeshJha/documents/file.txt"

// URL building
function buildUrl(base, ...parts) {
    return parts.reduce((url, part) => {
        return url.concat('/', encodeURIComponent(part));
    }, base);
}

let apiUrl = buildUrl('https://api.github.com', 'users', 'DeepeshJha', 'repos');
console.log(apiUrl); // "https://api.github.com/users/DeepeshJha/repos"

// Creating SQL queries (basic example - use parameterized queries in production)
function buildSelectQuery(table, columns = ['*'], conditions = []) {
    let query = 'SELECT '.concat(columns.join(', '));
    query = query.concat(' FROM ', table);
    
    if (conditions.length > 0) {
        query = query.concat(' WHERE ', conditions.join(' AND '));
    }
    
    return query;
}
```

### 4. **indexOf()**
**Syntax:** `string.indexOf(searchValue, fromIndex)`

**Explanation:** Returns the index of the first occurrence of the specified value, starting the search at `fromIndex`. Returns -1 if the value is not found. Case-sensitive search.

```javascript
let text = "Hello World, Hello Universe";

console.log(text.indexOf("Hello")); // 0
console.log(text.indexOf("Hello", 5)); // 13 (search starting from index 5)
console.log(text.indexOf("hello")); // -1 (case sensitive)

// Real-world example: Email validation
function isValidEmail(email) {
    let atIndex = email.indexOf('@');
    let dotIndex = email.indexOf('.', atIndex);
    
    return atIndex > 0 &&                    // @ not at beginning
           dotIndex > atIndex + 1 &&         // . after @ with at least one char
           dotIndex < email.length - 1;      // . not at end
}

console.log(isValidEmail("deepesh@github.com")); // true
console.log(isValidEmail("invalid.email"));      // false

// Finding multiple occurrences
function findAllOccurrences(text, searchTerm) {
    let indices = [];
    let index = text.indexOf(searchTerm);
    
    while (index !== -1) {
        indices.push(index);
        index = text.indexOf(searchTerm, index + 1);
    }
    
    return indices;
}

let occurrences = findAllOccurrences("JavaScript is awesome, JavaScript rocks!", "JavaScript");
console.log(occurrences); // [0, 23]

// URL parsing
function extractDomain(url) {
    let protocolIndex = url.indexOf('://');
    let start = protocolIndex !== -1 ? protocolIndex + 3 : 0;
    let pathIndex = url.indexOf('/', start);
    let end = pathIndex !== -1 ? pathIndex : url.length;
    
    return url.substring(start, end);
}

console.log(extractDomain("https://github.com/DeepeshJha")); // "github.com"

// Log file analysis
function findErrorLines(logContent) {
    let lines = logContent.split('\n');
    return lines
        .map((line, index) => ({ line: index + 1, content: line }))
        .filter(item => item.content.indexOf('ERROR') !== -1);
}
```

### 5. **lastIndexOf()**
**Syntax:** `string.lastIndexOf(searchValue, fromIndex)`

**Explanation:** Returns the index of the last occurrence of the specified value, searching backwards from `fromIndex`. Returns -1 if the value is not found.

```javascript
let text = "Hello World, Hello Universe, Hello GitHub";

console.log(text.lastIndexOf("Hello")); // 29 (last occurrence)
console.log(text.lastIndexOf("Hello", 20)); // 13 (searching backwards from index 20)

// Real-world example: File extension extraction
function getFileExtension(filename) {
    let dotIndex = filename.lastIndexOf('.');
    return dotIndex !== -1 ? filename.substring(dotIndex + 1) : '';
}

console.log(getFileExtension("document.pdf")); // "pdf"
console.log(getFileExtension("archive.tar.gz")); // "gz"
console.log(getFileExtension("README")); // ""

// Getting filename without extension
function getBaseName(filepath) {
    let lastSlash = filepath.lastIndexOf('/');
    let lastBackslash = filepath.lastIndexOf('\\');
    let pathSeparator = Math.max(lastSlash, lastBackslash);
    let filename = filepath.substring(pathSeparator + 1);
    
    let dotIndex = filename.lastIndexOf('.');
    return dotIndex !== -1 ? filename.substring(0, dotIndex) : filename;
}

console.log(getBaseName("/home/DeepeshJha/document.pdf")); // "document"

// Finding last word
function getLastWord(sentence) {
    let spaceIndex = sentence.lastIndexOf(' ');
    return spaceIndex !== -1 ? sentence.substring(spaceIndex + 1) : sentence;
}

console.log(getLastWord("Hello World from DeepeshJha")); // "DeepeshJha"

// Version number parsing
function getLatestVersion(versionString) {
    // "v1.2.3-beta.1" -> get the part before last hyphen
    let hyphenIndex = versionString.lastIndexOf('-');
    return hyphenIndex !== -1 ? versionString.substring(0, hyphenIndex) : versionString;
}
```

### 6. **slice()**
**Syntax:** `string.slice(start, end)`

**Explanation:** Extracts a section of a string and returns it as a new string, without modifying the original. Negative indices count from the end. `end` parameter is optional and exclusive.

```javascript
let text = "Hello World, DeepeshJha!";

console.log(text.slice(0, 5)); // "Hello"
console.log(text.slice(6, 11)); // "World"
console.log(text.slice(-12)); // "DeepeshJha!" (last 12 characters)
console.log(text.slice(6, -1)); // "World, DeepeshJha" (from index 6 to second-to-last)

// Real-world example: Text truncation
function truncateText(text, maxLength, suffix = '...') {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - suffix.length) + suffix;
}

console.log(truncateText("This is a very long text that needs truncation", 20));
// "This is a very lo..."

// Getting parts of a date string
let dateString = "2025-09-02";
let year = dateString.slice(0, 4);   // "2025"
let month = dateString.slice(5, 7);  // "09"
let day = dateString.slice(8, 10);   // "02"

// Credit card masking
function maskCreditCard(cardNumber) {
    if (cardNumber.length < 4) return cardNumber;
    let masked = '*'.repeat(cardNumber.length - 4);
    let lastFour = cardNumber.slice(-4);
    return masked + lastFour;
}

console.log(maskCreditCard("1234567890123456")); // "************3456"

// URL path extraction
function extractPath(url) {
    let protocolEnd = url.indexOf('://');
    let domainStart = protocolEnd !== -1 ? protocolEnd + 3 : 0;
    let pathStart = url.indexOf('/', domainStart);
    
    return pathStart !== -1 ? url.slice(pathStart) : '/';
}

console.log(extractPath("https://github.com/DeepeshJha/repo")); // "/DeepeshJha/repo"

// Getting file content preview
function getPreview(content, lines = 3) {
    let allLines = content.split('\n');
    let previewLines = allLines.slice(0, lines);
    let hasMore = allLines.length > lines;
    
    return {
        preview: previewLines.join('\n'),
        hasMore: hasMore,
        totalLines: allLines.length
    };
}
```

### 7. **substring()**
**Syntax:** `string.substring(start, end)`

**Explanation:** Returns the part of the string between the start and end indexes, or to the end of the string. Unlike `slice()`, it swaps arguments if start > end, and treats negative values as 0.

```javascript
let text = "Hello World";

console.log(text.substring(0, 5)); // "Hello"
console.log(text.substring(6, 11)); // "World"
console.log(text.substring(5, 0)); // "Hello" (arguments swapped)
console.log(text.substring(-3, 5)); // "Hello" (-3 treated as 0)

// Real-world example: Parsing structured data
function parseUserInfo(userString) {
    // Format: "DeepeshJha:25:Developer"
    let firstColon = userString.indexOf(':');
    let secondColon = userString.indexOf(':', firstColon + 1);
    
    return {
        name: userString.substring(0, firstColon),
        age: userString.substring(firstColon + 1, secondColon),
        role: userString.substring(secondColon + 1)
    };
}

console.log(parseUserInfo("DeepeshJha:25:Developer"));
// { name: "DeepeshJha", age: "25", role: "Developer" }

// Extracting coordinates
function parseCoordinates(coordString) {
    // Format: "lat:40.7128,lng:-74.0060"
    let latStart = coordString.indexOf('lat:') + 4;
    let latEnd = coordString.indexOf(',');
    let lngStart = coordString.indexOf('lng:') + 4;
    
    return {
        latitude: parseFloat(coordString.substring(latStart, latEnd)),
        longitude: parseFloat(coordString.substring(lngStart))
    };
}

// Time formatting
function formatTime(timeString) {
    // Input: "14:30:45" -> Output: "2:30 PM"
    let hours = parseInt(timeString.substring(0, 2));
    let minutes = timeString.substring(3, 5);
    
    let period = hours >= 12 ? 'PM' : 'AM';
    let displayHours = hours % 12 || 12;
    
    return `${displayHours}:${minutes} ${period}`;
}

console.log(formatTime("14:30:45")); // "2:30 PM"
```

### 8. **toLowerCase()** and **toUpperCase()**
**Syntax:** `string.toLowerCase()` / `string.toUpperCase()`

**Explanation:** Returns a new string with all characters converted to lowercase or uppercase. The original string is not modified. Handles Unicode characters correctly.

```javascript
let text = "Hello World from DeepeshJha";

console.log(text.toLowerCase()); // "hello world from deepeshjha"
console.log(text.toUpperCase()); // "HELLO WORLD FROM DEEPESHJHA"

// Real-world example: Case-insensitive comparison
function caseInsensitiveEquals(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(caseInsensitiveEquals("GitHub", "github")); // true

// User input normalization
function normalizeUsername(username) {
    return username.toLowerCase().trim();
}

// Search functionality
function searchUsers(users, query) {
    let searchTerm = query.toLowerCase();
    return users.filter(user => 
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
    );
}

let users = [
    { name: "DeepeshJha", email: "deepesh@github.com" },
    { name: "Alice Smith", email: "alice@example.com" }
];

console.log(searchUsers(users, "DEEPESH")); // Finds DeepeshJha

// Title case conversion
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase()).join(' ')
}
console.log(toTitleCase("hum tumhare hain sanam"));