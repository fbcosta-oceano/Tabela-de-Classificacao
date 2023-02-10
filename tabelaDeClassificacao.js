var listaJogadores = ['Paulo','Rafa']
var elementoTabela = document.getElementById('tabelaJogadores')
var objectJogador = {}, jogador = []

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
  var objectJogador = {
    nome: document.getElementById('jogador').value,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  }
  jogador.push(objectJogador)
  listaJogadores.push(document.getElementById('jogador').value)
  atualizaValores()
  document.getElementById('jogador').value = ""
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