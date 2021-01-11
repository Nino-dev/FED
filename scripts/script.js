const inputText = document.getElementById('inputText');

inputText.addEventListener('focus', () => {
let radioButtons = document.getElementsByName('radio');
  for(let i = 0; i < radioButtons.length; i++) {
    if(radioButtons[i].checked){
      radioButtons[i].checked = false;
    }
  }
});

window.onscroll = () => {
  if (document.documentElement.scrollTop > 74) {
    document.querySelector('.hamburger-menu').classList.add('fix-burger');
  } else {
    document.querySelector('.hamburger-menu').classList.remove('fix-burger');
  }
}

const hamburger = document.querySelector('.hamburger-menu');

// Toggle menu on
hamburger.onclick = () => {
  const nav = document.querySelector('nav');
  nav.classList.add('show-nav');
}

// Toggle menu off
const close = document.querySelector('.close-menu');
close.onclick = () => {
  const nav = document.querySelector('nav');
  nav.classList.remove('show-nav');
}
