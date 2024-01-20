let openBtn=document.querySelector ('.open-menu')
let menulist=document.querySelector ('.menu-list')
let closeBtn=document.querySelector ('.close-menu')
// let mainPage=document.querySelector ('.main-page')
// open menu action
openBtn.addEventListener('click', openMenu)

function openMenu(){
    menulist.style.display='block'
    closeBtn.style.display='block'
    openBtn.style.display='none'
    // mainPage.style.display='none'
}

// close menu action 
closeBtn.addEventListener('click', closeMenu)
function closeMenu(){
    menulist.style.display='none'
    closeBtn.style.display='none'
    openBtn.style.display='block'
    // mainPage.style.display='block'
}

