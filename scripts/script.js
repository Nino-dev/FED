window.onscroll = () => {
  if (document.documentElement.scrollTop > 74) {
    document.querySelector('.hamburger').className = "hamburger fix-burger";
  } else {
    document.querySelector('.hamburger').className = "hamburger";
  }
}
