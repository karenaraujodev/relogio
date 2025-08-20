function relogio(){
    const agora = new Date() //objeto que usamos para obter data e hora atual
    let hora = agora.getHours(); // propriedade do objeto new date()
    let minuto = agora.getMinutes(); //propriedade
    let segundo = agora.getSeconds(); //propriedade

    hora = hora < 10 ? "0" + hora : hora; // operador ternário adicionando 0 antes do numero caso numero < 10 
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    const formatado = `${hora} : ${minuto} : ${segundo}`; 
    
    document.querySelector("#relogio").textContent = formatado; //seleciona a div com id "relogio" e usa a propriedade do dom .textcontent para inserir a variavel "formatado" dentro da div
}
setInterval(relogio, 1000); //função que chama outra funçao repetidamente, em um intevalo de tempo (milissegundos), no caso, mil milissegundos = 1 segundov
relogio(); //chama a função assim que a página é carregada