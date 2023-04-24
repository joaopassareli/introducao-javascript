var title = document.querySelector('.title')
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;

    var altura = paciente.querySelector(".info-altura").textContent;

    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if ((!pesoValido) || (!alturaValida)) {
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

function validaPeso (peso) {
    if (peso > 0 && peso < 300) {
        return true;
    } 
    return false;
}

function validaAltura (altura) {
    if (altura > 0 && altura < 2.5) {
        return true;
    } 
    return false;
}