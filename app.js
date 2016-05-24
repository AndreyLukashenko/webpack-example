let { View, ViewModel } = require('./components/todolist/');

window.addEventListener('load', () => {
    document.body.appendChild(View(new ViewModel()));
})
