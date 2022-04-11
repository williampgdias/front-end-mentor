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
  } else {
    inputName.classList.remove('inputError');
    let span = inputName.nextSibling.nextSibling;
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
