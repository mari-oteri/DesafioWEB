let participantes = [
  {
    nome: "Marianna Oteri",
    email: "mari@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: new Date(2024, 2, 25, 22, 0)
  },
  {
    nome: "João da Silva",
    email: "joao@gmail.com",
    dataInscricao: new Date(2024, 3, 15, 10, 30),
    dataCheckin: null
  },
  {
    nome: "Maria Oliveira",
    email: "maria@gmail.com",
    dataInscricao: new Date(2024, 2, 1, 14, 10),
    dataCheckin: new Date(2024, 2, 25, 9, 20)
  },
  {
    nome: "Carlos Santos",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2024, 1, 28, 20, 5),
    dataCheckin: new Date(2024, 2, 24, 18, 0)
  },
  {
    nome: "Ana Costa",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 1, 10, 12, 0),
    dataCheckin: null
  },
  {
    nome: "Pedro Almeida",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 2, 12, 9, 45),
    dataCheckin: new Date(2024, 2, 25, 14, 15)
  },
  {
    nome: "Juliana Lima",
    email: "juliana@gmail.com",
    dataInscricao: new Date(2024, 1, 5, 18, 20),
    dataCheckin: new Date(2024, 2, 24, 16, 40)
  },
  {
    nome: "Fernando Gomes",
    email: "fernando@gmail.com",
    dataInscricao: new Date(2024, 1, 20, 21, 30),
    dataCheckin: null
  },
  {
    nome: "Laura Ferreira",
    email: "laura@gmail.com",
    dataInscricao: new Date(2024, 2, 5, 16, 15),
    dataCheckin: null
  },
  {
    nome: "Rafael Souza",
    email: "rafael@gmail.com",
    dataInscricao: new Date(2024, 1, 25, 11, 0),
    dataCheckin: new Date(2024, 2, 23, 20, 25)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)
  
  let dataCheckin = dayjs(Date.now())
  .to(participante.dataCheckin)

  // condicional
  if(participante.dataCheckin==null){
    dataCheckin = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckin(event)"
      >
        Confirmar Check-In 
      </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckin}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => { //arrow
  let output = "" 
  //estrutura de repetição - loop
  for ( let participante of participantes){
    // faça alguma coisa
    output = output + criarNovoParticipante(participante)
  }
  
  //alert("Estou dentro da função")
  //Pegar Informação do HTML

  //Substituir Informação do HTML
    //O que o inner HTML faz ?
    //. antes possibilita quebra de linha   
    //Aparentemente em js aspas " e ' funcionam igualmente

  document
  .querySelector('tbody')
  .innerHTML= output
}
  
atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()
  //Dados do formulario
  const dadosDoFormulario = new FormData(event.target)
  
  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckin: null
  }   

  // verificar se o participante ja existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )

  if(participanteExiste){
    alert('Email já cadastrado!')
    return
  }

  //spread
  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // limpar formulário
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckin = (event) => {
  //confirmar checkin
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in ?'
  if (confirm(mensagemConfirmacao)== false){
    return
  }
  // alert(resutado) // true or false - boolean
  // encontrar o participante dentro da lista
  const participante = participantes.find((p) =>  p.email == event.target.dataset.email
  )
  // atualizar o checkin do participante
  participante.dataCheckin = new Date()
  // atualizar a lista de participantes
  atualizarLista(participantes)
}