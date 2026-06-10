export const cppQuestions = [

{
  id: 1,
  type: "mcq",
  language: "C++",
  difficulty: "Medium",
  topic: "Classes",

  question: "Required Output - 10",

  code:
`#include <iostream>
using namespace std;
class Test {
    int x;
public:
    Test(int x) {
        x = x;
    }
    void display() {
        cout << x;
    }
};
int main() {
    Test t(10);
    t.display();
    return 0;
}`,

  options: [
      "Replace int x; with float x;",
      "Remove constructor",
      "Replace x = x; with this->x = x;",
      "Replace cout << x; with cin >> x;"
  ],

  correctAnswer: "Replace x = x; with this->x = x;",

  explanation:
    "The constructor parameter shadows the member variable. this->x refers to the class member.",

  hint:
    "Parameter and member variable have the same name.",

  xp: 20
},

{
  id: 2,
  type: "mcq",
  language: "C++",
  difficulty: "Medium",
  topic: "Constructors and Destructors",

  question: "What will be the output of the following code snippet?",

  code:
`#include <iostream>
using namespace std;
class Demo {
public:
    Demo() {
        cout << "Constructor ";
    }
    ~Demo() {
        cout << "Destructor ";
    }
};
int main() {
    Demo d1;
    {
        Demo d2;
    }
    cout << "End ";
    return 0;
}`,

  options: [
    "Constructor Constructor End Destructor Destructor",
    "Constructor Constructor Destructor End Destructor",
    "Constructor Destructor Constructor End Destructor",
    "Constructor Constructor Destructor Destructor End"
  ],

  correctAnswer: "Constructor Constructor Destructor End Destructor",

  explanation:
    "d2 is destroyed when the inner block ends, then End is printed, and finally d1 is destroyed.",

  hint:
    "Track object creation and destruction order.",

  xp: 20
},

{
  id: 3,
  type: "syntax",
  language: "C++",
  difficulty: "Medium",
  topic: "Function Overriding",

  question: "What will be the output of the following code snippet?",

  code:
`#include <iostream>
using namespace std;
class Base {
public:
    void show() {
        cout << "Base";
    }
};
class Derived : public Base {
public:
    void show() {
        cout << "Derived";
    }
};

int main() {
    Derived d;
    d.show();
    return 0;
}`,

  validation: {
  type: "includes",
  acceptedAnswers: [
    "Derived"
  ]
},

  explanation:
    "The Derived class overrides the show() method and hides the Base version.",

  hint:
    "Which show() function belongs to the object?",

  xp: 20
},

{
  id: 4,
  type: "mcq",
  language: "C++",
  difficulty: "Medium",
  topic: "Functions",

  question: "Required Output - 25",

  code:
`#include <iostream>
using namespace std;
int square(int n) {
    return n * n;
}
int main() {
    cout << square;
    return 0;
}`,

  options: [
    "cin >> square(5);",
    "return square;",
    "cout << square;",
    "cout << square(5);"
  ],

  correctAnswer: "cout << square(5);",

  explanation:
    "square is a function name. Calling square(5) executes the function and returns 25.",

  hint:
    "A function must be called using parentheses.",

  xp: 20
},

{
  id: 5,
  type: "syntax",
  language: "C++",
  difficulty: "Medium",
  topic: "Pointers",

  question: "What will be the output of the following code snippet?",

  code:
`#include <iostream>
using namespace std;
int main() {
    int arr[] = {10, 20, 30, 40};
    cout << *(arr + 2);
    return 0;
}`,

validation: {
  type: "includes",
  acceptedAnswers: [
    "30"
  ]
},

  explanation:
    "arr + 2 points to the third element of the array, which is 30.",

  hint:
    "Remember pointer arithmetic on arrays.",

  xp: 20
},

{
  id: 6,
  type: "mcq",
  language: "C++",
  difficulty: "Hard",
  topic: "Variable Shadowing",

  question: "Required Output - 15",

  code:
`#include <iostream>
using namespace std;
class Test {
    int x = 5;
public:
    void add(int x) {
        x = x + 10;
    }
    void display() {
        cout << x;
    }
};
int main() {
    Test t;
    t.add(5);
    t.display();
    return 0;
}`,

  options: [
    "Replace x = x + 10; with this->x = x + 10;",
    "Replace int x = 5; with float x = 5;",
    "Replace cout << x; with cin >> x;",
    "Remove function parameter"
  ],

  correctAnswer:
    "Replace x = x + 10; with this->x = x + 10;",

  explanation:
    "The parameter x hides the class member x. Using this->x accesses the member variable and updates it correctly.",

  hint:
    "The parameter and member variable have the same name.",

  xp: 30
},

{
  id: 7,
  type: "mcq",
  language: "C++",
  difficulty: "Hard",
  topic: "Constructors and Destructors",

  question: "What will be the output of the following code snippet?",

  code:
`#include <iostream>
using namespace std;
class A {
public:
    A() {
        cout << "A ";
    }
    ~A() {
        cout << "B ";
    }
};
int main() {
    A a1;
    {
        A a2;
        {
            A a3;
        }
    }
    cout << "C ";
    return 0;
}`,

  options: [
    "A A B A B C B",
    "A A A B B B C",
    "A A A B B C B",
    "A A A C B B B"
  ],

  correctAnswer: "A A A B B C B",

  explanation:
    "Three constructors print A. a3 is destroyed first, then a2, then C is printed, and finally a1 is destroyed.",

  hint:
    "Destructors run in reverse order of object creation.",

  xp: 30
},

{
  id: 8,
  type: "mcq",
  language: "C++",
  difficulty: "Hard",
  topic: "Static Variables",

  question: "What will be the output of the following code snippet?",

  code:
`#include <iostream>
using namespace std;
class Test {
public:
    static int x;
    Test() {
        x++;
    }
};
int Test::x = 0;
int main() {
    Test t1;
    Test t2;
    Test t3;
    cout << Test::x;
    return 0;
}`,

  options: [
    "0",
    "1",
    "2",
    "3"
  ],

  correctAnswer: "3",

  explanation:
    "Static variables are shared among all objects. Each constructor call increments x, resulting in 3.",

  hint:
    "How many objects are created?",

  xp: 30
},


{
  id: 9,
  type: "mcq",
  language: "C++",
  difficulty: "Hard",
  topic: "Functions",

  question: "Required Output - 25",

  code:
`#include <iostream>
using namespace std;
class Square {
public:
    int calc(int n) {
        n * n;
    }
};
int main() {
    Square s;
    cout << s.calc(5);
    return 0;
}`,

  options: [
    "Remove class",
    "Replace int with float",
    "Replace n * n; with return n * n;",
    "Replace cout with cin"
  ],

  correctAnswer:
    "Replace n * n; with return n * n;",

  explanation:
    "The function computes n*n but never returns it. Adding a return statement fixes the issue.",

  hint:
    "What should an int function do with the calculated value?",

  xp: 30
},


{
  id: 10,
  type: "mcq",
  language: "C++",
  difficulty: "Hard",
  topic: "Loops",

  question: "What pattern will be printed when n = 4?",

  code:
`#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    for(int i = 1; i <= n; i++) {
        for(int j = i; j <= n; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}`,

  options: [
`****
***
**
*`,

`*
**
***
****`,

`****
****
****
****`,

`*
**
***`
  ],

  correctAnswer:
`****
***
**
*`,

  explanation:
    "The inner loop starts from i and runs up to n, so the number of stars decreases in each row.",

  hint:
    "Count the stars printed in each row.",

  xp: 30
},


{
  id: 11,
  type: "mcq",
  language: "C++",
  difficulty: "Hard",
  topic: "Constructors and Destructors",

  question: "What will be the output of the following code snippet?",

  code:
`#include <iostream>
using namespace std;
class Base {
public:
    Base() {
        cout << "B ";
    }
};
class Derived : public Base {
public:
    Derived() {
        cout << "D ";
    }
};
int main() {
    Derived d;
    return 0;
}`,

  options: [
    "D B",
    "B D",
    "B",
    "D"
  ],

  correctAnswer: "B D",

  explanation:
    "The base class constructor executes before the derived class constructor.",

  hint:
    "Constructor order in inheritance matters.",

  xp: 30
},


{
  id: 12,
  type: "mcq",
  language: "C++",
  difficulty: "Hard",
  topic: "Loops",

  question: "What will be the output of the following code snippet if n = 5?",

  code:
`#include <iostream>
using namespace std;
int main() {
    int n, sum = 0;
    cin >> n;
    for(int i = 1; i <= n; i++) {
        if(i % 2 == 0)
            sum += i;
        else
            sum -= i;
    }
    cout << sum;
    return 0;
}`,

  options: [
    "3",
    "-3",
    "15",
    "0"
  ],

  correctAnswer: "-3",

  explanation:
    "The calculation becomes -1 + 2 - 3 + 4 - 5 = -3.",

  hint:
    "Odd numbers are subtracted and even numbers are added.",

  xp: 30
},

{
  id: 13,
  type: "mcq",
  language: "C++",
  difficulty: "Hard",
  topic: "Variable Shadowing",

  question: "Required Output - 50",

  code:
`#include <iostream>
using namespace std;
class Demo {
    int x = 10;
public:
    void multiply() {
        int x = 5;
        x = x * x;
    }
    void show() {
        cout << x;
    }
};
int main() {
    Demo d;
    d.multiply();
    d.show();
    return 0;
}`,

  options: [
    "Remove class",
    "Replace `cout << x;` with `cin >> x;`",
    "Replace `x = x * x;` with `x = x + x;`",
    "Replace `int x = 5;` with `x = 5;`"
  ],

  correctAnswer: "Replace `int x = 5;` with `x = 5;`",

  explanation:
    "The local variable hides the class member variable. Removing int allows the member variable to be modified.",

  hint:
    "Variable shadowing is causing the issue.",

  xp: 30
},

{
  id: 14,
  type: "syntax",
  language: "C++",
  difficulty: "Easy",
  topic: "Variables",

  question: "What will be the output of the following code snippet?",

  code:
`#include <iostream>
using namespace std;
int main() {
    int age = 18;
    cout << age;
    return 0;
}`,

  validation: {
  type: "includes",
  acceptedAnswers: [
    "18"
  ]
},

  explanation:
    "The variable age stores 18 and is printed using cout.",

  hint:
    "Look at the value assigned to age.",

  xp: 10
},

{
  id: 15,
  type: "syntax",
  language: "C++",
  difficulty: "Hard",
  topic: "References",

  question: "What will be the output of the following code snippet?",

  code:
`#include <iostream>
using namespace std;
int main() {
    int num = 10;
    int& ref = num;
    ref = 20;
    cout << num;
    return 0;
}`,

validation: {
  type: "includes",
  acceptedAnswers: [
    "20"
  ]
},

  explanation:
    "ref is a reference to num. Changing ref also changes num.",

  hint:
    "A reference is an alias of the original variable.",

  xp: 30
},

{
  id: 16,
  type: "mcq",
  language: "C++",
  difficulty: "Easy",
  topic: "Basics",

  question: "Which symbol is used to terminate a statement in C++?",

  code:
`#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!"
    return 0;
}`,
    
  options: [
    ":",
    ";",
    ",",
    "."
  ],

  correctAnswer: ";",

  explanation:
    "Most C++ statements end with a semicolon.",

  hint:
    "Think about how statements are written in C++.",

  xp: 10
}

];