let i = 0;

// let dialog = document.querySelector("dialog");
// let modalBtn = document.getElementById("button1")
// let modal = document.querySelector(".modal")
// let closeBtn = document.querySelector(".close-btn")


let buttonArr = document.querySelectorAll('.open-button');
let modals = document.querySelectorAll('dialog');

// The following for loop initializes the button clicks to display their respective modals as well as handle modals closing 
for (let i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener("click", function () {
        modals[i].showModal();
    });

    modals[i].addEventListener("click", e => {
        const dialogDimensions = modals[i].getBoundingClientRect()
        if (e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom) {
            modals[i].close();
        }
    });
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