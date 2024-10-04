const arrows = document.querySelectorAll(`.arrow`);

const arrowsArr = Array.from(arrows);

function handleArrowClick(e) {
    // debugger;
    if (e.target.className !== `arrow open`) {
        e.target.classList.add(`open`);
    e.target.parentElement.classList.add(`opened`);
    e.target.previousElementSibling.classList.add(`bold`);
    } else {
    e.target.classList.remove(`open`);
    e.target.parentElement.classList.remove(`opened`);
    e.target.previousElementSibling.classList.remove(`bold`);
    }
} 

arrows.forEach(arrow => arrow.addEventListener(`click`, handleArrowClick));
