class Task {
    constructor() {
      this.title = `Изучить классы`
      console.log(`Создание задачи`);
    }
}

let objectTask = new Task();

console.log(typeof objectTask);
console.log(objectTask.title);
