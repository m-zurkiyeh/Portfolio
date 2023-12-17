let i = 0;

// let dialog = document.querySelector("dialog");
// let modalBtn = document.getElementById("button1")
// let modal = document.querySelector(".modal")
// let closeBtn = document.querySelector(".close-btn")

let javaModal = document.getElementById('modal1');
let pyduinoModal = document.getElementById('modal2');
let loginModal = document.getElementById('modal3');
let openButton1 = document.querySelector('.open-button1');
let openButton2 = document.querySelector('.open-button2');
let openButton3 = document.querySelector('.open-button3');

openButton1.addEventListener('click', () => {
    javaModal.showModal();
    
});
openButton2.addEventListener('click', () => {
    pyduinoModal.showModal();
});
openButton3.addEventListener('click', () => {
    loginModal.showModal();
});


javaModal.addEventListener("click", e => {
    const dialogDimensions = javaModal.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        javaModal.close()
    }
});

pyduinoModal.addEventListener("click", e => {
    const dialogDimensions = pyduinoModal.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        pyduinoModal.close()
    }
});

loginModal.addEventListener("click", e => {
    const dialogDimensions = loginModal.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        loginModal.close()
    }
});

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