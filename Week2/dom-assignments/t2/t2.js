// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// get the ul element
const ul = document.querySelector('ul');

// loop through each todo item
todoList.forEach(todo => {
  // create <li>
  const li = document.createElement('li');

  // create <input type="checkbox">
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `todo-${todo.id}`;
  checkbox.checked = todo.completed; // true/false automatically handled

  // create <label>
  const label = document.createElement('label');
  label.htmlFor = `todo-${todo.id}`;
  label.textContent = todo.task;

  // append input + label to li
  li.appendChild(checkbox);
  li.appendChild(label);

  // append li to the ul
  ul.appendChild(li);
});
