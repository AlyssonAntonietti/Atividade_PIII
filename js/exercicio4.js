function intercalar() {

    var p1 = document.getElementById("palavra1").value;
    var p2 = document.getElementById("palavra2").value;

    var resultado = "";
    var maior;
    
    if(p1.length < p2.length) {
        maior = p2.length;
    } else {
        maior = p1.length;
    }

    for(var i=0; i < maior; i++) {
        resultado += p1.charAt(i);
        resultado += p2.charAt(i);
    }

    document.getElementById("resultado").value = resultado;
}