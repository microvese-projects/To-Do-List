import "./style.css";

const tasks = [
  {
    description: "Take out trash.",
    completed: false,
    index: 0,
  },
  {
    description: "Cook lunch.",
    completed: false,
    index: 1,
  },
  {
    description: "Clean the house.",
    completed: false,
    index: 2,
  },
  {
    description: "Submit the project.",
    completed: false,
    index: 3,
  },
]

function displayTasks() {
  console.log("called")
  tasks.forEach(({
    description, completed, index,
  }) => {
    const ul = document.createElement('li');
    ul.className = 'to-do-item';
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const describe = document.createElement('p');
    describe.textContent = description;
    const more = document.createElement('div');
    const box = document.createElement('div');
    box.className = 'box';
    more.appendChild(box);
    ul.appendChild(checkbox);
    ul.appendChild(describe);
    ul.appendChild(more);

    document.querySelector('#to-dos').appendChild(ul)
  })
}

displayTasks()