let form = document.getElementById('subscribeForm');
let icon = document.getElementById('.iconError');

form.onsubmit = function (e) {
  e.preventDefault();

  let hasError = false;

  let inputName = document.forms['subscribeForm']['first-name'];

  if (!inputName.value) {
    hasError = true;
    inputName.classList.add('inputError');

    let span = inputName.nextSibling.nextSibling;
    span.innerText = 'First Name cannot be empty';

    icon.style.display = 'block';
  } else {
    inputName.classList.remove('inputError');
    let span = inputName.nextSibling.nextSibling;
    span.innerText = '';

    icon.style.display = 'none';
  }

  let inputLastName = document.forms['subscribeForm']['last-name'];

  if (!inputLastName.value) {
    hasError = true;
    inputLastName.classList.add('inputError');

    let span = inputLastName.nextSibling.nextSibling;
    span.innerText = 'Last Name cannot be empty';

    icon.style.display = 'block';
  } else {
    inputLastName.classList.remove('inputError');
    let span = inputLastName.nextSibling.nextSibling;
    span.innerText = '';

    icon.style.display = 'none';
  }

  let inputEmail = document.forms['subscribeForm']['email'];

  if (!inputEmail.value) {
    hasError = true;
    inputEmail.classList.add('inputError');

    let span = inputEmail.nextSibling.nextSibling;
    span.innerText = 'E-mail cannot be empty';

    let icon = document.querySelector('.iconError');
    icon.style.visibility = 'visible';
  } else {
    inputEmail.classList.remove('inputError');
    let span = inputEmail.nextSibling.nextSibling;
    span.innerText = '';

    let icon = document.querySelector('.iconError');
    icon.style.visibility = 'hidden';
  }

  let inputPassword = document.forms['subscribeForm']['password'];

  if (!inputPassword.value) {
    hasError = true;
    inputPassword.classList.add('inputError');

    let span = inputPassword.nextSibling.nextSibling;
    span.innerText = 'Password cannot be empty';

    let icon = document.querySelector('.iconError');
    icon.style.visibility = 'visible';
  } else {
    inputPassword.classList.remove('inputError');
    let span = inputPassword.nextSibling.nextSibling;
    span.innerText = '';

    let icon = document.querySelector('.iconError');
    icon.style.visibility = 'hidden';
  }
};
