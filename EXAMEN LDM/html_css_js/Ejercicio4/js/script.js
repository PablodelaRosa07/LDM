const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus'); // NO USAR CONST, USAR VAR
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text'); // NO USAR CONST, USAR VAR
const amount = document.getElementById('amount');

// Intentar cargar datos desde LocalStorage o empezar con array vacío
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// 1. Agregar Transacción
function addTransaction(e) {
    e.preventDefault();

    const transaction = {
        id: Math.floor(Math.random() * 100000000), // ID único
        text: text.value,
        amount: +amount.value // Convertir a número con el símbolo +
    };

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();
    updateLocalStorage();

    text.value = '';
    amount.value = '';
}

// 2. Insertar transacción en la lista (DOM)
function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');

    // Añadir clase basada en el valor
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
        ${transaction.text} <span>${sign}$${Math.abs(transaction.amount).toFixed(2)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `;

    list.appendChild(item);
}

// 3. Actualizar balance, ingresos y gastos
function updateValues() {
    const amounts = transactions.map(t => t.amount); // NO USAR CONST, USAR VAR

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    balance.innerText = `$${total}`;
    money_plus.innerText = `+$${income}`;
    money_minus.innerText = `-$${expense}`;
}

// 4. Eliminar transacción
function removeTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateLocalStorage();
    init(); // Reiniciar la vista
}

// 5. Actualizar LocalStorage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Iniciar aplicación
function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();
form.addEventListener('submit', addTransaction);