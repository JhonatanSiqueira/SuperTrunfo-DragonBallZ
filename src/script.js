var carta1 = {
  nome: "Goku",
  imagem: "https://thumbs.gfycat.com/FearlessYoungFlies-max-1mb.gif",
  atributos: {
    força: 10000,
    ki: 8,
    coração: 10
  }
};

var carta2 = {
  nome: "Vegeta",
  imagem:
    "https://i.pinimg.com/originals/e4/49/43/e4494317b30a60e648e00846c4c3de1b.gif",
  atributos: {
    força: 8000,
    ki: 10,
    coração: 4
  }
};

var carta3 = {
  nome: "Freeza",
  imagem:
    "https://pa1.narvii.com/6694/59b74f10e5b72ba7ac3ffdc036ea414ef9aaa7c9_hq.gif",
  atributos: {
    força: 8000,
    ki: 10,
    coração: 1
  }
};

var carta4 = {
  nome: "Cell",
  imagem:
    "https://c.tenor.com/qGAi7YUulBcAAAAd/dragon-ball-z-perfect-cell.gif",
  atributos: {
    força: 10000,
    ki: 8,
    coração: 0
  }
};

var carta5 = {
  nome: "Kuririn",
  imagem:
    "https://pa1.narvii.com/6245/aa76a2b33696145865e0228ab7f4fcaf5f1ed306_hq.gif",
  atributos: {
    força: 5000,
    ki: 8,
    coração: 8
  }
};
var carta6 = {
  nome: "Gohan",
  imagem:
    "https://i0.wp.com/media3.giphy.com/media/iJ9M2Gvc20vtu/giphy.gif",
  atributos: {
    força: 8000,
    ki: 6,
    coração: 9
  }
};
var carta7 = {
  nome: "Trunks",
  imagem:
    "https://c.tenor.com/mPjOVlV5Z90AAAAC/trunks-ssj.gif",
  atributos: {
    força: 8000,
    ki: 6,
    coração: 6
  }
};
var carta8 = {
  nome: "Majin Boo",
  imagem: "https://c.tenor.com/Z_LDrqLUt34AAAAC/comiendo-eat.gif",
  atributos: {
    força: 10000,
    ki: 10,
    coração: 6
  }
};

var cartaMaquina;
var cartaJogador;
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 8);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 8);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 8);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
