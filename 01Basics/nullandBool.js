var marks = 15

console.log("Student marks is: " + marks)


// Grade system

var grade = ''

if (marks >= 30) {
    grade = "A"
} else if (marks >= 20) {
    grade = "B"
} else if (marks >= 10) {
    grade = "C"
} else {
    grade = "D"
}

console.log("Grade is: " + grade)

// Pass or Fail

var passOrFail = (marks >= 10)

console.log("Pass/Fail: " + passOrFail)