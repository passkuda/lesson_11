function moveBlock(event) {
    var block = document.querySelector('.main__pozition');
    var testBlock = document.querySelector('.main__test');
    
    var blockRect = block.getBoundingClientRect();
    var testRect = testBlock.getBoundingClientRect();
    
    var mouseX = event.clientX - testRect.left - blockRect.width / 2;
    var mouseY = event.clientY - testRect.top - blockRect.height / 2;

    // Проверка границ блока
    mouseX = Math.max(0, Math.min(mouseX, testRect.width - blockRect.width));
    mouseY = Math.max(0, Math.min(mouseY, testRect.height - blockRect.height));

    block.style.left = mouseX + 'px';
    block.style.top = mouseY + 'px';
}




let isReversed = false;

function handleClick(event) {
    // Проверяем, что нажата левая кнопка мыши
    if (event.button === 0) {
        const pozitionElement = document.querySelector('.main__pozition');
        
        // Переключаем флаг isReversed
        isReversed = !isReversed;

        // Применяем реверс и зеркальное отображение
        if (isReversed) {
            pozitionElement.style.transform = 'scaleX(-1)';
        } else {
            pozitionElement.style.transform = 'none';
        }
    }
}



// --------------------------------------------

function createCookie() {
    const testBlock = document.querySelector('.main__test');
    const cookieCount = document.querySelectorAll('.cookie').length;

    if (cookieCount < 5) {
        const cookie = document.createElement('div');
        cookie.classList.add('cookie');

        const testRect = testBlock.getBoundingClientRect();

        // Устанавливаем случайные координаты точки
        const randomX = Math.random() * (testRect.width - 20); // 20 - ширина точки
        const randomY = Math.random() * (testRect.height - 20); // 20 - высота точки

        cookie.style.left = randomX + 'px';
        cookie.style.top = randomY + 'px';

        testBlock.appendChild(cookie);
    }
}

function checkCollisions() {
    const cookies = document.querySelectorAll('.cookie');
    const pacmanMouth = document.querySelector('.main__rot');

    cookies.forEach((cookie) => {
        const cookieRect = cookie.getBoundingClientRect();
        const pacmanRect = pacmanMouth.getBoundingClientRect();

        if (
            pacmanRect.left < cookieRect.right &&
            pacmanRect.right > cookieRect.left &&
            pacmanRect.top < cookieRect.bottom &&
            pacmanRect.bottom > cookieRect.top
        ) {
            cookie.remove();
        }
    });
}

// Запускаем функцию создания точек и проверки столкновений
setInterval(() => {
    createCookie();
    checkCollisions();
}, 1000);
