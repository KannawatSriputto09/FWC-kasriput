document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('ft_list');
    const newBtn = document.getElementById('new-btn');
    const COOKIE_NAME = 'ft_todos';

    // ---- Cookie helpers ----

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
    };

    const getCookie = (name) => {
        const cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();

            if (cookie.startsWith(name + '=')) {
                return decodeURIComponent(cookie.substring(name.length + 1));
            }
        }

        return null;
    };

    // ---- Todo helpers ----

    const getTodosFromDOM = () => {
        const items = list.querySelectorAll('.todo-item');
        const todos = [];

        items.forEach((item) => {
            todos.push(item.textContent);
        });

        return todos;
    };

    const saveTodos = () => {
        const todos = getTodosFromDOM();
        setCookie(COOKIE_NAME, JSON.stringify(todos), 365);
    };

    const createTodoElement = (text) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-item');
        todoDiv.textContent = text;

        todoDiv.addEventListener('click', () => {
            const confirmed = confirm('Remove this to-do item?');

            if (confirmed) {
                todoDiv.remove();
                saveTodos();
            }
        });

        return todoDiv;
    };

    const addTodo = (text) => {
        const todoDiv = createTodoElement(text);
        // New TO DO always goes on top of the list
        list.insertBefore(todoDiv, list.firstChild);
        saveTodos();
    };

    const loadTodos = () => {
        const cookieValue = getCookie(COOKIE_NAME);

        if (!cookieValue) {
            return;
        }

        const todos = JSON.parse(cookieValue);

        todos.forEach((text) => {
            const todoDiv = createTodoElement(text);
            list.appendChild(todoDiv);
        });
    };

    // ---- Events ----

    newBtn.addEventListener('click', () => {
        const text = prompt('New TO DO:');

        if (text !== null && text.trim() !== '') {
            addTodo(text.trim());
        }
    });

    // ---- Init ----

    loadTodos();
});