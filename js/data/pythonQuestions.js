export const pythonQuestions = [
    {
  id: 1,
  type: "mcq",
  language: "Python",
  difficulty: "Easy",

topic: "General",

  question: "What will be the output of the following code snippet?",

  code:
`x = 10
print(x)`,

  options: [
    "x",
    "10",
    "Error",
    "None"
  ],

  correctAnswer: "10",

  explanation:
    "The variable x stores the value 10, and print(x) displays it.",

  hint:
    "What value is stored in x?",

  xp: 10
},

{
  id: 2,
  type: "mcq",
  language: "Python",
  difficulty: "Easy",

topic: "General",

  question: "Required Output - Hello World",

  code:
`msg = "Hello World"
print(msg)`,

  options: [
    "msg = Hello World",
    "msg = \"Hello World\"",
    "msg == \"Hello World\"",
    "print = \"Hello World\""
  ],

  correctAnswer: "msg = \"Hello World\"",

  explanation:
    "Strings must be enclosed in quotes.",

  hint:
    "How are strings written in Python?",

  xp: 10
},

{
  id: 3,
  type: "syntax",
  language: "Python",
  difficulty: "Easy",

topic: "General",

  question: "What will be the output of the following code snippet?",

  code:
`a = 5
b = 3
print(a + b)`,

  correctAnswer: "8",

  explanation:
    "5 + 3 equals 8.",

  hint:
    "Perform the addition.",

  xp: 10
},

{
  id: 4,
  type: "mcq",
  language: "Python",
  difficulty: "Easy",

topic: "General",

  question: "Required Output - 25",

  code:
`num = 5
print(num)`,

  options: [
    "num = 25",
    "num = 5 * 5",
    "print(25)",
    "All of the above"
  ],

  correctAnswer: "All of the above",

  explanation:
    "Any of these changes can produce the output 25.",

  hint:
    "Check which options print 25.",

  xp: 10
},

{
  id: 5,
  type: "syntax",
  language: "Python",
  difficulty: "Easy",

topic: "General",

  question: "What will be the output of the following code snippet?",

  code:
`for i in range(3):
    print("*", end="")`,

  correctAnswer: "***",

  explanation:
    "The loop runs 3 times and prints one * each time.",

  hint:
    "How many times does range(3) run?",

  xp: 10
},

{
  id: 6,
  type: "mcq",
  language: "Python",
  difficulty: "Easy",

topic: "General",

  question: "Required Output - Eligible",

  code:
`age = 20

if age < 18:
    print("Eligible")
else:
    print("Not Eligible")`,

  options: [
    "if age > 18:",
    "if age >= 18:",
    "if age == 18:",
    "if age <= 18:"
  ],

  correctAnswer: "if age >= 18:",

  explanation:
    "A person is eligible if age is 18 or greater.",

  hint:
    "Check the condition for age = 20.",

  xp: 10
},

{
  id: 7,
  type: "syntax",
  language: "Python",
  difficulty: "Easy",

topic: "General",

  question: "What will be the output of the following code snippet?",

  code:
`name = "Python"
print(name[0])`,

  correctAnswer: "P",

  explanation:
    "String indexing starts from 0.",

  hint:
    "What is the first character?",

  xp: 10
},

{
  id: 8,
  type: "mcq",
  language: "Python",
  difficulty: "Easy",

topic: "General",

  question: "Required Output - 1 2 3 4 5",

  code:
`for i in range(1, 5):
    print(i, end=" ")`,

  options: [
    "range(1, 6)",
    "range(0, 5)",
    "range(1, 5)",
    "range(5)"
  ],

  correctAnswer: "range(1, 6)",

  explanation:
    "The ending value in range() is excluded.",

  hint:
    "Does range include the last value?",

  xp: 10
},

{
  id: 9,
  type: "syntax",
  language: "Python",
  difficulty: "Easy",

topic: "General",

  question: "What will be the output of the following code snippet?",

  code:
`nums = [10, 20, 30]
print(nums[1])`,

  correctAnswer: "20",

  explanation:
    "List indexing starts from 0, so nums[1] is 20.",

  hint:
    "Find the second element.",

  xp: 10
},

{
  id: 10,
  type: "mcq",
  language: "Python",
  difficulty: "Easy",

topic: "General",

  question: "Required Output - Python",

  code:
`lang = "Java"
print(lang)`,

  options: [
    "lang = Python",
    "lang = \"Python\"",
    "lang == \"Python\"",
    "print(\"Python\")"
  ],

  correctAnswer: "lang = \"Python\"",

  explanation:
    "Assigning the string \"Python\" to lang produces the required output.",

  hint:
    "How do you assign a string value?",

  xp: 10
},
{
id: 11,
type: "mcq",
language: "Python",
difficulty: "Medium",

topic: "General",

question: "Required Output - 55",

code:
`def calculate_sum():
total = 0

for i in range(1, 11):
    total = i

print(total)

calculate_sum()`,

options: [
"Replace total = i with total += i",
"Replace range(1, 11) with range(11)",
"Replace print(total) with return total",
"Initialize total as 1"
],

correctAnswer:
"Replace total = i with total += i",

explanation:
"The variable total gets overwritten in every iteration. Using += accumulates all values from 1 to 10.",

hint:
"Check whether total is being accumulated or replaced.",

xp: 20
},

{
id: 12,
type: "syntax",
language: "Python",
difficulty: "Medium",

topic: "General",

question: "Required Output - 120. Type only the corrected line.",

code:
`def factorial(n):
result = 1

for i in range(1, n):
    result *= i

return result

print(factorial(5))`,

correctAnswer:
"for i in range(1, n + 1):",

explanation:
"The loop stops before n. Using n + 1 includes 5 and produces 120.",

hint:
"range excludes the ending value.",

xp: 20
},

{
id: 13,
type: "mcq",
language: "Python",
difficulty: "Medium",

topic: "General",

question: "Required Output - [1, 2, 3, 4, 5]",

code:
`numbers = [1, 2, 3, 4]
numbers.append(5, 6)

print(numbers)`,

options: [
"Replace append(5, 6) with append(5)",
"Replace append(5, 6) with extend([5])",
"Replace append(5, 6) with insert(5)",
"Replace append with add"
],

correctAnswer:
"Replace append(5, 6) with append(5)",

explanation:
"append accepts only one argument. Appending 5 produces the required output.",

hint:
"How many arguments does append accept?",

xp: 20
},

{
id: 14,
type: "syntax",
language: "Python",
difficulty: "Medium",

topic: "General",

question: "Required Output - HELLO. Type only the corrected line.",

code:
`text = "hello"

print(text.upper)`,

correctAnswer:
"print(text.upper())",

explanation:
"upper is a method and must be called using parentheses.",

hint:
"Are you printing the method or calling it?",

xp: 20
},

{
id: 15,
type: "mcq",
language: "Python",
difficulty: "Medium",

topic: "General",

question: "Required Output - 30",

code:
`data = {
"math": 10,
"science": 20
}

print(data["Math"] + data["science"])`,

options: [
"Replace data[\"Math\"] with data[\"math\"]",
"Replace science with Science",
"Replace dictionary with list",
"Remove quotes from keys"
],

correctAnswer:
"Replace data[\"Math\"] with data[\"math\"]",

explanation:
"Dictionary keys are case-sensitive. The key stored is 'math', not 'Math'.",

hint:
"Check the exact spelling and case of the key.",

xp: 20
},

{
id: 16,
type: "syntax",
language: "Python",
difficulty: "Medium",

topic: "General",

question: "Required Output - [2, 4, 6, 8]. Type only the corrected line.",

code:
`numbers = [1, 2, 3, 4]

result = [n * 2 for n in number]

print(result)`,

correctAnswer:
"result = [n * 2 for n in numbers]",

explanation:
"The list variable is named numbers, not number.",

hint:
"Look for a variable name mismatch.",

xp: 20
},

{
id: 17,
type: "mcq",
language: "Python",
difficulty: "Medium",

topic: "General",

question: "Required Output - 15",

code:
`def add(a, b):
print(a + b)

result = add(10, 5)

print(result)`,

options: [
"Replace print(a + b) with return a + b",
"Replace result with sum",
"Remove print(result)",
"Change add to calculate"
],

correctAnswer:
"Replace print(a + b) with return a + b",

explanation:
"The function currently prints the value and returns None. Returning the value allows it to be stored and printed later.",

hint:
"What value is stored in result?",

xp: 20
},

{
id: 18,
type: "syntax",
language: "Python",
difficulty: "Medium",

topic: "General",

question: "Required Output - 5. Type only the corrected line.",

code:
`numbers = [5, 10, 15]

print(numbers[3])`,

correctAnswer:
"print(numbers[0])",

explanation:
"Lists use zero-based indexing. Index 3 is out of range.",

hint:
"What index contains the first element?",

xp: 20
},

{
  id: 19,
  type: "mcq",
  language: "Python",
  difficulty: "Medium",

topic: "General",

  question: "Required Output - [1, 2, 3, 4]",

  code:
`numbers = [1, 2, 3]

def add_item(lst, item):
    lst = lst.append(item)
    return lst

numbers = add_item(numbers, 4)

print(numbers)`,

  options: [
    "Replace `lst = lst.append(item)` with `lst.append(item)`",
    "Replace `return lst` with `return item`",
    "Replace append with extend",
    "Remove the return statement"
  ],

  correctAnswer:
    "Replace `lst = lst.append(item)` with `lst.append(item)`",

  explanation:
    "append() modifies the list in place and returns None. Assigning its result back to lst makes lst become None, causing the final output to be incorrect.",

  hint:
    "What does list.append() actually return?",
    
  xp: 20
},

{
id: 20,
type: "syntax",
language: "Python",
difficulty: "Medium",

topic: "General",

question: "Required Output - Alice. Type only the corrected line.",

code:
`students = ["John", "Alice", "Bob"]

print(student[1])`,

correctAnswer:
"print(students[1])",

explanation:
"The list is named students, but student is used in the print statement.",

hint:
"Look for a variable naming mismatch.",

xp: 20
},

{
  id: 21,
  type: "mcq",
  language: "Python",
  difficulty: "Hard",

topic: "General",

  question: "Required Output - 15",

  code:
`def calculate(nums=[]):
    nums.append(5)
    return sum(nums)

print(calculate())
print(calculate())`,

  options: [
    "Replace `nums=[]` with `nums=None` and initialize inside the function",
    "Replace `append(5)` with `append(10)`",
    "Replace `sum(nums)` with `len(nums)`",
    "Remove the return statement"
  ],

  correctAnswer:
    "Replace `nums=[]` with `nums=None` and initialize inside the function",

  explanation:
    "Mutable default arguments retain values between function calls. Using None creates a fresh list each time.",

  hint:
    "Default mutable arguments can cause unexpected behavior.",

  xp: 30
},

{
  id: 22,
  type: "syntax",
  language: "Python",
  difficulty: "Hard",

topic: "General",

  question: "Required Output - [1, 2, 3, 4, 5]. Type only the corrected line.",

  code:
`numbers = [1, 2, 3]

def add_items(lst):
    lst = lst + [4, 5]

add_items(numbers)

print(numbers)`,

  correctAnswer:
    "lst.extend([4, 5])",

  explanation:
    "Using lst = lst + [...] creates a new list and does not modify the original one. extend() modifies the list in place.",

  hint:
    "The function should modify the existing list, not create a new one.",

  xp: 30
},

{
  id: 23,
  type: "mcq",
  language: "Python",
  difficulty: "Hard",

topic: "General",

  question: "Required Output - 120",

  code:
`def factorial(n):
    if n == 1:
        return 1

    return n * factorial(n)

print(factorial(5))`,

  options: [
    "Replace `factorial(n)` with `factorial(n - 1)`",
    "Replace `n == 1` with `n == 5`",
    "Replace `return 1` with `return 0`",
    "Remove recursion"
  ],

  correctAnswer:
    "Replace `factorial(n)` with `factorial(n - 1)`",

  explanation:
    "The recursive call never decreases n, causing infinite recursion. Subtracting 1 moves toward the base case.",

  hint:
    "A recursive function must make progress toward its stopping condition.",

  xp: 30
},

{
  id: 24,
  type: "syntax",
  language: "Python",
  difficulty: "Hard",

topic: "General",

  question: "Required Output - {'a': 2, 'b': 4, 'c': 6}. Type only the corrected line.",

  code:
`data = {
    "a": 1,
    "b": 2,
    "c": 3
}

result = {}

for key, value in data:
    result[key] = value * 2

print(result)`,

  correctAnswer:
    "for key, value in data.items():",

  explanation:
    "Iterating over a dictionary directly returns only keys. items() returns key-value pairs.",

  hint:
    "How do you iterate through both keys and values of a dictionary?",

  xp: 30
},

{
  id: 25,
  type: "mcq",
  language: "Python",
  difficulty: "Hard",

topic: "General",

  question: "Required Output - 10",

  code:
`class Counter:
    count = 0

    def increment(self):
        count += 1

obj = Counter()

for _ in range(10):
    obj.increment()

print(obj.count)`,

  options: [
    "Replace `count += 1` with `self.count += 1`",
    "Replace `count = 0` with `count = 1`",
    "Remove the loop",
    "Replace increment with add"
  ],

  correctAnswer:
    "Replace `count += 1` with `self.count += 1`",

  explanation:
    "Inside class methods, instance or class attributes must be accessed using self. Otherwise Python looks for a local variable named count.",

  hint:
    "How are object attributes accessed inside methods?",

  xp: 30
},

{
  id: 26,
  type: "mcq",
  language: "Python",
  difficulty: "Hard",

topic: "General",

  question: "Required Output - [2, 4, 6, 8, 10]",

  code:
`numbers = [1, 2, 3, 4, 5]

result = map(lambda x: x * 2, numbers)

print(result)`,

  options: [
    "Replace `print(result)` with `print(list(result))`",
    "Replace map with filter",
    "Replace lambda with def",
    "Convert numbers to a tuple"
  ],

  correctAnswer:
    "Replace `print(result)` with `print(list(result))`",

  explanation:
    "In Python 3, map() returns a map object. Converting it to a list displays the actual values.",

  hint:
    "What does map() return in Python 3?",

  xp: 30
},

{
  id: 27,
  type: "syntax",
  language: "Python",
  difficulty: "Hard",

topic: "General",

  question: "Required Output - ['Alice', 'Bob', 'Charlie']. Type only the corrected line.",

  code:
`names = ["Charlie", "Alice", "Bob"]

sorted(names)

print(names)`,

  correctAnswer:
    "names.sort()",

  explanation:
    "sorted() returns a new sorted list and does not modify the original list. sort() changes the list in place.",

  hint:
    "The original list must be modified before printing.",

  xp: 30
},

{
  id: 28,
  type: "mcq",
  language: "Python",
  difficulty: "Hard",

topic: "General",

  question: "Required Output - 5",

  code:
`class Student:
    def __init__(self, marks):
        marks = marks

s = Student(5)

print(s.marks)`,

  options: [
    "Replace `marks = marks` with `self.marks = marks`",
    "Replace __init__ with init",
    "Remove the constructor",
    "Replace Student with student"
  ],

  correctAnswer:
    "Replace `marks = marks` with `self.marks = marks`",

  explanation:
    "The constructor parameter is assigned to itself instead of creating an instance attribute.",

  hint:
    "How are instance variables created inside __init__?",

  xp: 30
},

{
  id: 29,
  type: "syntax",
  language: "Python",
  difficulty: "Hard",

topic: "General",

  question: "Required Output - 15. Type only the corrected line.",

  code:
`numbers = [1, 2, 3, 4, 5]

total = reduce(lambda a, b: a + b)

print(total)`,

  correctAnswer:
    "total = reduce(lambda a, b: a + b, numbers)",

  explanation:
    "reduce() requires both a function and an iterable.",

  hint:
    "A collection of values is missing from the reduce call.",

  xp: 30
},

{
  id: 30,
  type: "mcq",
  language: "Python",
  difficulty: "Hard",

topic: "General",

  question: "Required Output - File closed successfully",

  code:
`file = open("data.txt", "w")

try:
    file.write("Hello")
finally:
    pass

print("File closed successfully")`,

  options: [
    "Replace `pass` with `file.close()`",
    "Replace write with read",
    "Remove finally block",
    "Replace open with print"
  ],

  correctAnswer:
    "Replace `pass` with `file.close()`",

  explanation:
    "The finally block is commonly used for cleanup operations such as closing files, ensuring resources are released properly.",

  hint:
    "What important operation is usually performed in a finally block when working with files?",

  xp: 30
}
];