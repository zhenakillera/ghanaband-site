/* ==== SHOW MENU ==== */

const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show-menu')
    })
  }
}
showMenu('nav-toggle','nav-menu')


/* ==== HIDE MENU ==== */

const navLink = document.querySelectorAll('.nav__link')

// Each click removes show-menu
function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/* ==== SCROLL TO SELECTED SECTION ==== */

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      } else {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
}
window.addEventListener('scroll', scrollActive)


/* ==== CHANGE HEADER'S BG WHEN SCROLLING ==== */
function scrollHeader(){
  const nav = document.getElementById('header')

  // The scroll is greater than 200 viewport height => 
  // add the scroll-header class to the header tag
  if(this.scrollY >= 200) {
    nav.classList.add('scroll-header')
  } else {
    nav.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader)


/* SHOW SCROLL-TO-TOP BUTTON */
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)