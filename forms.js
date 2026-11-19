'use strict';

const form = document.querySelector('.followUs__form');
const nameInput = form.querySelector('.followUs__input_name');
const emailInput = form.querySelector('.followUs__input_email');
const messageInput = form.querySelector('.followUs__textarea');

// Создаём контейнер для результата и вставляем после формы
const resultContainer = document.createElement('div');
resultContainer.className = 'followUs__result';
form.after(resultContainer);

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Простая валидация
    if (!name || !email || !message) {
        resultContainer.textContent = 'Пожалуйста, заполните все поля.';
        return;
    }

    console.log('ЗАРЕГИСТРИРОВАН НОВЫЙ ПОЛЬЗОВАТЕЛЬ!');
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Сообщение:', message);

    // Очищаем контейнер и выводим данные безопасно (через textContent)
    resultContainer.innerHTML = '';

    const data = [
        ['Имя', name],
        ['Email', email],
        ['Сообщение', message],
    ];

    data.forEach(([label, value]) => {
        const p = document.createElement('p');
        p.textContent = `${label}: ${value}`;
        resultContainer.append(p);
    });

    form.reset();
});