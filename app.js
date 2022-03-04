const scriptURL = 'https://script.google.com/macros/s/AKfycbwNak2isQptrQFPil4XWry9kAVdrCGMhNv1EOQDJ6A4E5MOSnegpFGy_raoCLSjmgT6/exec'
const form = document.forms['ridwa-form-response']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Subscribing..! We'll Reach You Soon..."))
    .catch(error => console.error('Error!', error.message))
})