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
    document.querySelector('.hamburger').classList.add('fix-burger');
  } else {
    document.querySelector('.hamburger').classList.remove('fix-burger');
  }
}
