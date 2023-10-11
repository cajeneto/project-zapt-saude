
 function insereListReg(){
    var nomePacList = document.querySelector('.nomePacList').innerHTML=localStorage.getItem('NOME_CRIANCA');
    var date = document.querySelector('.nomePacList').innerHTML+=localStorage.getItem('DN_CRIANCA');
    return nomePacList
}
insereListReg();



   /*  localStorage.setItem('NOME_CRIANCA');
      localStorage.setItem('CPF_CRIANCA',armazena.cpfCrianca);
      localStorage.setItem('DN_CRIANCA',armazena.dataNascimento);
      localStorage.setItem('CARTAOSUS_CRIANCA',armazena.cartaoSus);
      localStorage.setItem('RG_CRIANCA',armazena.rg);
      localStorage.setItem('CONTATO_CRIANCA',armazena.contato); */

