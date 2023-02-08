var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;

    var altura = paciente.querySelector(".info-altura").textContent;

    var tdImc = paciente.querySelector(".info-imc");

    if ((peso <= 0 || peso >= 1000) || (altura <= 0 || altura >= 3.00)) {
        alert("Peso ou altura inválidos");
        tdImc.textContent = '-';
        paciente.classList.add("paciente-invalido");
    } else {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}