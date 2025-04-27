$(document).ready(function(){
    $('.header').height($(window).height());
    })

document.querySelector('a[href="#contact"]').addEventListener('click', function() {
    const contactSection = document.getElementById('contact');
      
    // Remove class if already there
    contactSection.classList.remove('blink');
    
    // Trigger reflow to restart animation
    void contactSection.offsetWidth;
    
    // Add the blink class
    contactSection.classList.add('blink');
    });
   