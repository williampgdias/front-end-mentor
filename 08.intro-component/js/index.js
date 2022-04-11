let form = document.getElementById('subscribeForm');

form.onsubmit = function (e) {
  e.preventDefault();

  let hasError = false;

  let inputName = document.forms['subscribeForm']['first-name'];

  if (!inputName.value) {
    hasError = true;
    inputName.classList.add('inputError');

    let span = inputName.nextSibling.nextSibling;
    span.innerText = 'First Name cannot be empty';

    let icon = document.querySelector('.iconError');
    icon.style.visibility = 'visible';
  } else {
    inputName.classList.remove('inputError');
    let span = inputName.nextSibling.nextSibling;
    span.innerText = '';
    let icon = document.querySelector('.iconError');
    icon.style.visibility = 'hidden';
  }

  let inputLastName = document.forms['subscribeForm']['last-name'];

  if (!inputLastName.value) {
    hasError = true;
    inputLastName.classList.add('inputError');

    let span = inputLastName.nextSibling.nextSibling;
    span.innerText = 'Last Name cannot be empty';

    let icon = document.querySelector('.iconError');
    icon.style.visibility = 'visible';
  } else {
    inputLastName.classList.remove('inputError');
    let span = inputLastName.nextSibling.nextSibling;
    span.innerText = '';

    let icon = document.querySelector('.iconError');
    icon.style.visibility = 'hidden';
  }

  let inputEmail = document.forms['subscribeForm']['email'];

  if (!inputEmail.value) {
    hasError = true;
    inputEmail.classList.add('inputError');

    let span = inputEmail.nextSibling.nextSibling;
    span.innerText = 'E-mail cannot be empty';
    icon.style.visibility = 'visible';
  } else {
    inputEmail.classList.remove('inputError');
    let span = inputEmail.nextSibling.nextSibling;
    span.innerText = '';
  }

  let inputPassword = document.forms['subscribeForm']['password'];

  if (!inputPassword.value) {
    hasError = true;
    inputPassword.classList.add('inputError');

    let span = inputPassword.nextSibling.nextSibling;
    span.innerText = 'Password cannot be empty';
    icon.style.visibility = 'visible';
  } else {
    inputPassword.classList.remove('inputError');
    let span = inputPassword.nextSibling.nextSibling;
    span.innerText = '';
  }
};

// const form = document.getElementById('loginForm');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const person = {
//     name: e.target[0].value,
//     lastName: e.target[1].value,
//     email: e.target[2].value,
//     password: e.target[3].value,
//   };
// });
