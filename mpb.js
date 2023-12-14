
var nome = prompt ('Qual é seu nome?')
alert ('Seja bem vindo ao site, MPB ' + nome + '!' + ' Criado por Davi o mais lindo')
function carregar(){
    var horas= document.getElementById('hr')
    var hora= new Date()
    var hr = hora.getHours()
    horas.innerHTML=`Agora são ${hr} horas.`
    if (hr<12 ){
        horas.innerHTML=`Bom dia, agora são ${hr} horas. Tenha um bom dia!`
    } else if (hr<=18){
        horas.innerHTML=` Boa tarde, agora são ${hr} horas. Tenha uma boa tarde!!`
    }
    else if (hr>18 || hr<23){`Boa noite, agora são ${hr} horas. Tenha uma boa noite!!`}
    else{`Boa Madrugada, agora são ${hr} horas. Tenha uma boa madrugada!`}
}