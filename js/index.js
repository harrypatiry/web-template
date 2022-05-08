window.onload = function() {
    const mobile = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    mobile.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade .5s ease forwards ${index / 4}s`;
            }
        })
    })
    if(window.innerWidth > 900){
        console.log('> 900')
        move();
    } else {
        console.log('< 900');
    }
}

function move() {
    let imgs = document.getElementById('imgs');
    let imgstwo = document.getElementById('imgstwo');
    let speed = 20;
    window.onscroll = function () {
        let yOffset = window.scrollY;
        imgs.style.top = (yOffset / speed) + "px";
        imgs.style.right = (yOffset / speed) + "px";
        imgstwo.style.top = (yOffset / speed) + "px";
        imgstwo.style.left = (yOffset / speed) + "px";
    }
}

window.onresize = () => {
    location.reload();
  }
