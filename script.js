document.getElementById("paragraph").innerHTML="Lorem Ipsum"

function button() {
    var a=4;
    var b=6;
    document.getElementById("buttoncontent").innerHTML=a*b;
}

function validateForm() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');
    
    let message = '';
    msgBox.classList.remove('error-animate', 'success-animate');

    if (email === '') {
        message = 'Enter an email.';
        msgBox.style.color = 'red';
        msgBox.classList.add('error-animate');
    } else if (pass === '') {
        message = 'Create a password.';
        msgBox.style.color = 'red';
        msgBox.classList.add('error-animate');
    } else if (age === '') {
        message = 'Enter your age.';
        msgBox.style.color = 'red';
        msgBox.classList.add('error-animate');
    } else {
        message = 'Thanks for creating an account on GitHub 👍';
        msgBox.style.color = 'green';
    }

    msgBox.innerText = message;
}