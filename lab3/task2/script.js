'use strict';

const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');

const demoTasks = [
  { text: 'First item', done: true },
  { text: 'Second item', done: false },
  { text: 'Third item', done: false }
];

demoTasks.forEach(task => createItem(task.text, task.done));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.trim() === '') return;
  createItem(input.value, false);
  input.value = '';
});

function createItem(text, completed) {
  const li = document.createElement('li');
  li.className = 'item';
  if (completed) li.classList.add('completed');

  const left = document.createElement('div');
  left.className = 'left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = completed;

  const span = document.createElement('span');
  span.textContent = text;

  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed', checkbox.checked);
  });

  const del = document.createElement('button');
  del.className = 'delete';
  del.innerHTML = '🗑';
  del.addEventListener('click', () => li.remove());

  left.appendChild(checkbox);
  left.appendChild(span);

  li.appendChild(left);
  li.appendChild(del);

  list.appendChild(li);
}
