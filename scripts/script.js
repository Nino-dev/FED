//Hamburger menu
const hamburger = document.querySelector('.hamburger-menu');

// Toggle menu on
hamburger.onclick = () => {
  const nav = document.querySelector('nav');
  nav.classList.add('show-nav');
}

// Toggle menu off with close button
const close = document.querySelector('.close-menu');
close.onclick = () => {
  const nav = document.querySelector('nav');
  nav.classList.remove('show-nav');
}

// Toggle menu off with anchor tag
let listItems = document.querySelectorAll('nav ul li a');
listItems.forEach((item) => {
  item.onclick = () => {
    const nav = document.querySelector('nav');
    nav.classList.remove('show-nav');
  }
})

// Parallax & fixed hamburger menu
const parallaxTxt = document.querySelector('.parallax-txt');

window.onscroll = () => {
  let value = window.scrollY;
  parallaxTxt.style.top = value * 0.2 + 'px';
  if (document.documentElement.scrollTop > 74) {
    document.querySelector('.hamburger-menu').classList.add('fix-burger');
  } else {
    document.querySelector('.hamburger-menu').classList.remove('fix-burger');
  }
}

//Dynamic radiobuttons
const inputText = document.getElementById('inputText');

inputText.onfocus = () => {
let radioButtons = document.getElementsByName('radio');
  radioButtons.forEach((button) => {
    if(button.checked){
      button.checked = false;
    }
  })
}
