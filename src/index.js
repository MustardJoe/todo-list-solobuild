import htmlToDOM from './html-to-dom.js';
import todos from './todo-data.js';
import template from './todo-html.js';

const todoList = document.getElementById('todo-list');

todos.forEach((todo) => {
    const html = template(todo);
    const dom = htmlToDOM(html);

    todoList.appendChild(dom);

});