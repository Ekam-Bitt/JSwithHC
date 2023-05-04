let myTodos = {
    day: 'Monday',
    assignments: 0,
    assignmentsDone: 0,
}

let addAssignment =function(todos, assign=0){
    todos.assignments = todos.assignments + assign;
}

let addAssignmentDone =function(todos, assign=0){
    todos.assignmentsDone = todos.assignmentsDone + assign;
}

let dayReset = function(todos){
    todos.assignments = 0;
    todos.assignmentsDone = 0;
}

let daySummary = function(todos){
    let assignmentsLeft = todos.assignments - todos.assignmentsDone;
    return `You have ${assignmentsLeft} assignments left for ${todos.day}`;
}

addAssignment(myTodos, 4);
addAssignmentDone(myTodos, 2);
addAssignment(myTodos, 3);
addAssignmentDone(myTodos, 3);

// console.log(daySummary(myTodos));

console.log(`=================\nTo-Do Application \n=================\nDay: ${myTodos.day} \nTotal Assignments: ${myTodos.assignments} \nAssignments Done: ${myTodos.assignmentsDone} \n======================================= \n${daySummary(myTodos)} \n=======================================`);