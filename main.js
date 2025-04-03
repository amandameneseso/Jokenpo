function abrirModal() {
  document.getElementById("modal").style.display = "block";
}
function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
  const botoes = {
      pedra: document.getElementById('pedra'),
      papel: document.getElementById('papel'),
      tesoura: document.getElementById('tesoura'),
      fogo: document.getElementById('fogo'),
      agua: document.getElementById('agua'),
      corda: document.getElementById('corda')
  };
  const mensagemElement = document.getElementById('mensagem');
  const pontuacaoJogadorElement = document.getElementById('pontuacao-jogador');
  const pontuacaoComputadorElement = document.getElementById('pontuacao-computador'); // Agora será a Lisa Simpson

  let pontuacaoJogador = 0;
  let pontuacaoComputador = 0; // Pontuação da Lisa Simpson

  const escolhas = ["pedra", "papel", "tesoura", "fogo", "agua", "corda"];

  function jogar(escolhaJogador) {
    const escolhaLisa = escolhas[Math.floor(Math.random() * escolhas.length)];

    mensagemElement.textContent = `Você escolheu ${escolhaJogador}, Lisa escolheu ${escolhaLisa}. `;

    let resultado;

    if (escolhaJogador === escolhaLisa) {
        resultado = "Empate!";
    } else if (
        (escolhaJogador === "corda" && escolhaLisa === "pedra") ||
        (escolhaJogador === "corda" && escolhaLisa === "papel") ||
        (escolhaJogador === "tesoura" && escolhaLisa === "papel") ||
        (escolhaJogador === "tesoura" && escolhaLisa === "agua") ||
        (escolhaJogador === "agua" && escolhaLisa === "fogo") ||
        (escolhaJogador === "agua" && escolhaLisa === "pedra") ||
        (escolhaJogador === "fogo" && escolhaLisa === "papel") ||
        (escolhaJogador === "fogo" && escolhaLisa === "tesoura") ||
        (escolhaJogador === "papel" && escolhaLisa === "pedra") ||
        (escolhaJogador === "papel" && escolhaLisa === "agua") ||
        (escolhaJogador === "pedra" && escolhaLisa === "tesoura") ||
        (escolhaJogador === "pedra" && escolhaLisa === "fogo")
    ) {
        resultado = "Você venceu!";
        pontuacaoJogador++;
        atualizarPlacar();
    } else {
        resultado = "Lisa venceu!";
        pontuacaoComputador++;
        atualizarPlacar();
    }

    mensagemElement.textContent += resultado;
}

  function atualizarPlacar() {
      pontuacaoJogadorElement.textContent = pontuacaoJogador;
      pontuacaoComputadorElement.textContent = pontuacaoComputador;
  }

  // Adicionando os event listeners para os novos botões
  for (const escolha in botoes) {
      if (botoes.hasOwnProperty(escolha)) {
          botoes[escolha].addEventListener('click', () => jogar(escolha));
      }
  }
});
