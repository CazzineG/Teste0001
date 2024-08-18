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

    function downloadPDF(url, filename) {
        console.log("Iniciando download:", url, filename); // Log para verificação
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    
    function openWhatsApp() {
        console.log("Redirecionando para o WhatsApp"); // Log para verificação
        window.location.href = 'https://wa.me/19999670165';
    }

    // Executa a verificação de scroll e resize ao carregar a página
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Inicializa o carrossel de feedbacks
    initCarousel();
});
