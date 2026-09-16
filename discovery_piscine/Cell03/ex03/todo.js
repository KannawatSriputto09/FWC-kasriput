var list = document.getElementById('ft_list');
var newBtn = document.getElementById('newbtn');

function saveList() {
    var items = document.getElementsByClassName('todo-item');
    var textArray = [];

    for (var i = 0; i < items.length; i++) {
        textArray.push(items[i].innerHTML);
    }

    var textToSave = JSON.stringify(textArray);
    document.cookie = "ft_todos=" + encodeURIComponent(textToSave);
}

function addTodoToTop(text) {
    var div = document.createElement('div');
    div.className = 'todo-item';
    div.innerHTML = text;

    div.onclick = function () {
        if (confirm('ลบ to-do นี้?')) {
            div.remove();
            saveList();
        }
    };

    list.insertBefore(div, list.firstChild);
}

function loadList() {
    var cookieText = document.cookie;

    if (cookieText.indexOf("ft_todos=") === -1) {
        return;
    }

    var start = cookieText.indexOf("ft_todos=") + "ft_todos=".length;
    var value = cookieText.substring(start).split(";")[0];
    var textArray = JSON.parse(decodeURIComponent(value));

    for (var i = textArray.length - 1; i >= 0; i--) {
        addTodoToTop(textArray[i]);
    }
}

newBtn.onclick = function () {
    var text = prompt('New TO DO:');

    if (text != null && text != '') {
        addTodoToTop(text);
        saveList();
    }
};

loadList();