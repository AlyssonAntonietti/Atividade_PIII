
function consultaCEP() {

    var jsonDisplay = document.getElementById("jsonDisplay");
    var resposta;
    var txtCep = document.getElementById("cep").value;
    var xhr = new XMLHttpRequest();

    if(txtCep.length != 8) {
        alert("CEP inválido. Verifique!");
    }

    jsonDisplay.innerHTML = "";

    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            resposta = JSON.parse(xhr.responseText);
            console.log(resposta);

            for (var key in resposta) {
                if (resposta.hasOwnProperty(key)) {
                    var p = document.createElement("p");
                    p.innerHTML = "<strong>" + key + ":</strong> " + resposta[key];
                    jsonDisplay.appendChild(p);
                }
            }
        }
    };
    xhr.open("GET", "https://viacep.com.br/ws/" + txtCep + "/json/");
    xhr.send();
}

function buscaCEP() {

    var jsonDisplay = document.getElementById("jsonDisplay");
    var resposta;
    var txtCidade = document.getElementById("cidade").value;
    var txtRua = document.getElementById("rua").value;
    var txtUF = document.getElementById("uf").value;

    var xhr = new XMLHttpRequest();

    if(txtCidade == " ") {
        alert("Preencha a Cidade!");
    }
    if(txtUF == " ") {
        alert("Preencha a UF!");
    }
    if(txtRua == " ") {
        alert("Preencha a Rua!");
    }

    jsonDisplay.innerHTML = "";

    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            resposta = JSON.parse(xhr.responseText);
            console.log(resposta);
            
            resposta.forEach(function(obj) {
                
                var ul = document.createElement("ul");
    
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        var li = document.createElement("li");
                        li.innerHTML = "<strong>" + key + ":</strong> " + obj[key];
                        ul.appendChild(li);
                    }
                }
                jsonDisplay.appendChild(ul);
            });
        }
    };
    xhr.open("GET", "https://viacep.com.br/ws/" + txtUF + "/" + txtCidade + "/" + txtRua + "/json/");
    xhr.send();
}

function consultaIntervalo() {

    var txtCepIni = document.getElementById("cepinicial").value;
    var txtCepFin = document.getElementById("cepfinal").value;

    var jsonDisplay = document.getElementById("jsonDisplay");

    if(txtCepIni.length != 8 || txtCepFin.length != 8) {
        alert("CEP inicial ou final inválido. Verifique!");
    }

    jsonDisplay.innerHTML = "";

    buscaCepIncial();
    buscaCepFinal();
    
}

function buscaCepIncial() {

    var jsonDisplay = document.getElementById("jsonDisplay");
    var resposta;
    var txtCepIni = document.getElementById("cepinicial").value;

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            resposta = JSON.parse(xhr.responseText);
            console.log(resposta);

            for (var key in resposta) {
                if (resposta.hasOwnProperty(key)) {
                    var p = document.createElement("p");
                    p.innerHTML = "<strong>" + key + ":</strong> " + resposta[key];
                    jsonDisplay.appendChild(p);
                }
            }
            var p = document.createElement("p");
            p.innerHTML = "<br>"
            jsonDisplay.appendChild(p);
        }
    };
    xhr.open("GET", "https://viacep.com.br/ws/" + txtCepIni + "/json/");
    xhr.send();
}

function buscaCepFinal() {

    var jsonDisplay = document.getElementById("jsonDisplay");
    var resposta;

    var txtCepFin = document.getElementById("cepfinal").value;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            resposta = JSON.parse(xhr.responseText);
            console.log(resposta);

            for (var key in resposta) {
                if (resposta.hasOwnProperty(key)) {
                    var p = document.createElement("p");
                    p.innerHTML = "<strong>" + key + ":</strong> " + resposta[key];
                    jsonDisplay.appendChild(p);
                }
            }
        }
    };
    xhr.open("GET", "https://viacep.com.br/ws/" + txtCepFin + "/json/");
    xhr.send();
}
