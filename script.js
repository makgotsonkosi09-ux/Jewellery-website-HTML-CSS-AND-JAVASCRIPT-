let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slides[slideIndex-1]) {
      slides[slideIndex-1].style.display = "block";
  }
  setTimeout(showSlides, 3000); 
}

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            if (!validateRegistrationForm()) {
                event.preventDefault(); 
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            if (!validateLoginForm()) {
                event.preventDefault(); 
            }
        });
    }
});

function validateRegistrationForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    if (isEmpty(email) || isEmpty(phone) || isEmpty(password)) {
        alert("Please fill in all empty fields.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!validatePhoneNumber(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    return true;
}

function validateLoginForm() {
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;

    if (isEmpty(email) || isEmpty(password)) {
        alert("Please fill in all empty fields.");
        return false;
    }
    
    return true;
}

function isEmpty(str) {
    return str.trim() === '';
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phone) {
    const re = /^\+?[0-9]{10,14}$/;
    return re.test(String(phone));
}
