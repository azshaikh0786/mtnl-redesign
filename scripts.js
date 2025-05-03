// Banner slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.banner-slider');
    const slides = document.querySelectorAll('.banner-slide');
    const controls = document.querySelectorAll('.banner-controls button');

    let currentSlide = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        controls.forEach(btn => btn.classList.remove('active'));
        if (controls[index]) controls[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    // Initial state
    goToSlide(currentSlide);

    // Auto-slide every 2 seconds
    setInterval(nextSlide, 2000);

    // If manual controls exist
    controls.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentSlide = index;
            goToSlide(currentSlide);
        });
    });
});

// Font size accessibility controls
document.addEventListener('DOMContentLoaded', () => {
    const fontSizeControls = document.querySelectorAll('.font-size-controls a');

    if (fontSizeControls.length > 0) {
        fontSizeControls.forEach(control => {
            control.addEventListener('click', function(e) {
                e.preventDefault();

                let fontSize = 100;
                if (this.textContent === 'A-') {
                    fontSize = 90;
                } else if (this.textContent === 'A+') {
                    fontSize = 110;
                }

                document.body.style.fontSize = `${fontSize}%`;
            });
        });
    }
});

document.querySelectorAll('.news-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active from all tabs
        document.querySelectorAll('.news-tab').forEach(t => t.classList.remove('active'));
        // Hide all content
        document.querySelectorAll('.news-content').forEach(c => c.style.display = 'none');

        // Activate clicked tab
        tab.classList.add('active');

        // Show corresponding content
        const target = tab.getAttribute('data-tab');
        document.getElementById(target).style.display = 'block';
    });
});


