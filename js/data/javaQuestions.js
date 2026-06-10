export const javaQuestions = [
    {
    id: 1,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Find and fix the data type error so the program correctly prints 25.",

    code:
`public class Main {
    public static void main(String[] args) {
        int num = "25";
        System.out.println(num);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "int num = 25;",
    "int num=25;"
  ]
},

    explanation:
      "The variable num is declared as an int, but the value assigned to it is a String because it is enclosed in double quotes. Java does not automatically convert a String into an integer during assignment. To fix the error, either remove the quotes and write 25 directly or use Integer.parseInt(\"25\") if the value comes from a String.",

    hint:
      "Check whether the assigned value matches the declared data type.",

    xp: 10
  },

  {
    id: 2,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Find and fix the syntax error in the program.",

    code:
`public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to Java")
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    'System.out.println("Welcome to Java");'
  ]
},

    explanation:
      "In Java, every statement must end with a semicolon (;). The println statement is missing its terminating semicolon, causing a compilation error.",

    hint:
      "Look at the end of the println statement.",

    xp: 10
  },

  {
    id: 3,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Fix the variable name issue and print the value correctly.",

    code:
`public class Main {
    public static void main(String[] args) {
        int age = 20;
        System.out.println(Age);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "System.out.println(age);"
  ]
},

    explanation:
      "Java is case-sensitive. The variable was declared as age (lowercase a), but later referenced as Age (uppercase A). Since Age does not exist, the compiler reports an error.",

    hint:
      "Java treats uppercase and lowercase letters differently.",

    xp: 10
  },

  {
    id: 4,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Fix the infinite loop so the program prints numbers from 1 to 5.",

    code:
`public class Main {
    public static void main(String[] args) {

        int i = 1;

        while(i <= 5) {
            System.out.println(i);
        }
    }
}`,

    validation: {
  type: "tokens",
  requiredTokens: [
    "i++"
  ]
},

    explanation:
      "The loop condition depends on i becoming greater than 5. Since i is never updated, the condition always remains true and the loop runs forever. Incrementing i during each iteration allows the loop to terminate normally.",

    hint:
      "The loop variable never changes.",

    xp: 10
  },

  {
    id: 5,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Fix the condition so the program correctly checks equality.",

    code:
`public class Main {
    public static void main(String[] args) {

        int a = 10;

        if(a = 10) {
            System.out.println("Equal");
        }
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "if(a == 10)",
    "if (a == 10)"
  ]
},

    explanation:
      "The operator = is used for assignment, while == is used for comparison. Inside an if condition, Java expects a boolean expression. Using == correctly compares the value of a with 10.",

    hint:
      "Assignment and comparison use different operators.",

    xp: 10
  },

  {
    id: 6,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Modify the program so the output becomes 3.5.",

    code:
`public class Main {
    public static void main(String[] args) {

        int a = 7;
        int b = 2;

        double result = a / b;

        System.out.println(result);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "double result = (double)a / b;",
    "double result=(double)a/b;"
  ]
},

    explanation:
      "Both operands are integers, so Java performs integer division first. The result of 7 / 2 is 3, which is then stored as 3.0 in the double variable. Converting one operand to double forces floating-point division and produces 3.5.",

    hint:
      "Integer division removes the decimal part.",

    xp: 10
  },

  {
    id: 7,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Fix the runtime error in the array access.",

    code:
`public class Main {
    public static void main(String[] args) {

        int arr[] = {1, 2, 3};

        System.out.println(arr[3]);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "arr[2]"
  ]
},

    explanation:
      "Array indexing starts from 0. The array contains three elements at indices 0, 1 and 2. Accessing index 3 causes an ArrayIndexOutOfBoundsException because that position does not exist.",

    hint:
      "Remember that arrays start at index 0.",

    xp: 10
  },

  {
    id: 8,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Make the program print \"Same\".",

    code:
`public class Main {
    public static void main(String[] args) {

        String s1 = "Hello";
        String s2 = new String("Hello");

        if(s1 == s2) {
            System.out.println("Same");
        } else {
            System.out.println("Different");
        }
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "if(s1.equals(s2))",
    "if (s1.equals(s2))"
  ]
},

    explanation:
      "The == operator compares object references, not string contents. Even though both strings contain the same text, they are different objects in memory. The equals() method compares the actual contents of the strings and returns true.",

    hint:
      "Use the method designed for comparing String values.",

    xp: 10
  },

  {
    id: 9,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Fix the variable initialization error.",

    code:
`public class Main {
    public static void main(String[] args) {

        int num;

        System.out.println(num);
    }
}`,

    validation: {
  type: "tokens",
  requiredTokens: [
    "int",
    "num",
    "="
  ]
},

    explanation:
      "Local variables in Java must be initialized before they are used. Since num has not been assigned any value, the compiler cannot determine what should be printed.",

    hint:
      "Local variables do not get default values.",

    xp: 10
  },

  {
    id: 10,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Fix the for loop so it prints numbers from 1 to 5.",

    code:
`public class Main {
    public static void main(String[] args) {

        for(int i = 1; i >= 5; i++) {
            System.out.println(i);
        }
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "for(int i = 1; i <= 5; i++)",
    "for (int i = 1; i <= 5; i++)"
  ]
},

    explanation:
      "The loop starts with i equal to 1. The condition i >= 5 is false immediately, so the loop never executes. Replacing >= with <= allows the loop to continue until i reaches 5.",

    hint:
      "Check whether the loop condition is true on the first iteration.",

    xp: 10
  },

  {
    id: 11,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Fix the swap logic so the values are exchanged correctly.",

    code:
`public class Main {
    public static void main(String[] args) {

        int a = 5;
        int b = 10;

        a = b;
        b = a;

        System.out.println(a + " " + b);
    }
}`,

  validation: {
  type: "tokens",
  requiredTokens: [
    "temp",
    "=",
    "a",
    "b"
  ]
},

    explanation:
      "After executing a = b, the original value of a is lost. Both variables become 10. A temporary variable preserves one value while the swap is performed.",

    hint:
      "One value is being overwritten before it can be saved.",

    xp: 10
  },

  {
    id: 12,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Fix the method call error.",

    code:
`public class Main {

    void display() {
        System.out.println("Hello");
    }

    public static void main(String[] args) {
        display();
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "static void display()",
    "Main obj = new Main();"
  ]
},

    explanation:
      "The display method is non-static, while main is static. A static method cannot directly call a non-static method because non-static methods belong to objects. Either make display static or create an object of Main and call the method through that object.",

    hint:
      "Static and non-static methods behave differently.",

    xp: 10
  },

  {
    id: 13,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Explain the output of the program.",

    code:
`public class Main {
    public static void main(String[] args) {

        int x = 5;

        System.out.println(x++);
        System.out.println(x);
    }
}`,

    validation: {
  type: "tokens",
  requiredTokens: [
    "5",
    "6"
  ]
},

    explanation:
      "The post-increment operator (x++) first uses the current value and then increases it by one. Therefore, the first println displays 5. After that statement executes, x becomes 6, so the second println displays 6.",

    hint:
      "Post-increment updates the variable after its current value is used.",

    xp: 10
  },

  {
    id: 14,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Fix the case sensitivity error.",

    code:
`public class Main {
    public static void main(String[] args) {

        string name = "Java";

        System.out.println(name);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    'String name = "Java";',
    'String name="Java";'
  ]
},

    explanation:
      "Java class names are case-sensitive. The String class must begin with an uppercase S. Writing string causes the compiler to search for a class named string, which does not exist.",

    hint:
      "Check the capitalization of the data type.",

    xp: 10
  },

  {
    id: 15,

    type: "syntax",

    language: "Java",

    difficulty: "Easy",

topic: "General",

    question:
      "Handle the NullPointerException properly.",

    code:
`public class Main {
    public static void main(String[] args) {

        String name = null;

        System.out.println(name.length());
    }
}`,

    validation: {
  type: "tokens",
  requiredTokens: [
    "name",
    "!=",
    "null"
  ]
},

    explanation:
      "A null reference does not point to any object. Calling a method on null causes a NullPointerException. Always verify that an object reference is not null before accessing its methods or properties.",

    hint:
      "The variable does not reference a String object.",

    xp: 10
  },

  {
    id: 16,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Fix the constructor so the program correctly prints 21.",

    code:
`class Student {
    int age;

    Student(int age) {
        age = age;
    }

    void display() {
        System.out.println(age);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student(21);
        s.display();
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "this.age = age;",
    "this.age=age;"
  ]
},

    explanation:
      "The constructor parameter age shadows the instance variable age. The statement age = age assigns the parameter to itself, leaving the instance variable unchanged. Using this.age refers to the object's field and correctly stores the passed value.",

    hint:
      "The constructor parameter and instance variable have the same name.",

    xp: 20
  },

  {
    id: 17,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Print all array elements without throwing an exception.",

    code:
`public class Main {
    public static void main(String[] args) {
        int arr[] = {10, 20, 30, 40};

        for(int i = 0; i <= arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "i < arr.length",
    "i<arr.length"
  ]
},
    explanation:
      "Array indices start at 0 and end at length - 1. When i becomes equal to arr.length, the program tries to access an index that doesn't exist, causing an ArrayIndexOutOfBoundsException.",

    hint:
      "The last valid array index is length - 1.",

    xp: 20
  },

  {
    id: 18,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Make the program print Equal.",

    code:
`public class Main {
    public static void main(String[] args) {

        String s1 = new String("Java");
        String s2 = new String("Java");

        if(s1 == s2)
            System.out.println("Equal");
        else
            System.out.println("Not Equal");
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "s1.equals(s2)"
  ]
},

    explanation:
      "The == operator compares object references rather than the actual contents of strings. Since s1 and s2 are different objects, == returns false. The equals() method compares the text stored inside the strings and returns true.",

    hint:
      "Use the String method designed for content comparison.",

    xp: 20
  },

  {
    id: 19,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Fix the compilation error in the method call.",

    code:
`public class Main {

    void display() {
        System.out.println("Hello");
    }

    public static void main(String[] args) {
        display();
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "static void display()",
    "Main obj = new Main();"
  ]
},

    explanation:
      "The main method is static and cannot directly access non-static methods. Either declare display() as static or create an object of Main and invoke display() through that object.",

    hint:
      "Static methods cannot directly call instance methods.",

    xp: 20
  },

  {
    id: 20,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Modify the program so the output becomes 2.5.",

    code:
`public class Main {
    public static void main(String[] args) {

        int a = 5;
        int b = 2;

        double result = a / b;

        System.out.println(result);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "double result = (double)a / b;",
    "double result=(double)a/b;"
  ]
},

    explanation:
      "Both operands are integers, so Java performs integer division and produces 2. The result is then converted to 2.0. Casting one operand to double forces floating-point division and produces 2.5.",

    hint:
      "The division is happening before assignment to double.",

    xp: 20
  },

  {
    id: 21,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Prevent the StackOverflowError caused by recursion.",

    code:
`public class Main {

    static void print() {
        System.out.println("Hello");
        print();
    }

    public static void main(String[] args) {
        print();
    }
}`,

    validation: {
  type: "tokens",
  requiredTokens: [
    "if",
    "return"
  ]
},

    explanation:
      "The method continuously calls itself without any terminating condition. Each call adds a new frame to the call stack until the stack memory is exhausted, resulting in a StackOverflowError.",

    hint:
      "Every recursive function needs a stopping condition.",

    xp: 20
  },

  {
    id: 22,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Handle the NullPointerException safely.",

    code:
`public class Main {
    public static void main(String[] args) {

        String name = null;

        System.out.println(name.toUpperCase());
    }
}`,

    validation: {
  type: "tokens",
  requiredTokens: [
    "name",
    "!=",
    "null"
  ]
},

    explanation:
      "A null reference does not point to any object. Calling a method on a null reference causes a NullPointerException. A null check prevents the error.",

    hint:
      "The String object does not actually exist.",

    xp: 20
  },

  {
    id: 23,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Swap the values correctly.",

    code:
`public class Main {
    public static void main(String[] args) {

        int a = 10;
        int b = 20;

        a = b;
        b = a;

        System.out.println(a + " " + b);
    }
}`,

   validation: {
  type: "tokens",
  requiredTokens: [
    "temp",
    "=",
    "a",
    "b"
  ]
},

    explanation:
      "After executing a = b, the original value of a is lost forever. Both variables end up storing 20. A temporary variable preserves one value while the swap is performed.",

    hint:
      "One value gets overwritten before it can be stored.",

    xp: 20
  },

  {
    id: 24,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Fix the reverse logic so the output becomes OLLEH.",

    code:
`public class Main {
    public static void main(String[] args) {

        String str = "HELLO";
        String rev = "";

        for(int i = 0; i < str.length(); i++) {
            rev += str.charAt(i);
        }

        System.out.println(rev);
    }
}`,

    validation: {
  type: "tokens",
  requiredTokens: [
    "str.length()-1",
    "i--"
  ]
},

    explanation:
      "The current loop copies the string in the same order, producing HELLO. To reverse a string, characters must be read from the last index to the first index.",

    hint:
      "Start from the end of the string.",

    xp: 20
  },

  {
    id: 25,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Print numbers from 1 to 5 correctly.",

    code:
`public class Main {
    public static void main(String[] args) {

        for(int i = 1; i <= 5; j++) {
            System.out.println(i);
        }
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "i++"
  ]
},

    explanation:
      "The loop variable is i, but the increment section uses j, which is not declared. This causes a compilation error. The loop should increment i during each iteration.",

    hint:
      "Check the variable used in the increment section.",

    xp: 20
  },

  {
    id: 26,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Find and print the largest element in the array.",

    code:
`public class Main {
    public static void main(String[] args) {

        int arr[] = {10, 50, 30, 90, 20};

        int max = 0;

        for(int i = 0; i < arr.length; i++) {
            if(arr[i] < max)
                max = arr[i];
        }

        System.out.println(max);
    }
}`,

    validation: {
  type: "tokens",
  requiredTokens: [
    "arr[0]",
    ">",
    "max"
  ]
},

    explanation:
      "The current logic updates max when a smaller value is found, which actually searches for a minimum value. To find the maximum, max should be updated when a larger element is encountered.",

    hint:
      "The comparison operator is pointing in the wrong direction.",

    xp: 20
  },

  {
    id: 27,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Detect the palindrome correctly.",

    code:
`public class Main {
    public static void main(String[] args) {

        String str = "madam";
        String rev = "";

        for(int i = str.length()-1; i >= 0; i--) {
            rev += str.charAt(i);
        }

        if(str == rev)
            System.out.println("Palindrome");
        else
            System.out.println("Not Palindrome");
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "str.equals(rev)"
  ]
},

    explanation:
      "The reversed string is correct, but == compares references rather than text. The equals() method compares actual string contents and correctly identifies palindromes.",

    hint:
      "This is the same mistake often made when comparing Strings.",

    xp: 20
  },

  {
    id: 28,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Calculate the average correctly.",

    code:
`public class Main {
    public static void main(String[] args) {

        int a = 10, b = 20, c = 30;

        double avg = (a + b + c) / 2;

        System.out.println(avg);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "double avg = (a + b + c) / 3.0;",
    "double avg=(a+b+c)/3.0;"
  ]
},

    explanation:
      "The average of three numbers is obtained by dividing their sum by 3, not by 2. Using 3.0 also ensures floating-point division when needed.",

    hint:
      "How many numbers are being averaged?",

    xp: 20
  },

  {
    id: 29,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Fix the method return type issue.",

    code:
`public class Main {

    static int add(int a, int b) {
        System.out.println(a + b);
    }

    public static void main(String[] args) {
        add(5, 10);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "return a + b;",
    "return a+b;"
  ]
},

    explanation:
      "A method declared with return type int must return an integer value. Printing a value is not the same as returning it. Without a return statement, the compiler reports an error.",

    hint:
      "The declared return type and actual behavior don't match.",

    xp: 20
  },

  {
    id: 30,

    type: "syntax",

    language: "Java",

    difficulty: "Medium",

topic: "General",

    question:
      "Fix the prime number logic so 13 is correctly identified as prime.",

    code:
`public class Main {
    public static void main(String[] args) {

        int n = 13;
        boolean prime = true;

        for(int i = 2; i <= n; i++) {
            if(n % i == 0) {
                prime = false;
                break;
            }
        }

        System.out.println(prime);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "i < n",
    "i<n"
  ]
},
    explanation:
      "Every number is divisible by itself. When i becomes equal to n, the condition n % i == 0 becomes true and the program incorrectly marks the number as non-prime. The divisor check should only run from 2 up to n-1 (or more efficiently up to √n).",

    hint:
      "A number should not be tested for divisibility by itself.",

    xp: 20
  },

  {
    id: 31,

    type: "syntax",

    language: "Java",

    difficulty: "Hard",

topic: "General",

    question:
      "Predict the output and explain why the value of x does not change.",

    code:
`public class Main {
    public static void main(String[] args) {

        int x = 5;

        x = x++;

        System.out.println(x);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "5"
  ]
},

    explanation:
      "The post-increment operator returns the current value before incrementing. First x++ evaluates to 5 and schedules x to become 6. However, the assignment x = x++ stores the old value (5) back into x, overwriting the incremented value. Therefore x remains 5.",

    hint:
      "Post-increment returns the old value before updating the variable.",

    xp: 30
  },

  {
    id: 32,

    type: "syntax",

    language: "Java",

    difficulty: "Hard",

topic: "General",

    question:
      "Predict the output of the expression involving both post and pre increment operators.",

    code:
`public class Main {
    public static void main(String[] args) {

        int x = 5;

        System.out.println(x++ + ++x);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "12"
  ]
},

    explanation:
      "Initially x is 5. The expression x++ returns 5 and then increments x to 6. Next ++x increments x to 7 and returns 7. Therefore the expression becomes 5 + 7 = 12.",

    hint:
      "Evaluate the left side first, then the right side.",

    xp: 30
  },

  {
    id: 33,

    type: "syntax",

    language: "Java",

    difficulty: "Hard",

topic: "General",

    question:
      "Predict the output and explain the role of the String Pool.",

    code:
`public class Main {
    public static void main(String[] args) {

        String s1 = "Java";
        String s2 = "Java";

        System.out.println(s1 == s2);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "true"
  ]
},

    explanation:
      "String literals are stored in the String Pool. Since both s1 and s2 contain the same literal, Java reuses the same object reference. Therefore both variables point to the same memory location and == returns true.",

    hint:
      "String literals are optimized and reused by Java.",

    xp: 30
  },

  {
    id: 34,

    type: "syntax",

    language: "Java",

    difficulty: "Hard",

topic: "General",

    question:
      "Predict both outputs and explain the difference between == and equals().",

    code:
`public class Main {
    public static void main(String[] args) {

        String s1 = "Java";
        String s2 = new String("Java");

        System.out.println(s1 == s2);
        System.out.println(s1.equals(s2));
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "false true"
  ]
},
    explanation:
      "The == operator compares references. s1 points to a pooled string while s2 points to a newly created object, so == returns false. The equals() method compares the actual text content inside the strings, so it returns true.",

    hint:
      "One compares memory addresses, the other compares contents.",

    xp: 30
  },

  {
    id: 35,

    type: "syntax",

    language: "Java",

    difficulty: "Hard",

topic: "General",

    question:
      "Predict the output and explain why Integer objects behave this way.",

    code:
`public class Main {
    public static void main(String[] args) {

        Integer a = 100;
        Integer b = 100;

        System.out.println(a == b);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "true"
  ]
},

    explanation:
      "Java caches Integer objects in the range -128 to 127. Since both variables contain 100, they reference the same cached Integer object. Therefore == returns true because both references point to the same object.",

    hint:
      "Think about Java's Integer cache.",

    xp: 30
  },

  {
    id: 36,

    type: "syntax",

    language: "Java",

    difficulty: "Hard",

topic: "General",

    question:
      "Predict the output and explain why it differs from Integer value 100.",

    code:
`public class Main {
    public static void main(String[] args) {

        Integer a = 200;
        Integer b = 200;

        System.out.println(a == b);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "false"
  ]
},

    explanation:
      "Java caches Integer objects only in the range -128 to 127. Since 200 is outside this range, two separate Integer objects are created. The == operator compares references, not values, so the result is false.",

    hint:
      "Think about Java's Integer cache.",

    xp: 30
  },

  {
    id: 37,

    type: "syntax",

    language: "Java",

    difficulty: "Hard",

topic: "General",

    question:
      "What gets printed when a return statement exists inside the try block?",

    code:
`public class Main {
    public static void main(String[] args) {

        try {
            System.out.println("Try");
            return;
        }
        finally {
            System.out.println("Finally");
        }
    }
}`,

    validation: {
  type: "tokens",
  requiredTokens: [
    "Try",
    "Finally"
  ]
},

    explanation:
      "The finally block executes even if a return statement is encountered in the try block. Java executes the finally block before the method actually returns.",

    hint:
      "finally executes before method termination.",

    xp: 30
  },

  {
    id: 38,

    type: "syntax",

    language: "Java",

    difficulty: "Hard",

topic: "General",

    question:
      "Predict the output of the following program.",

    code:
`public class Main {

    static int test() {
        try {
            return 10;
        }
        finally {
            return 20;
        }
    }

    public static void main(String[] args) {
        System.out.println(test());
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "20"
  ]
},

    explanation:
      "Although the try block returns 10, the finally block also contains a return statement. A return inside finally overrides any earlier return value, so the method ultimately returns 20.",

    hint:
      "The finally block gets the final say.",

    xp: 30
  },

  {
    id: 39,

    type: "syntax",

    language: "Java",

    difficulty: "Hard",

topic: "General",

    question:
      "Predict the output and explain why changing b also affects a.",

    code:
`public class Main {
    public static void main(String[] args) {

        int[] a = {1,2,3};
        int[] b = a;

        b[0] = 100;

        System.out.println(a[0]);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "100"
  ]
},

    explanation:
      "Arrays are reference types. The assignment b = a does not create a new array. Instead, both variables point to the same array object in memory. Therefore changing b[0] also changes a[0].",

    hint:
      "Only one array object exists.",

    xp: 30
  },

  {
    id: 40,

    type: "syntax",

    language: "Java",

    difficulty: "Hard",

topic: "General",

    question:
      "Which overloaded method executes and why?",

    code:
`public class Main {

    static void show(int x) {
        System.out.println("int");
    }

    static void show(double x) {
        System.out.println("double");
    }

    public static void main(String[] args) {
        show(5);
    }
}`,

    validation: {
  type: "includes",
  acceptedAnswers: [
    "int"
  ]
},

    explanation:
      "The literal 5 is of type int. During method overloading resolution, Java chooses the most specific matching method. Since show(int) is an exact match, it is selected instead of show(double).",

    hint:
      "Java prefers exact matches over type promotion.",

    xp: 30
  },

  {
  id: 41,
  type: "syntax",
  language: "Java",
  difficulty: "Easy",
  topic: "Variables",

  question: "What will be the output of the following code snippet?",

  code:
`public class Main {
    public static void main(String[] args) {
        int marks = 95;
        System.out.print(marks);
    }
}`,

  validation: {
  type: "includes",
  acceptedAnswers: [
    "95"
  ]
},

  explanation:
    "The variable marks stores 95 and is printed.",

  hint:
    "Look at the value assigned to marks.",

  xp: 10
},

{
  id: 42,
  type: "syntax",
  language: "Java",
  difficulty: "Medium",
  topic: "Arrays",

  question: "What will be the output of the following code snippet?",

  code:
`public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30};
        System.out.print(arr[1]);
    }
}`,

  validation: {
  type: "includes",
  acceptedAnswers: [
    "20"
  ]
},

  explanation:
    "Array indexing starts from 0. arr[1] refers to the second element.",

  hint:
    "Arrays use zero-based indexing.",

  xp: 20
},

{
  id: 43,
  type: "syntax",
  language: "Java",
  difficulty: "Hard",
  topic: "Objects",

  question: "What will be the output of the following code snippet?",

  code:
`class Student {
    String name = "Rahul";
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        System.out.print(s.name);
    }
}`,

  validation: {
  type: "includes",
  acceptedAnswers: [
    "Rahul"
  ]
},

  explanation:
    "An object of Student is created and its name field is printed.",

  hint:
    "Access the variable using the object.",

  xp: 30
},

{
  id: 44,
  type: "mcq",
  language: "Java",
  difficulty: "Easy",
  topic: "Inheritance",

  question: "Which keyword is used for inheritance in Java?",

  code: "class name _______ ParentClass { }",

  options: [
    "inherit",
    "implements",
    "extends",
    "super"
  ],

  correctAnswer: "extends",

  explanation:
    "The extends keyword is used to inherit from another class.",

  hint:
    "Used when creating a child class from a parent class.",

  xp: 10
},

{
  id: 45,
  type: "mcq",
  language: "Java",
  difficulty: "Medium",
  topic: "Loops",

  question: "What will be the output of the following code snippet?",

  code:
`public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for(int i = 1; i <= 3; i++) {
            sum += i;
        }
        System.out.print(sum);
    }
}`,

  options: [
    "3",
    "5",
    "6",
    "9"
  ],

  correctAnswer: "6",

  explanation:
    "The loop adds 1 + 2 + 3, resulting in 6.",

  hint:
    "Track the value of sum after each iteration.",

  xp: 20
},

{
  id: 46,
  type: "mcq",
  language: "Java",
  difficulty: "Hard",
  topic: "Inheritance",

  question: "What will be the output of the following code snippet?",

  code:
`class Parent {
    Parent() {
        System.out.print("P ");
    }
}

class Child extends Parent {
    Child() {
        System.out.print("C ");
    }
}

public class Main {
    public static void main(String[] args) {
        Child obj = new Child();
    }
}`,

  options: [
    "C P",
    "P C",
    "P",
    "C"
  ],

  correctAnswer: "P C",

  explanation:
    "The parent constructor executes before the child constructor.",

  hint:
    "Constructor execution follows the inheritance hierarchy.",

  xp: 30
}

];