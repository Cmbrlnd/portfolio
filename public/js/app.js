const splitURL = window.location.href.split('/')
const currentPage = splitURL[3]
const pages = ['', 'about', 'contact']

let result = pages.filter(page => page === currentPage)
    if(result != '') {
        document.getElementById(result).classList.add('active')
    } else {
        document.getElementById('home').classList.add('active')
    }