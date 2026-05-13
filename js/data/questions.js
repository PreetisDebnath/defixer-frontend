// questions.js

export const questions = [

  {
    id: 1,

    type: "mcq",

    language: "C",

    difficulty: "Easy",

    topic: "Loops",

    question:
      "Find the bug in the following code.",

    code:
`#include <stdio.h>

int main() {

    int i, sum = 0;

    for(i = 1; i <= 10 ++i) {

        sum += i;

    }

    printf("Sum = %d", sum);

}`,

    options: [

      "Missing semicolon in the for loop condition",

      "Wrong variable initialization",

      "Incorrect loop condition",

      "Missing closing brace"

    ],

    correctAnswer:
      "Missing semicolon in the for loop condition",

    explanation:
      "The for loop syntax is incorrect because semicolons must separate initialization, condition, and increment sections.",

    hint:
      "Look carefully at the for loop syntax.",

    xp: 10
  },

  {
    id: 2,

    type: "mcq",

    language: "C",

    difficulty: "Easy",

    topic: "Conditions",

    question:
      "What is wrong with this if statement?",

    code:
`#include <stdio.h>

int main() {

    int x = 10;

    if(x = 5) {

        printf("Equal");

    }

}`,

    options: [

      "Assignment operator used instead of comparison operator",

      "Variable x was not declared",

      "Missing printf semicolon",

      "Invalid if syntax"

    ],

    correctAnswer:
      "Assignment operator used instead of comparison operator",

    explanation:
      "Single '=' assigns value. Use '==' for comparison inside conditions.",

    hint:
      "Focus on the operator inside the if condition.",

    xp: 10
  },

  {
    id: 3,

    type: "mcq",

    language: "C",

    difficulty: "Medium",

    topic: "Arrays",

    question:
      "Identify the issue in the following array access.",

    code:
`#include <stdio.h>

int main() {

    int arr[5] = {1,2,3,4,5};

    printf("%d", arr[5]);

}`,

    options: [

      "Array index out of bounds",

      "Array declaration invalid",

      "Printf syntax wrong",

      "Missing return statement"

    ],

    correctAnswer:
      "Array index out of bounds",

    explanation:
      "Valid indexes for an array of size 5 are 0 to 4.",

    hint:
      "Check the valid index range of the array.",

    xp: 15
  },

  {
    id: 4,

    type: "mcq",

    language: "C",

    difficulty: "Medium",

    topic: "Functions",

    question:
      "Why does this function fail to return properly?",

    code:
`#include <stdio.h>

int add(int a, int b) {

    int sum = a + b;

}

int main() {

    printf("%d", add(2,3));

}`,

    options: [

      "Function does not return a value",

      "Main function missing",

      "Parameters are invalid",

      "Printf syntax is incorrect"

    ],

    correctAnswer:
      "Function does not return a value",

    explanation:
      "The function return type is int, but no return statement exists.",

    hint:
      "Check what the function is expected to return.",

    xp: 15
  },

  {
    id: 5,

    type: "mcq",

    language: "C",

    difficulty: "Hard",

    topic: "Pointers",

    question:
      "Find the pointer-related bug in the following code.",

    code:
`#include <stdio.h>

int main() {

    int *ptr;

    *ptr = 10;

    printf("%d", *ptr);

}`,

    options: [

      "Pointer used without initialization",

      "Pointer declaration invalid",

      "Printf format invalid",

      "Pointers cannot store integers"

    ],

    correctAnswer:
      "Pointer used without initialization",

    explanation:
      "The pointer does not point to valid memory before dereferencing.",

    hint:
      "Think about where the pointer is pointing.",

    xp: 20
  },

  {
    id: 6,

    type: "mcq",

    language: "C",

    difficulty: "Easy",

    topic: "Syntax",

    question:
      "Find the syntax error in the following code.",

    code:
`#include <stdio.h>

int main() {

    printf("Hello World")

    return 0;

}`,

    options: [

      "Missing semicolon after printf",

      "Missing header file",

      "Invalid return statement",

      "Missing main function"

    ],

    correctAnswer:
      "Missing semicolon after printf",

    explanation:
      "Every statement in C must end with a semicolon.",

    hint:
      "Check the end of the printf statement.",

    xp: 10
  },

  {
    id: 7,

    type: "mcq",

    language: "C",

    difficulty: "Medium",

    topic: "Pointers",

    question:
      "What is wrong with this pointer declaration?",

    code:
`#include <stdio.h>

int main() {

    int *ptr = NULL;

    printf("%d", *ptr);

}`,

    options: [

      "Dereferencing NULL pointer",

      "Pointer declaration invalid",

      "Printf syntax wrong",

      "NULL keyword invalid"

    ],

    correctAnswer:
      "Dereferencing NULL pointer",

    explanation:
      "NULL pointers do not point to valid memory locations.",

    hint:
      "Think about what NULL means in memory.",

    xp: 15
  },

  {
    id: 8,

    type: "mcq",

    language: "C",

    difficulty: "Hard",

    topic: "Memory",

    question:
      "Identify the memory-related issue.",

    code:
`#include <stdlib.h>

int main() {

    int *arr = malloc(5 * sizeof(int));

    arr[10] = 5;

}`,

    options: [

      "Out-of-bounds memory access",

      "malloc syntax invalid",

      "Array declaration missing",

      "Missing printf statement"

    ],

    correctAnswer:
      "Out-of-bounds memory access",

    explanation:
      "The allocated array only has space for 5 integers.",

    hint:
      "Check how much memory was allocated.",

    xp: 20
  }

];