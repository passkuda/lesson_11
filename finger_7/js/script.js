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