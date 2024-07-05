'use strict';

const open = document.getElementById('open');
let link = document.getElementsByClassName('link');
let triggers = Array.from(link);
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close')

const btn = document.getElementById('btn')

open.addEventListener('click', () => {
  overlay.classList.add('appear');
  open.classList.add('hidden');
});
triggers.forEach(function(link) {
link.addEventListener('click', function() {
  overlay.classList.remove('appear');
  open.classList.remove('hidden');
});
});
close.addEventListener('click', () => {
  overlay.classList.remove('appear');
  open.classList.remove('hidden');
});