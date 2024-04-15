function formatarCEP(input) {
    var cep = input.value.replace(/\D/g, '');
    if (cep.length > 5) {
        cep = cep.slice(0, 5) + '-' + cep.slice(5);
    }
    input.value = cep;
}

function consultarCEP() {
    var cep = document.getElementById("cep").value.replace(/\D/g, '');
    var xmlHttpRequest = new XMLHttpRequest();

    var url = "https://viacep.com.br/ws/"+cep+"/json/";

    xmlHttpRequest.open("GET", url, true);
    xmlHttpRequest.setRequestHeader("Accept", "application/json");

    xmlHttpRequest.onreadystatechange = function (){
        if(xmlHttpRequest.readyState == 3 ){
            console.log("Carregando ...");
        }

        if(xmlHttpRequest.readyState == 4){
            if(xmlHttpRequest.status == 200) {
                console.log('CEP:' + xmlHttpRequest.responseText);

                var jsonResponse = JSON.parse(xmlHttpRequest.responseText);

                var table = document.getElementById("resultadoTable");
                table.innerHTML = "";

                for (var key in jsonResponse) {
                    if(jsonResponse.gia == "" || jsonResponse.gia === 0){
                        delete jsonResponse.gia
                    }

                    if(jsonResponse.complemento == "" || jsonResponse.complemento === 0){
                        delete jsonResponse.complemento
                    }
                    if (jsonResponse.hasOwnProperty(key)) {
                        var row = table.insertRow();
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        cell1.innerHTML = key;
                        cell2.innerHTML = jsonResponse[key];
                    }
                }
            } else {
                console.error("Erro ao consultar o CEP");
                document.getElementById("resultadoTable").innerHTML = "<tr><td colspan='2'>CEP não encontrado</td></tr>";
            }
        }
    };
    

    xmlHttpRequest.send();
}

function limparCampos() {
    document.getElementById("cep").value = "";
    document.getElementById("resultadoTable").innerHTML = ""; 
}
