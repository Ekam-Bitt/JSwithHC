let myPercentage = function(currentMarks, totalMarks) {
    let percent = (currentMarks/totalMarks)*100
    return percent
}

let myGrade = function(percent){
    let grade = ''
    if (percent >= 90) {
        grade = 'A'
    } else if (percent >= 80) {
        grade = 'B'
    } else if (percent >= 70) {
        grade = 'C'
    } else if (percent >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}

let currentMarks = 65
const totalMarks = 80

const percent = myPercentage(currentMarks, totalMarks)
const grade = myGrade(percent)

console.log(`You got ${currentMarks} marks out of ${totalMarks}`)
console.log(`Your percentage is ${percent} and grade is ${grade}`)