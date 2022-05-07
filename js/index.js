window.onload = function() {
    const menubtn = document.querySelector('.menu');
    const links = document.querySelector('.links');
    menubtn.addEventListener('click', function() {
        links.classList.toggle('active');
    })
    let imgs = document.getElementById('imgs');
    let imgstwo = document.getElementById('imgstwo');
    let speed = 40;
    window.onscroll = function () {
        let yOffset = window.scrollY;
        imgs.style.top = (yOffset / speed) + "px";
        imgs.style.right = (yOffset / speed) + "px";
        imgstwo.style.top = (yOffset / speed) + "px";
        imgstwo.style.left = (yOffset / speed) + "px";
    }
}

