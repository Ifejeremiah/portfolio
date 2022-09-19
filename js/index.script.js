const cards = document.querySelectorAll('.section-b .con-card .card')

cards.forEach(x => { onMouseIn(x.querySelector('a img')); onMouseOut(x.querySelector('a img')) })

function onMouseIn(elem) {
  elem.addEventListener('mouseover', () => addEffect(elem))
}

function onMouseOut(elem) {
  elem.addEventListener('mouseout', () => removeEffect(elem))
}

function addEffect(elem) {
  elem.classList.add('img-darken');
}

function removeEffect(elem) {
  elem.classList.remove('img-darken');
}
