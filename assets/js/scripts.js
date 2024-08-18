document.addEventListener('DOMContentLoaded', function () {
    const profilePhoto = document.querySelector('.profile-photo');
    const breakpoint = window.matchMedia('(max-width: 1024px)');

    function handleScroll() {
        if (breakpoint.matches) {
            if (window.scrollY > 95) {
                profilePhoto.classList.add('blurred');
            } else {
                profilePhoto.classList.remove('blurred');
            }
        } else {
            profilePhoto.classList.remove('blurred');
        }
    }

    function handleResize() {
        handleScroll();
    }

    function initCarousel() {
        const carouselContainer = document.querySelector('.carousel-container');
        const carouselItems = document.querySelectorAll('.carousel-item');
        const totalItems = carouselItems.length;
        let carouselIndex = 0;

        setInterval(() => {
            carouselIndex = (carouselIndex + 1) % totalItems;
            const offset = -carouselIndex * 100;
            carouselContainer.style.transform = `translateX(${offset}%)`;
        }, 3000);
    }

    // Executa a verificação de scroll e resize ao carregar a página
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Inicializa o carrossel de feedbacks
    initCarousel();
});

function openWhatsApp() {
    const phoneNumber = '5519981559831'; // Substitua pelo seu número de telefone no formato internacional, sem o +.
    const message = 'Olá, gostaria de agendar um horário.'; // Mensagem padrão, se necessário.
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
}

function downloadPDF(pdfUrl) {
    // Cria um link temporário
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop(); // Usa o nome do arquivo do URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}