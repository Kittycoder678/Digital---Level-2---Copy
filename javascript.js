function openMenu() {
    menuBar.style.display = 'initial';
}
function reset() {
    menuBox.style.display = 'initial';
    menuBar.style.display = 'none';
}
menuBox.onmouseover = openMenu;
menuBar.onmouseleave = reset;
