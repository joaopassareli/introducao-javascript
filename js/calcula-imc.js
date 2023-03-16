var title = document.querySelector('.title')
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;

    var altura = paciente.querySelector(".info-altura").textContent;

    var tdImc = paciente.querySelector(".info-imc");

    if ((peso <= 0 || peso >= 1000) || (altura <= 0 || altura >= 3.00)) {
        tdImc.textContent = '-';
        paciente.classList.add("paciente-invalido");
    } else {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

function calculaImc (peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);

}