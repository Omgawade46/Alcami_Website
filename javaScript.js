document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchContainer = document.querySelector(".search-container");
    const navLinks = document.querySelector(".nav-links");
    const rightSection = document.querySelector(".right-section");
    const hamburger = document.querySelector(".hamburger");
    const cancelButton = document.querySelector('.cancel-button');

    searchIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        searchContainer.classList.toggle("active");
        navLinks.style.display = searchContainer.classList.contains("active") ? "none" : "flex";
    });

    document.addEventListener("click", function (event) {
        if (!searchContainer.contains(event.target) && !searchIcon.contains(event.target)) {
            searchContainer.classList.remove("active");
            navLinks.style.display = "flex";
        }
    });

 
     hamburger.addEventListener("click", function () {
        

        navLinks.classList.toggle("active");
    });
   
    
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
   

   

});


const images = [
    'asset/packet3.png',
    'asset/packet2.png',
    'asset/brown.png'
];

let currentIndex = 0;
const currentImage = document.getElementById('currentImage');
const thumbnails = document.querySelectorAll('.dot4');

function updateImage() {
    currentImage.src = images[currentIndex];

    // Remove 'active' class from all dots and add it to the current one
    thumbnails.forEach((thumbnail, index) => {
        if (index === currentIndex) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}


document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (event) => {
        currentIndex = parseInt(event.target.getAttribute('data-index'));
        updateImage();
    });
});



function changeColor(selectedRadio) {
   
    document.querySelectorAll('.flavor').forEach(flavor => {
        flavor.classList.remove('selected');
    });

    
    selectedRadio.closest('.flavor').classList.add('selected');
}

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.relative'); 
    const counters = document.querySelectorAll('.counter');
    const speed = 200; 
    let observer;

    const startCounting = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    let count = 0;
                    const inc = target / speed;

                    const updateCount = () => {
                        if (count < target) {
                            count += inc;
                            counter.innerText = Math.ceil(count) + '%';
                            setTimeout(updateCount, 10);
                        } else {
                            counter.innerText = target + '%';
                        }
                    };

                    updateCount();
                });

                observer.unobserve(entry.target); 
            }
        });
    };

    observer = new IntersectionObserver(startCounting, { threshold: 0.3 });

    if (section) {
        observer.observe(section);
    }
});






let index = 0;
        const testimonials = document.querySelectorAll('.testimonial');
        const slider = document.querySelector('.testimonial-slider');
        const totalTestimonials = testimonials.length;
        const visibleTestimonials = 3;

        function updateSlider() {
            slider.style.transform = `translateX(-${index * (100 / visibleTestimonials)}%)`;
        }

        function nextTestimonial() {
            if (index < totalTestimonials - visibleTestimonials) {
                index++;
                updateSlider();
            }
        }

        function prevTestimonial() {
            if (index > 0) {
                index--;
                updateSlider();
            }
        }



        function toggleAccordion(id) {
            const content = document.getElementById(id);
            const icon = content.previousElementSibling.querySelector('i');
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                content.style.display = 'none';
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        }        