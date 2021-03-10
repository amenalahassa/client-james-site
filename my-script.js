let copyBtn = document.querySelector("#btn-copy");

copyBtn.addEventListener('click', () => {
  /* Get the text field */
  let textInput = document.querySelector("#text-to-copy")

  /* Select the text field */
  textInput.select();
  textInput.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  let message = document.querySelector('.btn-cp-rslt');
  message.classList.add('active');

  setTimeout(() => {
    message.classList.remove('active');
  }, 2000);

})
