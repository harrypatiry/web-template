window.onload = function() {
    const menubtn = document.querySelector('.menu');
    const links = document.querySelector('.links');
    menubtn.addEventListener('click', function() {
        links.classList.toggle('active');
    })
}