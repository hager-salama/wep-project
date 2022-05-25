const men=document.getElementsByClassName('menu')[0]
const navbarlinks=document.getElementsByClassName('navbar-links')[0]
men.addEventListener('click',()=>{
    navbarlinks.classList.toggle('active')
})
