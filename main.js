function openMenu() {
    document.getElementById('header').classList.remove('mobile-menu-closed')
    document.getElementById('header').classList.add('mobile-menu-opened')

}

function closeMenu() {
    document.getElementById('header').classList.remove('mobile-menu-opened')
    document.getElementById('header').classList.add('mobile-menu-closed')
}



// document.getElementById('open-button').addEventListener