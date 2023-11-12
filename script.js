const side_menu = document.querySelector('.side-menu');
const side_menu_toggle_lesson_button = document.querySelector('.side-menu-toggle');
const side_menu_toggle_close_icon = document.querySelector('.side-menu-close-icon');

function side_menu_toggle() {
    side_menu.classList.toggle('side-menu-active');
}

side_menu_toggle_lesson_button.addEventListener('click', side_menu_toggle);
side_menu_toggle_close_icon.addEventListener('click', side_menu_toggle); //blok kodu służący do otwierania i zamykania menu bocznego