const menuBurger = document.querySelector(".menu_line")
const menu = document.querySelector(".menu__list")
const lang = document.querySelector(".caption__language")
const menuItem = document.querySelectorAll(".menu__item")

let i = 0

function onMenu() {
    menu.classList.toggle("_active")
    lang.classList.toggle("_active")
    menuBurger.classList.toggle("_active")
    i++
    if (i % 2 == 0)
        document.querySelector("body").style.overflow = "auto"
    else
        document.querySelector("body").style.overflow = "hidden"
}
menuBurger.addEventListener("click", onMenu)
menuItem.forEach(el => {
    el.addEventListener("click", () => {
        document.querySelector("body").style.overflow = "auto"
        menu.classList.remove("_active")
        lang.classList.remove("_active")
        menuBurger.classList.remove("_active")
    })
})


const animItems = document.querySelectorAll('._anim-item')

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active')
            } else {
                animItem.classList.remove('_active')

            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

const rus = {
    home: "Главная",
    about: "Обо мне",
    skills: "Навыки",
    portfolio: "Портфолио",
    contacts: "Контакты",
}
const eng = {
    home: "Home",
    about: "About me",
    skills: "Skills",
    portfolio: "Portfolio",
    contacts: "Contacts",
}


lang.querySelector(".caption__language_1").addEventListener("click", () => {
    lang.querySelector(".caption__language_1").classList.add("black")
    lang.querySelector(".caption__language_2").classList.remove("black")

    document.querySelectorAll('[text]').forEach(el => {
        el.innerHTML = rus[el.getAttribute('text')]
    })
})
lang.querySelector(".caption__language_2").addEventListener("click", () => {
    lang.querySelector(".caption__language_2").classList.add("black")
    lang.querySelector(".caption__language_1").classList.remove("black")

    document.querySelectorAll('[text]').forEach(el => {
        el.innerHTML = eng[el.getAttribute('text')]
    })
})