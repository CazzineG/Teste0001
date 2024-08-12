document.addEventListener('DOMContentLoaded', () => {
    // Função para controlar o carrossel
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= carouselItems.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = carouselItems.length - 1;
        } else {
            currentIndex = index;
        }
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Avançar slides a cada 3 segundos
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);

    // Funcionalidade dos botões
    document.querySelectorAll('.action-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const target = event.target;
            const section = target.closest('.option');

            if (section) {
                if (section.classList.contains('catalogo')) {
                    window.location.href = '/catalogo.pdf'; // Substitua pelo link real do PDF
                } else if (section.classList.contains('agendamento')) {
                    window.open('https://api.whatsapp.com/send?phone=1234567890', '_blank'); // Substitua pelo link real do WhatsApp
                }
            }
        });
    });

    // Efeito de desfoque e escala na foto
    const profilePhoto = document.querySelector('.profile-photo');
    let blurStartPoint = 95;

    function handleScroll() {
        const scrollY = window.scrollY;
        const scale = Math.max(1 - scrollY / 500, 0.8); // Ajusta o fator de escala conforme necessário

        if (scrollY > blurStartPoint) {
            profilePhoto.classList.add('blurred');
        } else {
            profilePhoto.classList.remove('blurred');
        }

        profilePhoto.style.transform = `scale(${scale})`;
    }

    window.addEventListener('scroll', handleScroll);
});
