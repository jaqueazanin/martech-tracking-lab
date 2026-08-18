const form = document.getElementById("lead-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  message.textContent = "Formulário enviado com sucesso!";
});
