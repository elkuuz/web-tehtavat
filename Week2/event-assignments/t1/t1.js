// array for todo list
const todoList = [
  {id: 1, task: 'Learn HTML', completed: true},
  {id: 2, task: 'Learn CSS', completed: true},
  {id: 3, task: 'Learn JS', completed: false},
  {id: 4, task: 'Learn TypeScript', completed: false},
  {id: 5, task: 'Learn React', completed: false},
];

// DOM elements
const todoContainer = document.getElementById('todoContainer');
const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
const saveItemBtn = document.getElementById('saveItemBtn');
const newItemInput = document.getElementById('newItemInput');

// ------------------
// RENDER LIST
// ------------------
function renderList() {
  todoContainer.innerHTML = '';

  todoList.forEach((item, index) => {
    const li = document.createElement('li');

    // checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.addEventListener('change', () => {
      todoList[index].completed = checkbox.checked;
      console.log(todoList);
    });

    // task text
    const span = document.createElement('span');
    span.textContent = item.task;

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderList();
      console.log(todoList);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoContainer.appendChild(li);
  });
}

// ------------------
// OPEN MODAL
// ------------------
addBtn.addEventListener('click', () => {
  modal.showModal();
});

// ------------------
// SAVE NEW ITEM
// ------------------
saveItemBtn.addEventListener('click', () => {
  const value = newItemInput.value.trim();

  if (value !== '') {
    todoList.push({
      id: Date.now(),
      task: value,
      completed: false,
    });

    console.log(todoList);
    renderList();
  }

  newItemInput.value = '';
  modal.close();
});

// render list on load
renderList();
