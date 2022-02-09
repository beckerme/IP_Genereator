function random(){
    var selecionar = document.getElementById('Classes');
    var valores = selecionar.options[selecionar.selectedIndex].value;
    var resultado = document.getElementById('Resultado');

    if (valores == "Selecionar")
        alert('Por favor, selecione uma classe')

    else if (valores == "A") {
        let n1 = 1 + Math.floor(254*Math.random())
        let n2 = 1 + Math.floor(254*Math.random())
        let n3 = 1 + Math.floor(254*Math.random())
        resultado.value = `10.${n1}.${n2}.${n3}`;
    }

    else if (valores == "B"){
        let n1 = 16 + Math.floor(16*Math.random())
        let n2 = 1 + Math.floor(254*Math.random())
        let n3 = 1 + Math.floor(254*Math.random())
        resultado.value = `172.${n1}.${n2}.${n3}`;
    }

    else if (valores == "C"){
        let n1 = 1 + Math.floor(254*Math.random())
        let n2 = 1 + Math.floor(254*Math.random())
        resultado.value = `192.168.${n1}.${n2}`;
    }
}