const POPUP_OPENED_CLASSNAME = 'popup-open';
const BODY_FIXED_CLASSNAME = 'body-fixed';

const bodyNode = document.querySelector('body');
const popupNode = document.querySelector('.js-popup');
const btnOpenNode = document.querySelector('.js-btn');
const popupContentNode = document.querySelector('.js-popup-content')
const btnCloseNode = document.querySelector('.js-popup-close-btn');

btnOpenNode.addEventListener('click', togglePopup);
btnCloseNode.addEventListener('click', togglePopup);

popupNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(popupContentNode)

    if (isClickOutsideContent) {
        togglePopup();
    }
})

function togglePopup() {
    popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}
