// PEGANDO ELEMENTOS
const btn = document.getElementById("btnLogin");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const msg = document.getElementById("mensagem");
const toggle = document.getElementById("mostrarSenha");

// 👁️ MOSTRAR/ESCONDER SENHA
toggle.addEventListener("click", () => {
    if (senha.type === "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
});

// 💾 CARREGAR USUÁRIO SALVO
window.onload = () => {
    const userSalvo = localStorage.getItem("usuario");
    if (userSalvo) {
        usuario.value = userSalvo;
    }
};

// 🔐 LOGIN
btn.addEventListener("click", function() {

    // reset visual
    usuario.style.border = "none";
    senha.style.border = "none";

    if (usuario.value === "" || senha.value === "") {
        msg.textContent = "Preencha todos os campos!";
        msg.className = "erro";

        if (usuario.value === "") {
            usuario.style.border = "2px solid red";
        }

        if (senha.value === "") {
            senha.style.border = "2px solid red";
        }

    } else if (usuario.value === "admin" && senha.value === "1234") {

        msg.textContent = "Login realizado com sucesso!";
        msg.className = "sucesso";

        // salvar usuário
        localStorage.setItem("usuario", usuario.value);

        // efeito de carregamento
        btn.textContent = "Entrando...";
        btn.disabled = true;

        setTimeout(() => {
            window.location.href = "home.html";
        }, 1500);

    } else {
        msg.textContent = "Usuário ou senha incorretos!";
        msg.className = "erro";
    }
});
