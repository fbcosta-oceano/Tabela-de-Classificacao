var listaJogadores = ['Paulo','Rafa']
var elementoTabela = document.getElementById('tabelaJogadores')
var objectJogador = {}, jogador = []
var input = document.getElementById('jogadorId')

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById('adicionarJogadorBtn').click();
  }
});

for (var i=0; i<listaJogadores.length; i++) {
  var objectJogador = {
    nome: listaJogadores[i],
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  }
  jogador.push(objectJogador)
}
atualizaValores()



function atualizaValores() {

  elementoTabela.innerHTML = ""
  jogador.forEach((jogador, index) => {
    elementoTabela.innerHTML += `
      <tr>
          <td>${jogador.nome}</td>
          <td>${jogador.vitoria}</td>
          <td>${jogador.empate}</td>
          <td>${jogador.derrota}</td>
          <td>${jogador.pontos}</td>
          <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
        </tr>`
  })
}

function adicionarJogador() {
  if (document.getElementById('jogadorId').value=='') {
    document.getElementById('error').innerHTML='Nome de jogador não pode estar vazio. Tente novamente'
  }
  else if (listaJogadores.includes(document.getElementById('jogadorId').value)) {
    document.getElementById('error').innerHTML='Nome de jogador já existe. Tente novamente'    
  }
  else {
    document.getElementById('error').innerHTML=''
    var objectJogador = {
      nome: document.getElementById('jogadorId').value,
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    }
    jogador.push(objectJogador)
    listaJogadores.push(document.getElementById('jogadorId').value)
    atualizaValores()
    document.getElementById('jogadorId').value = ""
  }
}

function adicionarVitoria(index) {
  jogador[index].vitoria++
  jogador[index].pontos = jogador[index].pontos + 3
  elementoTabela.innerHTML = ""
  atualizaValores()
}
function adicionarEmpate(index) {
  jogador[index].empate++
  jogador[index].pontos++
  elementoTabela.innerHTML = ""
  atualizaValores()
}
function adicionarDerrota(index) {
  jogador[index].derrota++
  elementoTabela.innerHTML = ""
  atualizaValores()
}
function apagaTodosJogadores() {
  listaJogadores = []
  jogador = []
  atualizaValores()
}
function zeraPlacar() {
  jogador.forEach((jogador, index) => {
    jogador.vitoria = 0
    jogador.empate = 0
    jogador.derrota = 0
    jogador.pontos = 0
  })
  atualizaValores()
}