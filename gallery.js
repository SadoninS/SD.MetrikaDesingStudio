const ACTIVE_SLIDE_CLASSNAME = 'gallery-slide-active';

const slidesNodes = Array.from(document.querySelectorAll('.gallery-slide'));
console.log(slidesNodes);
const prevButtonNode = document.querySelector('.gallery-control-prev');
const nextButtonNode = document.querySelector('.gallery-control-next');
let activeId;

init();

function init() {
    activeId = 0;
    
    prevButtonNode.addEventListener('click', () => {
        setActiveSlideById(getPrevId());
    });
    
    nextButtonNode.addEventListener('click', () => {
        setActiveSlideById(getNextId());
    });
}

function setActiveSlideById(id) {
    const currentId = activeId;
    activeId = id;

    slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME)
    slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME)
}

function getPrevId() {
    return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
    return activeId === (slidesNodes.length - 1) ? 0: activeId + 1;
}
