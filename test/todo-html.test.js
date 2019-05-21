import template from '../src/todo-html.js';

const test = QUnit.test;

QUnit.module('todo list data to html');

test('test function, incompleted task', function(assert) {
    //arange
    const todo = {
        task: 'feed fish',
        completed: false,
    };
  
    const expected = /*html*/`
        <li>
            <input type="checkbox" name="test" value="">feed fish
        </li>
    `;
    
    const html = template(todo);

    //assert
    assert.htmlEqual(html, expected);

});

test('test function, FINISHED task', function(assert) {
    //arange
    const todo = {
        task: 'eat sharks',
        completed: true,
    };
  
    const expected = /*html*/`
        <li>
            <input type="checkbox" checked="true" name="test" value="">eat sharks
        </li>
    `;
    
    const html = template(todo);

    //assert
    assert.htmlEqual(html, expected);

});