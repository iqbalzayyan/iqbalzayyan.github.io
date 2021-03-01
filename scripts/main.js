window.addEventListener('scroll', () => {
    let skillContent = document.querySelector('.skill-content');
    let skillPosition = skillContent.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (skillPosition < screenPosition) {
        skillContent.classList.add('active');
    } else {
        skillContent.classList.remove('active');
    }
})