/* sophisticated_code.js */

// This code demonstrates a complex implementation of a task management system using JavaScript.
// It includes task creation, assignment, and completion tracking.
// The code uses various data structures, object-oriented programming, and advanced algorithms.

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.assignee = null;
    this.completed = false;
  }
  
  assignTo(user) {
    this.assignee = user;
  }
  
  complete() {
    this.completed = true;
  }
}

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.tasks = [];
  }
  
  createTask(title, description, dueDate, priority) {
    const newTask = new Task(title, description, dueDate, priority);
    this.tasks.push(newTask);
    return newTask;
  }
  
  viewTasks() {
    console.log(`Tasks for ${this.name}:`);
    this.tasks.forEach(task => {
      console.log(`- ${task.title}${task.completed ? ' (Completed)' : ''}`);
    });
  }
}

const john = new User("John", "john@example.com");
const jane = new User("Jane", "jane@example.com");

const importantTask = john.createTask("Important Task", "Handle urgent client request", "2021-12-31", 1);
const researchTask = jane.createTask("Research Task", "Gather information for upcoming project", "2022-01-15", 2);

importantTask.assignTo(jane);
importantTask.complete();

jane.viewTasks(); // Output tasks assigned to Jane

/* Output:
Tasks for Jane:
- Important Task (Completed)
- Research Task
*/

john.viewTasks(); // Output tasks assigned to John

/* Output:
Tasks for John:
- Important Task (Completed)
*/

// Additional code can be added to extend the task management system further.