const myTodos = [
  {
    title: "Wake Up",
    isDone: true,
  },
  {
    title: "Bath",
    isDone: true,
  },
  {
    title: "Attend Classes",
    isDone: true,
  },
  {
    title: "Exercise",
    isDone: false,
  },
  {
    title: "Work on Projects",
    isDone: false,
  },
  {
    title: "Catch up on Socials",
    isDone: false,
  },
];

const notDone = myTodos.filter((todo) => todo.isDone === false);
console.log("Things on ur Todo which are not done yet :")
notDone.forEach(element => {
    console.log(element.title);
});