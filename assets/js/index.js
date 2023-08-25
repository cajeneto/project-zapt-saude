const inputNameComplete = document.querySelector("#inputNameComplete");
const inputCPF = document.querySelector('#inputCPF');
const inputCartaoSUS = document.querySelector("#inputCartaoSUS");
const inputDN = document.querySelector("#inputDN");
const inputENDER = document.querySelector("#inputENDER");
const inputTITULO = document.querySelector("#inputTITULO");





function cadastrarPaciente(){
    const inputNameComplete = document.querySelector("#inputNameComplete").value;
    const inputCPF = document.querySelector('#inputCPF').value;
    const inputCartaoSUS = document.querySelector("#inputCartaoSUS").value;
    const inputDN = document.querySelector("#inputDN").value;
    const inputENDER = document.querySelector("#inputENDER").value;
    const inputTITULO = document.querySelector("#inputTITULO").value;

    //const inputNameCompleteValue = inputNameComplete.value;
    /* //console.log(
        inputNameComplete,
        inputCPF,
        inputCartaoSUS,
        inputDN,
        inputENDER,
        inputTITULO
        ); */

}

const DADOS_PACIENTE = {
    nomeCompleto: inputNameComplete,
    CPF: inputCPF,
    CARTAO_SUS: inputCartaoSUS,
    DATA_NASCIMENTO: inputDN,
    ENDERECO: inputENDER,
    TITULO_ELEITOR: inputTITULO
}

console.log(DADOS_PACIENTE);