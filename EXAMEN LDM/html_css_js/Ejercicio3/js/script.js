function addTask() {
    const input = document.getElementById('taskInput'); // NO USAR CONST, USAR VAR
    const taskText = input.value;

    if (taskText === '') return; // No agregar vacíos

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText} 
        <span class="delete-btn" onclick="this.parentElement.remove()">X</span>
    `;

    document.getElementById('taskList').appendChild(li);
    input.value = ''; // Limpiar el input
}