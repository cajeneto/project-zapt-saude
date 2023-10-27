function listarArray() {
    const dbref = ref(db);
    const collectionName = 'pessoa/';
    //const id_user = ''
    get(child(dbref, collectionName))
    .then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
             let childKey = childSnapshot.key;
             let childData = childSnapshot.val();
             var criancaCol = childSnapshot.val().crianca.nomeCompletoCrianca; 
             var infoRegistro = childSnapshot.val().crianca.id_user;
             var responsavelCol = childSnapshot.val().responsavel.nomeCompleto_RESP;
             var cartaoSus = childSnapshot.val().crianca.cartaoSus; 
             var contato = childSnapshot.val().crianca.contato; 
             var cpfCrianca = childSnapshot.val().crianca.cpfCrianca; 
             var dataNascimento = childSnapshot.val().crianca.dataNascimento; 
             var rg = childSnapshot.val().crianca.rg;

             
             const insereDiv = `
                <div class="qntPac">
                   <div class="nomePacListReg"><strong>NOME DA CRIANÇA: <br></strong>${criancaCol}</div>
                   <div class="idPacReg"><strong>ID Registro: <br></strong>${infoRegistro}</div>
                   <div class="cpfCriaReg"><strong> CPF: <br></strong>${cpfCrianca}</div>
                   <div class="dnCriaReg"><strong> RESPONSÁVEL:<br></strong>${responsavelCol}</div>
                   <div class="ResponsavelCriaReg"><strong>DATA NASCIMENTO: <br></strong>${dataNascimento}</div>
                   <div class="SUSReg"><strong> CARTÃO SUS:<br></strong>${cartaoSus}</div>
                   <div class="TelefoneReg"><strong> CONTATO: <br></strong>${contato}</div>
                   `
                   /* <div class="buttonEdit">
                      <button id="btnEditReg" data-id="${infoRegistro}">Editar</button>
                   </div> */
                /* <div class="buttonImprime">
                   <button id="btnImprimeReg">Imprimir</button>
                </div>
                </div> */
                

                

                function criaDivfilho() {
                   const reg1 = document.querySelector('.pacCad')
                   reg1.innerHTML+=insereDiv
                   //btnEditarReg();

                   /* let btnEdit = document.querySelector('#btnEditReg');
                   btnEdit.addEventListener('click', (e) => {
                      if(e.target){
                         console.log("clicou no botao editar");
                      }
                   }) */

                   /* function btNew(id){
                      const nwBtn = document.createElement('button').setAttribute('class','btnEditarReg');
                      //nwBtn.setAttribute('class','btnEditarReg');
                      nwBtn.textContent='editar';
                      nwBtn.classList.add(`${infoRegistro}`);

                      nwBtn.addEventListener('click', () =>{
                         alert(`clicou em ${id}`);
                      })
                   }
                   btNew(); */


                   //btnImprimeReg();
                   //getDataPessoa();
                   //criaElementoReg();

                   function btNew(){
                      //const insereDiv2 = document.querySelector('.TelefoneReg')
                      const nwBtn = document.createElement('button')
                      nwBtn.setAttribute('class','btnEditarReg');
                      //nwBtn.setAttribute('data-id',`${infoRegistro}`);
                      //nwBtn.setAttribute('class','btnEditarReg');
                      nwBtn.textContent='editar';
                      nwBtn.classList.add(`${infoRegistro}`);
 
                      nwBtn.addEventListener('click', () =>{
                         alert(`clicou em ${infoRegistro}`);
                      })

                      const containerInsere = document.querySelector('.qntPac');
                      containerInsere.appendChild(nwBtn)

                      
                }
                   btNew();


                }
                   criaDivfilho();
                   

             })
          })
       .catch((error) => {
             console.error('Erro ao listar o array:', error);
       });
 }

 // Chame a função para listar o array
 listarArray();