// Banner slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.banner-slide');
    const controls = document.querySelectorAll('.banner-controls button');
    const slider = document.querySelector('.banner-slider');
    const prevBtn = document.querySelector('.banner-prev');
    const nextBtn = document.querySelector('.banner-next');

    let currentSlide = 0;

    function goToSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        currentSlide = index;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update active control
        controls.forEach((control, i) => {
            control.classList.toggle('active', i === currentSlide);
        });
    }

    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });

    controls.forEach((control, index) => {
        control.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Auto-play (optional)
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);

    // Initial state
    goToSlide(0);
});

// Font size accessibility controls
document.addEventListener('DOMContentLoaded', () => {
    const fontSizeControls = document.querySelectorAll('.font-size-controls a');

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
});
