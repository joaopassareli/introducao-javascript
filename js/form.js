botaoAdicionar.addEventListener("click", function (e) {
    e.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = getFormData(form);
    var pacienteTr = incrementsTable(paciente);

    if (!validaPaciente(paciente)) {
        alert("Os dados fornecidos do paciente são inválidos!");
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
});

function getFormData (form) {
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }

    return paciente;
}

function incrementsTable (paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(insertClassInfo(paciente.nome, "info-nome"));
    pacienteTr.appendChild(insertClassInfo(paciente.peso, "info-peso"));
    pacienteTr.appendChild(insertClassInfo(paciente.altura, "info-altura"));
    pacienteTr.appendChild(insertClassInfo(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(insertClassInfo(paciente.imc, "info-imc"));

    return pacienteTr;
}

function addPacienteOnTable (paciente) {
    var pacienteTr = incrementsTable(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function insertClassInfo (pacienteData, info) {
    var td = document.createElement("td");
    td.textContent = pacienteData;
    td.classList.add(info);

    return td;
}

function validaPaciente (paciente) {
    return ((validaAltura(paciente.altura) || validaPeso(paciente.peso))&& paciente.nome.length > 0);
}