const btn = document.querySelector('#menu-btn');
const overlay = document.getElementById('overlay');
const mobileMenue = document.getElementById('mobile-menu');
btn.addEventListener("click", navToggle)
const menu = document.getElementById("mobile-menu")
const counters = document.querySelectorAll(".counter")

let scrollStarted = false

function navToggle() {
    btn.classList.toggle('open')
    overlay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-scrolling')
    menu.classList.toggle('show-menu')
    mobileMenue.classList.toggle('active')

}

document.addEventListener("scroll", scrollPage)


function scrollPage() {
    const scrollPos = window.scrollY
    if (scrollPos > 100 && !scrollStarted) {
        countUp()
        scrollStarted = true
    } else if (scrollPos < 100 && scrollStarted) {
        reset()
        scrollStarted = false
    }
}


function countUp() {
    counters.forEach((counter) => {
        counter.innerText = "0"

        const updateCounter = () => {

            //getting the counter's data-target
            const target = +counter.getAttribute("data-target")

            //Get the current value of the counter
            const c = +counter.innerText

            //create an increment
            const increment = target / 100

            // if counter is less thatn the target
            if (c < target) {
                //round up the counter
                counter.innerText = `${Math.ceil(c + increment)}`

                setTimeout(updateCounter, 75)
            } else {
                counter.innerText = target
            }
        }

        updateCounter()
    })
}


function reset() {
    counters.forEach((counter) => counter.innerHTML = "0")
}

countUp()




