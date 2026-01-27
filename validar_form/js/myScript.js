const input = document.querySelectorAll('#registroForm input, #registroForm select');

input.forEach(input => {
  input.addEventListener('blur', () => {
    validarCampo(input);
  });
});

function validarCampo(input) {
  const errorSpan = document.getElementById(`err-${input.id}`);
  if (!input.checkValidity()) {
    input.classList.add('invalid');
    errorSpan.textContent = "Formato no válido";
  } else {
    input.classList.remove('invalid');
    input.classList.add('valid');
    errorSpan.textContent = "";
  }
}