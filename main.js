function hamburg() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// animations 
AOS.init({ offset: 0 });

// Typewriter Effect

const texts = [
    "WEB DEVELOPER",
    "GRAPHIC DESIGNER"
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50)
    }
    else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter


document.querySelectorAll('a[data-scroll]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-scroll');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// form 
const scriptURL = 'https://script.google.com/macros/s/AKfycbz0kCAIBat1gmFlIkGWKp1orH0tASoeQAbO01NISy79RQ0FEfwRQC7WKc-Le_Z8sONz/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Message sent successfully'
            setTimeout(function () {
                msg.innerHTML = ''
            }, 9000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


// validity 
const emailInput = document.querySelector('input[name="Email"]');
const emailError = document.getElementById('emailError');

emailInput.addEventListener('input', function() {
  if (emailInput.validity.typeMismatch) {
    emailError.style.display = 'inline';
  } else {
    emailError.style.display = 'none';
  }
});
