function adicionar(valor) {
    let display = document.getElementById("display");

    // Não permitir começar com "+"
    if (display.value === "" && valor === "+") {
        return;
    }

    display.value += valor;
}

function limpar() {
    document.getElementById("display").value = "";
}

function calcular() {
    let display = document.getElementById("display");

    // Não permitir usar "=" se estiver vazio
    if (display.value === "") {
        return;
    }

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
}