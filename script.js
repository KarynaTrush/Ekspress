// Проверка загрузки скрипта
console.log('Скрипт загружен');

// Функция для переключения темы
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Изменение текста кнопки
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Светлая тема';
    } else {
        themeToggle.textContent = 'Темная тема';
    }
});

// Функция для переключения языка
const languageToggle = document.getElementById('language-toggle');
const navItems = document.querySelectorAll('nav a span');

languageToggle.addEventListener('click', () => {
    const isRussian = languageToggle.textContent === 'RU';

    navItems[0].textContent = isRussian ? 'About Us' : 'О нас';
    navItems[1].textContent = isRussian ? 'Schedule' : 'Расписание';
    navItems[2].textContent = isRussian ? 'Gallery' : 'Галерея';
    navItems[3].textContent = isRussian ? 'Contacts' : 'Контакты';
    navItems[4].textContent = isRussian ? 'More' : 'Еще';

    languageToggle.textContent = isRussian ? 'EN' : 'RU';
});
