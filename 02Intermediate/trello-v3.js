let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(meet=0){
        this.meetings =  this.meetings + meet;
    },
    meetsDone: function(meet=0){
        this.meetDone = this.meetDone + meet;
    },
    resetDay: function(){
        this.meetings = 0;
        this.meetDone = 0;
    },
    getSummaryOfDay: function(){
        let meetLeft = this.meetings - this.meetDone;
        return `Total meets: ${this.meetings}\nTotal meets done: ${this.meetDone}\nYou have ${meetLeft + ' ' +((meetLeft===1)?'meeting':'meetings')} left for today!`
    },
}

myTodos.addMeeting(4);
myTodos.addMeeting(2);
myTodos.meetsDone(5);
// myTodos.resetDay();
console.log(myTodos.getSummaryOfDay());