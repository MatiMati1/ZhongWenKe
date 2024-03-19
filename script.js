//blok kodu służący do otwierania i zamykania normalnego menu bocznego
const side_menu = document.querySelector('.side-menu');
const side_menu_toggle_lesson_button = document.querySelector('.side-menu-toggle');
const side_menu_toggle_close_icon = document.querySelector('.side-menu-close-icon');

function side_menu_toggle() {
    side_menu.classList.toggle('side-menu-active');
}

side_menu_toggle_lesson_button.addEventListener('click', side_menu_toggle);
side_menu_toggle_close_icon.addEventListener('click', side_menu_toggle);

//blok kodu do dźwięku
function togglesound(audioFile) {
    const audio = new Audio(audioFile);

    audio.play();
}

//blok kodu do otwierania mobilnego menu
//blok kodu definiujący guziki do otwierania mobilnych menu
const mobile_menu_opener_1 = document.querySelector('.mobile-menu-opening-1');
const mobile_menu_opener_2 = document.querySelector('.mobile-menu-opening-2');
const mobile_menu_opener_3 = document.querySelector('.mobile-menu-opening-3');
const mobile_menu_opener_4 = document.querySelector('.mobile-menu-opening-4');
const mobile_menu_opener_5 = document.querySelector('.mobile-menu-opening-5');
const mobile_menu_opener_6 = document.querySelector('.mobile-menu-opening-6');

//blok kodu definiujący guziki X do zamykania mobilnych menu
const mobile_menu_close_1 = document.querySelector(".mobile-menu-close-icon-1");
const mobile_menu_close_2 = document.querySelector(".mobile-menu-close-icon-2");
const mobile_menu_close_3 = document.querySelector(".mobile-menu-close-icon-3");
const mobile_menu_close_4 = document.querySelector(".mobile-menu-close-icon-4");
const mobile_menu_close_5 = document.querySelector(".mobile-menu-close-icon-5");
const mobile_menu_close_6 = document.querySelector(".mobile-menu-close-icon-6");

//blok kodu definiujący mobilne menu
const mobile_menu_1 = document.querySelector('.mobile-menu-1');
const mobile_menu_2 = document.querySelector('.mobile-menu-2');
const mobile_menu_3 = document.querySelector('.mobile-menu-3');
const mobile_menu_4 = document.querySelector('.mobile-menu-4');
const mobile_menu_5 = document.querySelector('.mobile-menu-5');
const mobile_menu_6 = document.querySelector('.mobile-menu-6');

//event listenery wywołujące funkcje do otwierania menu
mobile_menu_opener_1.addEventListener('click', function() {mobile_menu_toggle(1)});
mobile_menu_close_1.addEventListener('click', function() {mobile_menu_toggle(1)});

mobile_menu_opener_2.addEventListener('click', function() {mobile_menu_toggle(2)});
mobile_menu_close_2.addEventListener('click', function() {mobile_menu_toggle(2)});

mobile_menu_opener_3.addEventListener('click', function() {mobile_menu_toggle(3)});
mobile_menu_close_3.addEventListener('click', function() {mobile_menu_toggle(3)});

mobile_menu_opener_4.addEventListener('click', function() {mobile_menu_toggle(4)});
mobile_menu_close_4.addEventListener('click', function() {mobile_menu_toggle(4)});

mobile_menu_opener_5.addEventListener('click', function() {mobile_menu_toggle(5)});
mobile_menu_close_5.addEventListener('click', function() {mobile_menu_toggle(5)});

mobile_menu_opener_6.addEventListener('click', function() {mobile_menu_toggle(6)});
mobile_menu_close_6.addEventListener('click', function() {mobile_menu_toggle(6)});

function mobile_menu_toggle(x) {
    switch (x) {
        case 1:
            mobile_menu_1.classList.toggle('mobile-lesson-menu-active');
            break;
        case 2:
            mobile_menu_2.classList.toggle('mobile-lesson-menu-active');
            break;
        case 3:
            mobile_menu_3.classList.toggle('mobile-lesson-menu-active');
            break;
        case 4:
            mobile_menu_4.classList.toggle('mobile-lesson-menu-active');
            break;
        case 5:
            mobile_menu_5.classList.toggle('mobile-lesson-menu-active');
            break;
        case 6:
            mobile_menu_6.classList.toggle('mobile-lesson-menu-active');
            break;
        default:
            console.log("default");
            break;
    }
}