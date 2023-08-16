const images = document.querySelectorAll('.image-container img');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

images.forEach(image => {
    image.addEventListener('click', () => {
        const imgClone = image.cloneNode();
        overlay.innerHTML = '';
        overlay.appendChild(imgClone);
        overlay.style.display = 'flex';
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});
