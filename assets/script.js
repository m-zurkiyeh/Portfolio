let i = 0;
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let darkmode = localStorage.getItem("dark-mode");

const themeSwitch = document.getElementById("theme-switch");
const submitBtn = document.getElementById('submit-button');
const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode","active");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode","null");
}

if(darkmode==="active") enableDarkMode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("dark-mode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/**
 * A function that calls the typingAnimation() method to after a certain period of time to induce a delay 
 * @param {[string]} id [The id located in a certain tag]
 * @param {[string]} text [the literal string value to implement the animation on]
 * @param {[int]} speed [The speed in which the animation will be run at]
 * @returns {} [void]
 */
function beginTypingAnimation(id, text, speed = 50) {
    setTimeout(function () {
        typingAnimation(id, text);
    }, speed);
}


/**
 * Creates a typing animation with the provided string value
 * @param {[string]} id [The id located in a certain tag]
 * @param {[string]} text [the literal string value to implement the animation on]
 * @param {[int]} speed [The speed in which the animation will be run at]
 * @returns {} [void]
 */
function typingAnimation(id, text, speed = 50) {
    var nameElement = document.getElementById(id);
    if (i < text.length) {
        if (text[i] === ' ') {
            nameElement.innerText += '\u00A0'; // If the current character is a white space, add it without timeout
        } else {
            nameElement.innerText += text.charAt(i); // Otherwise, proceed with the typing animation
        }

        i++;
        setTimeout(function () {
            typingAnimation(id, text);
        }, speed);

    }
}

document.getElementById('email-form')
 .addEventListener('submit', function(event) {
    event.preventDefault();

   submitBtn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_nujwank';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      submitBtn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      submitBtn.value = 'Send Email';
      console.log(JSON.stringify(err))
      alert(JSON.stringify(err));
    });
});

$('.project-box, .certification-box').click(function(){
    var modalId = $(this).data('modal-id');
    console.log(modalId);
    $(`#modal-container[data-modal-id='${modalId}']`).removeAttr('class').addClass('unfold');
    $("body").addClass('modal-active');
    $("body").addClass("modal-open");
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll="no";
})

$(`#modal-container[data-modal-id]`).click(function(event){
    
    if ($(event.target).closest(".modal-btn").length === 0) {
        $(this).addClass('out');
        $('body').removeClass('modal-active');
        setTimeout(() => {
            document.documentElement.style.overflow = 'scroll';
            document.documentElement.style.overflowX = 'hidden';
            document.body.scroll = "yes";
        },1560);
    }
});
