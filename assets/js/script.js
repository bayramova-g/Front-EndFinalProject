

window.addEventListener('scroll', function () {

    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);

})


var timeouttimer = setTimeout(showbody, 2000);
var everything = document.getElementById("allcontent");
function showbody() {

    everything.style.display = "block";
};






/* Timers begin */


const counters = document.querySelectorAll('#counter');

counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 200;

        if (c < target) {

            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);

        }

        console.log(increment);
    };
    updateCounter();
});

/* Timers end */