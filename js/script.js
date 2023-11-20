const btn = document.getElementById("menu-btn")
const overlay = document.getElementById("overlay")
const mobileMenu = document.getElementById("mobile-menu")
const counters = document.querySelectorAll(".counter")
let scrollStarted = false


document.addEventListener("scroll", scrollPage)

btn.addEventListener("click", navToggle)

function navToggle() {
    btn.classList.toggle("open")
    overlay.classList.toggle("overlay-show")
    document.body.classList.toggle("stop-scrolling")
    mobileMenu.classList.toggle("mobile-show")
}


//we need to add a flag to notify we have already scrolled
function scrollPage() {
    const scrollPos = window.scrollY

    if (scrollPos > 100 && !scrollStarted) {
        countUp()
        scrollStarted = true
    } else if (scrollPos < 100) {
        reset()
        scrollStarted = false
    }
}

function countUp() {
    counters.forEach((counter) => {
        //although we have already set the counter to 0, here we want to again set it to 0
        counter.innerText = "0"

        const updateCounter = () => {
            //actual number inside the counter which we have set as an attribute
            const target = +counter.getAttribute("data-target")
            //get current counter value
            const c = +counter.innerText

            //create an increment
            const increment = target / 100;
            //if counter is less than the target, add increment
            if (c < target) {
                //Round up and set the counter value
                counter.innerText = `${Math.ceil(c + increment)}`

                setTimeout(updateCounter, 100)
            } else {
                counter.innerText = target
            }

        }


        updateCounter()
    })
}


function reset() {
    counters.forEach((counter) => {
        counter.innerHTML = "0"
    })
}
