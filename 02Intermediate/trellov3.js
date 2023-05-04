let myTodos = {
    day: 'Monday',
    totalAssignments: 0,
    completedAssignments: 0,

    addTotalAssignments: function(num){
        this.totalAssignments += num;
    },

    addcompletedAssignments: function(num){
        this.completedAssignments += num;
    },

    summary: function(){
        return `You have ${this.totalAssignments} assignments today !`;
    },

}

myTodos.addTotalAssignments(4);
console.log(myTodos.summary());