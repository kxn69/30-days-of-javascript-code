const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const telephone = document.getElementById('telephone');
const yourBio = document.getElementById('bio'); 
const submit = document.getElementById('submit');

// regex
const nameRegex = /^[A-Za-z]{3,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^[a-zA-Z0-9@_-]{6,20}$/;
const phoneRegex = /^(?:\d{11}|(?:\d{3}-){2}\d{4})$/;
const bioRegex = /^[a-z]{8,50}[-_]*$/;

// check if firstName passes the regex
firstName.addEventListener('blur', () => {
    if (!nameRegex.test(firstName.value)) {
        const firstNameWarning = document.getElementById('firstNameWarning');
        firstNameWarning.classList.add('warn');
        firstNameWarning.innerHTML = 'First name must be alphanumeric and contain 3 - 16 characters';
        } else {
        firstNameWarning.innerHTML = '';
        firstName.classList.add('correct');
        }
})

//check if lastName passes the regex
lastName.addEventListener('blur', () => {
    if (!nameRegex.test(lastName.value)) {
        const lastNameWarning = document.getElementById('lastNameWarning');
        lastNameWarning.classList.add('warn');
        lastNameWarning.innerHTML = 'Last name must be alphanumeric and contain 3 - 16 characters';
      } else {
        lastNameWarning.innerHTML = '';
        lastName.classList.add('correct')
      }
})

 // check email passes regex
email.addEventListener('blur', () => {
    if (!emailRegex.test(email.value)) {
        const emailWarning = document.getElementById('emailWarning');
        emailWarning.classList.add('warn');
        emailWarning.innerHTML = 'Email must be a valid address, e.g. example@example.com';
    } else {
        emailWarning.innerHTML = '';
        email.classList.add('correct')
    }
})

// check if password passes regex
password.addEventListener('blur', () => {
    if (!passwordRegex.test(password.value)) {
        const passwordWarning = document.getElementById('passwordWarning');
        passwordWarning.classList.add('warn');
        passwordWarning.innerHTML = 'Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characters';
    } else {
        passwordWarning.innerHTML = '';
        password.classList.add('correct')
    }
})

// check if telephone passes regex
telephone.addEventListener('blur', () => {
    if (!phoneRegex.test(telephone.value)) {
        const telephoneWarning = document.getElementById('telephoneWarning');
        telephoneWarning.classList.add('warn');
        telephoneWarning.innerHTML = 'A valid Telephone number(11 digits and 333-333-3334)';
    } else {
        telephoneWarning.innerHTML = '';
        telephone.classList.add('correct')
    }
})

// check if bio passes regex
yourBio.addEventListener('blur', () => {
        if (!bioRegex.test(yourBio.value)) {
            const bioWarning = document.getElementById('bioWarning');
            bioWarning.classList.add('warn');
            bioWarning.innerHTML = 'Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters';
        } else {
            bioWarning.innerHTML = '';
            yourBio.classList.add('correct')
        }
        updateSubmitButton();
})

form.addEventListener('submit', (e) => {
    if (firstNameWarning.innerHTML.length > 0 ||
        lastNameWarning.innerHTML.length > 0 || 
        emailWarning.innerHTML.length > 0 || 
        passwordWarning.innerHTML.length > 0 || 
        telephoneWarning.innerHTML.length > 0 || 
        bioWarning.innerHTML.length > 0) {
        e.preventDefault();
    }
    updateSubmitButton();
})

function updateSubmitButton() {
    const warnings = [firstNameWarning, lastNameWarning, emailWarning, passwordWarning, telephoneWarning, bioWarning];
    const hasWarnings = warnings.some(warning => warning.innerHTML.length > 0);
  
    if (hasWarnings) {
      submit.style.backgroundColor = 'rgb(38, 39, 38)';
    } else {
        submit.style.backgroundColor = 'rgb(75, 179, 75)';
    }
  }