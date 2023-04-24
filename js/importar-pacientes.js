var botaoImportar = document.querySelector("#importar-paciente");

botaoImportar.addEventListener("click", function () {
    console.log('Buscando Pacientes');

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisible");
            var response = xhr.responseText;
            var pacientes = JSON.parse(response);

            pacientes.forEach(function(paciente) {
                addPacienteOnTable(paciente);
            });
        } else {
            erroAjax.classList.remove("invisible");
        }
    });

    xhr.send();
});