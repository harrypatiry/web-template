window.onload = function() {
    const menubtn = document.querySelector('.menu');
    const links = document.querySelector('.links');
    menubtn.addEventListener('click', function() {
        links.classList.toggle('active');
    })
    let imgs = document.getElementById('imgs');
    let speed = 4;
    window.onscroll = function () {
        let yOffset = window.scrollY;
        imgs.classList.add('fixed')
        imgs.style.top = (yOffset / speed) + "px";
    }
}

