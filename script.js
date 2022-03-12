//Search
const inputContainer = document.querySelector('.input-container')
const input = inputContainer.children[0]
const buttonSearch = document.querySelector('.search-button')
const buttonSearchMobile = inputContainer.children[1]

buttonSearch.addEventListener('click', clearInput)
buttonSearchMobile.addEventListener('click', clearInput)

function clearInput(){
    input.value = ""
}


//Menu
const menu = document.querySelector('.menu')
const navList = document.querySelector('.nav-list')
const navLinks = document.querySelectorAll('.nav-list li')

menu.addEventListener('click', handleClick)

function handleClick () {
    navList.classList.toggle('active')
    menu.classList.toggle('active')
    animateLinks()

    if (menu.classList.contains('active') && document.body.offsetWidth <= 600){
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = 'initial'
    }
}

function animateLinks() {
    navLinks.forEach((link, index) => {
        link.style.animation
            ?(link.style.animation = "")
            :(link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 + 0.3}s`)
    })
}


//Theme Switcher
const themeToggle = document.getElementById('checkbox')

if (localStorage.darkModeBlog === 'true'){
    themeSwitch()
    themeToggle.checked = true
}

themeToggle.addEventListener('click', themeSwitch)

console.log(document.body.dark)

function themeSwitch() {
    document.body.classList.toggle('dark')

    if(document.body.classList.contains('dark')){
        localStorage.darkModeBlog = 'true';
    } else {
        localStorage.darkModeBlog = 'false';
    }
}