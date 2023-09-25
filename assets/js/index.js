 "use strict";
 //import { imprime } from './_DATE_PATIENT.js'


 const conteudo = document.querySelector('body');

 // FUNÇÃO DO BOTÃO 'CADASTRAR' INSERE TODAS INFORMAÇÕES NO LOCAL STORAGE E CRIA 'ATALHO' NO CAMPO "REGISTRO CADASTRO".
 const btn = document.querySelector('#btnCadastro');
    btn.addEventListener('click', () =>{ // AO CLICAR NO BOTÃO 'CADASTRAR' EXECUTA FUNÇÃO
    
    //function firebase1(){ // NÃO SEI COMO ESSA FUNÇÃO PAROU AQUI (RISOS DE NERVOSO);
            // PEGA VALORES DOS INPUT's DA CRIANÇA.
    let inputNameComplete = document.querySelector("#inputNameComplete").value;    
    let inputCPF = document.querySelector("#inputCPF").value;
    let inputDN = document.querySelector("#inputDN").value;
    let inputCartaoSUS = document.querySelector("#inputCartaoSUS").value;
    let inputRG = document.querySelector("#inputRG").value;
    let inputContato = document.querySelector("#inputContato").value;

        //CRIA OBJETO PARA ARMAZENAR INFORMAÇÕES DA CRIANÇA E INSERIR NO LOCAL STORAGE

       const armazena = {
        nomeCompletoCrianca : inputNameComplete,
        cpfCrianca          : inputCPF,
        dataNascimento      : inputDN,
        cartaoSus           : inputCartaoSUS,
        rg                  : inputRG,
        contato             : inputContato
        };

        
        // INSERE DADOS NO LOCAL STORAGE
      localStorage.setItem('NOME_CRIANCA',armazena.nomeCompletoCrianca);
      localStorage.setItem('CPF_CRIANCA',armazena.cpfCrianca);
      localStorage.setItem('DN_CRIANCA',armazena.dataNascimento);
      localStorage.setItem('CARTAOSUS_CRIANCA',armazena.cartaoSus);
      localStorage.setItem('RG_CRIANCA',armazena.rg);
      localStorage.setItem('CONTATO_CRIANCA',armazena.contato);
        // FIM DA COLETA DE INPUT's DA CRIANÇA.


        // PEGA VALORES DOS INPUT's DO RESPONSÁVEL.
    let inputNameResp = document.querySelector("#inputNameResp").value;       
    let inputCPFResp = document.querySelector("#inputCPFResp").value;
    let inputRGResp = document.querySelector("#inputRGResp").value;
    let inputRua = document.querySelector("#inputRua").value;
    let inputNumero = document.querySelector("#inputNumero").value;
    let inputENDER = document.querySelector("#inputENDER").value;
    let inputCidade = document.querySelector("#inputCidade").value;
    let inputTitulo = document.querySelector("#inputTitulo").value;
    let inputZona = document.querySelector("#inputZona").value;
    let inputSecao = document.querySelector("#inputSecao").value;


        //CRIA OBJETO PARA ARMAZENAR INFORMAÇÕES DO RESPONSÁVEL E INSERIR NO LOCAL STORAGE
        const armazenaRESP = {
        nomeCompleto_RESP   : inputNameResp,
        cpf_RESP            : inputCPFResp,
        RG_RESP             : inputRGResp,
        RUA_RESP            : inputRua,
        NUM_RESP            : inputNumero,
        BAIRRO_RESP         : inputENDER,
        CIDADE_RESP         : inputCidade,
        TITULO_RESP         : inputTitulo,
        ZONA_RESP           : inputZona,
        SECAO_RESP          : inputSecao

    };
       
        
      localStorage.setItem('NOME_RESP',armazenaRESP.nomeCompleto_RESP);
      localStorage.setItem('CPF_RESP',armazenaRESP.cpf_RESP);
      localStorage.setItem('RG_RESP',armazenaRESP.RG_RESP);
      localStorage.setItem('RUA_RESP',armazenaRESP.RUA_RESP);
      localStorage.setItem('NUM_RESP',armazenaRESP.NUM_RESP);
      localStorage.setItem('BAIRRO_RESP',armazenaRESP.BAIRRO_RESP);
      localStorage.setItem('CIDADE_RESP',armazenaRESP.CIDADE_RESP);
      localStorage.setItem('TITULO_RESP',armazenaRESP.TITULO_RESP);
      localStorage.setItem('ZONA_RESP',armazenaRESP.ZONA_RESP);
      localStorage.setItem('SECAO_RESP',armazenaRESP.SECAO_RESP);

    /* ------------------------------------------------------------------------------ */



    // PEGA INFORMAÇÃO DO BLOCO .conteudoRegistro.
    let conteudoRegistro = document.querySelector(".conteudoRegistro");
    // INSERE BLOCO DE HTML DENTRO DO BLOCO .conteudoRegistro.
    let btn = conteudoRegistro.innerHTML = `${conteudoRegistro.innerHTML} <div class="registroP">
    <p class="namePaciente"><strong>PACIENTE: ${inputNameComplete}</strong><br>RESPONSÁVEL: ${inputNameResp}</p> 
        
    <div class="incon-link">
        <div class="link-a">    
            <a id="a-link" href="./formCadastro.html" target="_blank" rel="noopener noreferrer">
                <img  src="/assets/img/informacoes.png" alt="img-perfil-paciente" class="incon">
            </a>
        </div>
    </div>`;
    
        


    // LIMPAR CAMPOS DO INPUT.
                        setTimeout(() => {

                            // CAMPOS CRIANÇA
                                document.querySelector("#inputNameComplete").value="";    
                                document.querySelector("#inputCPF").value="";
                                document.querySelector("#inputDN").value="";
                                document.querySelector("#inputCartaoSUS").value="";
                                document.querySelector("#inputRG").value="";
                                document.querySelector("#inputContato").value="";
                            
                            // CAMPOS RESPONSÁVEL
                                document.querySelector("#inputNameResp").value="";       
                                document.querySelector("#inputCPFResp").value="";
                                document.querySelector("#inputRGResp").value="";
                                document.querySelector("#inputRua").value="";
                                document.querySelector("#inputNumero").value="";
                                document.querySelector("#inputENDER").value="";
                                document.querySelector("#inputCidade").value="";
                                document.querySelector("#inputTitulo").value="";
                                document.querySelector("#inputZona").value="";
                                document.querySelector("#inputSecao").value="";
                        
                        }, 100) // CONTA OS MILISSEGUNDOS PARA LIMPAR OS CAMPOS  
    } ) 
        //// FIM DA FUNÇÃO CADASTRAR INFORMAÇÕES \\\\\


    
    
    
        

    console.log(imprime)







    // BOTÃO PARA GERAR DOCUMENTO PDF E DISPONIBIZA PARA IMPRESSÃO


  
   
       


    