// scripts.js

function downloadPDF(url, filename) {
    // Cria um link temporário para download
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function openWhatsApp(url) {
    window.location.href = url;
}
function openWhatsApp() {
    // Substitua pelo número real do WhatsApp
    window.location.href = 'https://wa.me/19999670165'; 
}

// Adiciona eventos de clique às divs com data-pdf e data-whatsapp
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        const pdfUrl = option.getAttribute('data-pdf');
        const whatsappUrl = option.getAttribute('data-whatsapp');

        if (pdfUrl) {
            downloadPDF(pdfUrl, pdfUrl.split('/').pop());
        } else if (whatsappUrl) {
            openWhatsApp(whatsappUrl);
        }
    });
});

// Carrossel automático com imagens
let currentCarouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
        item.style.transform = `translateX(-${index * 100}%)`;
    });
}

function nextCarouselItem() {
    currentCarouselIndex = (currentCarouselIndex + 1) % carouselItems.length;
    showCarouselItem(currentCarouselIndex);
}

const carousel = document.querySelector('.carousel');
carousel.style.transition = 'transform 0.5s ease-in-out';

setInterval(nextCarouselItem, 3000); // Troca a cada 3 segundos

// Efeito de desfoque na foto
const profilePhoto = document.querySelector('.profile-photo');
const blurStartPoint = 95;
const shrinkStartPoint = 0;

function handleScroll() {
    if (window.scrollY > blurStartPoint) {
        profilePhoto.classList.add('blurred');
    } else {
        profilePhoto.classList.remove('blurred');
    }

    if (window.scrollY > shrinkStartPoint) {
        profilePhoto.classList.add('shrink');
    } else {
        profilePhoto.classList.remove('shrink');
    }
}

window.addEventListener('scroll', handleScroll);
