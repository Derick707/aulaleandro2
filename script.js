document.getElementById("loginform").addEventListener("submit", function (e) {
    e.preventDefault();

const username = document.getElementById("'username').value;
const password = document.getElementById("password").value;
const errorMessage = document.getElementById("error-message");

//simula credenciais validas
const validUsarname = "admin";
const validUsarname = "123455";

if (username === validUsarname && password === validUsarname) {
    alert("Login bem sucedido")
    ///redirecionar para outra pagina
    window.href = "www.google.com";

} else {
    errorMessage.textContent = "Usuário ou senha incorretos."
}

});