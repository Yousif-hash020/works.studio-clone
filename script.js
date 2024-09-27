const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true, 
});


// Prevent default action of <a> tags with href="#"
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent scrolling to the top
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const yellow = document.getElementById('yellow');
    const video = document.querySelector('#loader video');
    const text = document.querySelector('#loader .text');

    // Prevent scrolling during animation
    document.body.style.overflow = 'hidden';

    // Create a GSAP timeline
    const tl = gsap.timeline({
        onComplete: () => {
            // Allow scrolling after animation
            document.body.style.overflow = '';
            // Remove this line: initLocomotiveScroll();
        }
    });

    // Animation sequence
    tl.to(yellow, {
        top: '-100%',
        duration: 0.5,
        delay: 0.5,
        ease: 'power2.inOut'
    })
    .set(video, { opacity: 1 }, '-=0.2')
    .to(text, {
        opacity: 1,
        ease: 'power2.out'
    }, '-=0.5')
    .to([video, text], {
        opacity: 0,
        duration: 0.5,
        delay: 1, // Reduced from 2 to 1 second
        ease: 'power2.easeInOut'
    })
    .to(loader, {
        opacity: 0,
        ease: 'power2.easeInOut',
        onComplete: () => {
            loader.style.display = 'none';
        }
    });

    // Play video when it's loaded and set playback rate to 2x
   
});





function changeBackground(imageUrl) {
    const page2 = document.querySelector('.page2');
    page2.style.backgroundImage = `url('${imageUrl}')`;
    page2.style.backgroundSize = 'cover';
    page2.style.backgroundPosition = 'center';
    
};

function noBackground(){
    const page2 = document.querySelector('.page2');
    page2.style.backgroundImage = 'none';
};

// Assuming you have multiple h2 elements in .page2
document.querySelectorAll('#my-h2')[0].addEventListener('mousemove', function() {
    changeBackground('./jpg/MIN-1.jpg');
    
});
document.querySelectorAll('#my1-h2')[0].addEventListener('mousemove', function() {
    changeBackground('./Jpg/Home-2.jpg');
    
});
document.querySelectorAll('#my2-h2')[0].addEventListener('mousemove', function() {
    changeBackground('./jpg/virgin music.jpg');
    
});
document.querySelectorAll('#my3-h2')[0].addEventListener('mousemove', function() {
    changeBackground('./jpg/CONVERSE_3_.jpg');
    
});
document.querySelectorAll('#my4-h2')[0].addEventListener('mousemove', function() {
    changeBackground('./jpg/BOLDLY-1.jpg');
    
});




document.querySelectorAll('#my-h2')[0].addEventListener('mouseleave', function() {
    noBackground();
    
});
document.querySelectorAll('#my1-h2')[0].addEventListener('mouseleave', function() {
   noBackground();
    
});
document.querySelectorAll('#my2-h2')[0].addEventListener('mouseleave', function() {
    noBackground();
    
});
document.querySelectorAll('#my3-h2')[0].addEventListener('mouseleave', function() {
    noBackground();
    
});
document.querySelectorAll('#my4-h2')[0].addEventListener('mouseleave', function() {
    noBackground();
    
});



