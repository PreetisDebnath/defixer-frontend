export const questions = [

  /* =========================
     MCQ QUESTIONS
  ========================= */

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

  /* =========================
     SYNTAX QUESTIONS
  ========================= */

  {
    id: 6,

    type: "syntax",

    language: "C",

    difficulty: "Easy",

    topic: "Syntax",

    question:
      "Fix the missing semicolon error.",

    code:
`#include <stdio.h>

int main() {

    printf("Hello World")

    return 0;

}`,

    validation: {

  type: "includes",

  acceptedAnswers: [

    `printf("Hello World");`,

    `printf( "Hello World" );`

  ]
},

    explanation:
      "Every statement in C must end with a semicolon.",

    hint:
      "Check the printf statement carefully.",

    xp: 10
  },

  {
    id: 7,

    type: "syntax",

    language: "C",

    difficulty: "Easy",

    topic: "Conditions",

    question:
      "Correct the comparison operator in the if condition.",

    code:
`#include <stdio.h>

int main() {

    int x = 5;

    if(x = 10){

        printf("Equal");

    }

}`,

    validation: {

  type: "includes",

  acceptedAnswers: [

    `if(x == 10)`,

    `if (x == 10)`

  ]
},

    explanation:
      "Use '==' for comparison inside conditions.",

    hint:
      "Assignment and comparison operators are different.",

    xp: 10
  },

  {
    id: 8,

    type: "syntax",

    language: "C",

    difficulty: "Medium",

    topic: "Loops",

    question:
      "Fix the loop syntax.",

    code:
`#include <stdio.h>

int main() {

    int i;

    for(i = 0 i < 5; i++) {

        printf("%d", i);

    }

}`,

    validation: {

  type: "regex",

  pattern:
  `for\\s*\\(\\s*i\\s*=\\s*0\\s*;\\s*i\\s*<\\s*5\\s*;\\s*i\\+\\+\\s*\\)`

},

    explanation:
      "The for loop requires semicolons between expressions.",

    hint:
      "Look at the separators inside the loop.",

    xp: 15
  },

  {
    id: 9,

    type: "syntax",

    language: "C",

    difficulty: "Medium",

    topic: "Functions",

    question:
      "Fix the function return statement.",

    code:
`#include <stdio.h>

int add(int a, int b){

    int sum = a + b;

}

`,

    validation: {

  type: "tokens",

  requiredTokens: [

    "return",

    "sum",

    ";"

  ]
},

    explanation:
      "Functions with int return type must return a value.",

    hint:
      "The function calculates sum but never returns it.",

    xp: 15
  },

  {
    id: 10,

    type: "syntax",

    language: "C",

    difficulty: "Hard",

    topic: "Pointers",

    question:
      "Fix the pointer initialization.",

    code:
`#include <stdio.h>

int main() {

    int *ptr;

    *ptr = 10;

}`,

    validation: {

  type: "includes",

  acceptedAnswers: [

`int value = 10;
int *ptr = &value;`,

`int value=10;
int* ptr=&value;`

  ]
},

    explanation:
      "Pointers must point to valid memory before dereferencing.",

    hint:
      "The pointer currently points nowhere.",

    xp: 20
  } ,

  /* =========================
   ADD THESE BELOW ID: 10
   AND ABOVE THE FINAL ];
========================= */

  {
    id: 11,

    type: "mcq",

    language: "C",

    difficulty: "Easy",

    topic: "Variables",

    question:
      "What will be the output of the following code snippet in C?",

    code:
`#include <stdio.h>

int main() {

    int a = 10;

    printf("%d", a);

    return 0;

}`,

    options: [

      "a",

      "10",

      "%d",

      "Error"

    ],

    correctAnswer:
      "10",

    explanation:
      "printf replaces %d with the integer value stored in variable a.",

    hint:
      "Focus on the value stored in variable a.",

    xp: 10
  },

  {
    id: 12,

    type: "mcq",

    language: "C",

    difficulty: "Easy",

    topic: "Data Types",

    question:
      "Required Output - 5.7",

    code:
`#include <stdio.h>

int main() {

    int a = 5.7;

    printf("%f", a);

    return 0;

}`,

    options: [

      `float a = 5.7;
printf("%f", a);`,

      `char a = 5.7;
printf("%c", a);`,

      `int a = 5.7;
printf("%d", a);`,

      `double a = 5.7;
printf("%d", a);`

    ],

    correctAnswer:
`float a = 5.7;
printf("%f", a);`,

    explanation:
      "float data type stores decimal values correctly and %f prints floating-point numbers.",

    hint:
      "Think about which datatype supports decimal numbers.",

    xp: 10
  },

  {
    id: 13,

    type: "syntax",

    language: "C",

    difficulty: "Easy",

    topic: "Syntax",

    question:
      "Fix the missing semicolon in the declaration.",

    code:
`#include <stdio.h>

int main() {

    int a = 10

    printf("%d", a);

    return 0;

}`,

    validation: {

  type: "includes",

  acceptedAnswers: [

    `int a = 10;`,

    `int a=10;`

  ]
},

    explanation:
      "Every statement in C must end with a semicolon.",

    hint:
      "Look at the variable declaration carefully.",

    xp: 10
  },

  {
    id: 14,

    type: "mcq",

    language: "C",

    difficulty: "Easy",

    topic: "Operators",

    question:
      "Required output - 10",

    code:
`#include <stdio.h>

int main() {

    int a = 5, b = 2;

    printf("%d", a ^ b);

    return 0;

}`,

    options: [

      "%",

      "*",

      "/",

      "+"

    ],

    correctAnswer:
      "*",

    explanation:
      "The ^ operator performs bitwise XOR, not multiplication. Use * for multiplication.",

    hint:
      "Which operator performs multiplication in C?",

    xp: 10
  },

  {
    id: 15,

    type: "mcq",

    language: "C",

    difficulty: "Easy",

    topic: "Conditions",

    question:
      "Required output - Eligible for voting",

    code:
`#include <stdio.h>

int main() {

    int age = 20;

    if(age < 18)

        printf("Eligible for voting");

    else

        printf("Not eligible for voting");

    return 0;

}`,

    options: [

      "if(age > 18)",

      "if(age >= 18)",

      "if(age == 18)",

      "if(age <= 18)"

    ],

    correctAnswer:
      "if(age >= 18)",

    explanation:
      "Voting eligibility requires age to be 18 or greater.",

    hint:
      "Check the correct voting age condition.",

    xp: 10
  },

  {
    id: 16,

    type: "syntax",

    language: "C",

    difficulty: "Easy",

    topic: "Conditions",

    question:
      "What will be the output of the following code snippet in C?",

    code:
`#include <stdio.h>

int main() {

    int x = 5;

    if(x > 2)

        if(x > 10)

            printf("A");

        else

            printf("B");

    return 0;

}`,

    validation: {

  type: "includes",

  acceptedAnswers: [

    `B`,

    `printf("B");`

  ]
},

    explanation:
      "x > 2 is true, but x > 10 is false. Therefore the else block executes and prints B.",

    hint:
      "Trace both if conditions carefully.",

    xp: 10
  },

  {
    id: 17,

    type: "mcq",

    language: "C",

    difficulty: "Easy",

    topic: "Loops",

    question:
      "Required output - 1 2 3 4 5",

    code:
`#include <stdio.h>

int main() {

    int i;

    for(i = 1; i >= 5; i++)

        printf("%d ", i);

    return 0;

}`,

    options: [

      "i <= 5",

      "i == 5",

      "i != 5",

      "i < 1"

    ],

    correctAnswer:
      "i <= 5",

    explanation:
      "The loop condition must allow values from 1 through 5.",

    hint:
      "Check the loop stopping condition.",

    xp: 10
  },

  {
    id: 18,

    type: "mcq",

    language: "C",

    difficulty: "Easy",

    topic: "While Loop",

    question:
      "What will be the output of the following code snippet in C?",

    code:
`#include <stdio.h>

int main() {

    int i = 1;

    while(i <= 5) {

        printf("%d ", i);

    }

    return 0;

}`,

    options: [

      "1 2 3 4 5",

      "1",

      "Infinite loop",

      "No output"

    ],

    correctAnswer:
      "Infinite loop",

    explanation:
      "The value of i never changes, so the condition always remains true.",

    hint:
      "Look for the update of variable i.",

    xp: 10
  },

  {
    id: 19,

    type: "syntax",

    language: "C",

    difficulty: "Easy",

    topic: "Loops",

    question:
      "Predict the output of the loop.",

    code:
`#include <stdio.h>

int main() {

    int i;

    for(i = 1; i <= 3; i++) {

        printf("*");

    }

    return 0;

}`,

    validation: {

  type: "includes",

  acceptedAnswers: [

    `***`

  ]
},

    explanation:
      "The loop executes three times and prints one * during each iteration.",

    hint:
      "Count how many times the loop runs.",

    xp: 10
  },

  {
    id: 20,

    type: "mcq",

    language: "C",

    difficulty: "Easy",

    topic: "Nested Loops",

    question:
      "Required Output - 3 stars in each row",

    code:
`#include <stdio.h>

int main() {

    int i, j;

    for(i = 1; i <= 3; i++) {

        for(j = 1; j <= 2; j++) {

            printf("*");

        }

        printf("\\n");

    }

    return 0;

}`,

    options: [

      "for(j = 1; j <= 3; j++)",

      "for(i = 1; i <= 2; i++)",

      "printf(\"**\");",

      "for(j = 1; j >= 3; j++)"

    ],

    correctAnswer:
      "for(j = 1; j <= 3; j++)",

    explanation:
      "The inner loop controls the number of stars printed in each row.",

    hint:
      "Focus on the inner loop count.",

    xp: 15
  }

];