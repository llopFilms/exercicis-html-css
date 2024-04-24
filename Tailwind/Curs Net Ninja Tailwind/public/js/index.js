console.log("index.js carregat");

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
