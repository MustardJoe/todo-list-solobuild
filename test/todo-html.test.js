const test = QUnit.test;

QUnit.module('todo list data to html');

//WRITE TEMPLATE FUNCTION IN FILE CALLED TODO-TEST
function template(todoItem) {
    const html = `
    <li>
    <input type="checkbox" name="test" value="">${todoItem.task}
    </li>
`
return html;

}

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
    assert.htmlEqual(html, expected)

});

test('test function, finished task', function(assert) {
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
    assert.htmlEqual(html, expected)

});