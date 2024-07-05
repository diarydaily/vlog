'use strict';

let open = document.getElementsByClassName('open');
let openTriggers = Array.from(open);
const hidden = document.querySelector('.hidden');


openTriggers.forEach(function(open) {
  open.addEventListener('click', toggldisplay);
function toggldisplay() {
  const toggle = document.querySelector('.toggle')
  toggle.classList.toggle('hidden');
}
});

