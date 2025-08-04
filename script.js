const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Alguns amigos te chamaram para sair. Onde vocês foram?",
        alternativas: [
            {
                texto: "Shopping/Cinema",
                afirmacao: "Alguem que escolhe algo mais previsivel, confortável. "
            },
            {
                texto: "Parque/Museu",
                afirmacao: "Alguem que escolhe algo imprevisivel, pode acontecer de tudo."
            }
        ]
    },
    {
        enunciado: "Quando você vai fazer um trabalho em grupo, você que toma iniciativa, ou deixa para que os outros façam isso?",
        alternativas: [
            {
                texto: "Eu tomo a frente!",
                afirmacao: "Toma a liderança, não confia nos outros para fazer isso, ou quer se sentir sempre a cima dos outros."
            },
            {
                texto: "Prefiro seguir regras.",
                afirmacao: "Prefere seguir regras, se sente mais confortável, ou não consegue tomar a iniciativa."
            }
        ]
    },
    {
        enunciado: "Você se considera alguem criativo?",
        alternativas: [
            {
                texto: "Sim! Me considero alguem bem criativo!",
                afirmacao: "É criativo e gosta de demonstrar isso para os outros."
            },
            {
                texto: "Não, mas quando necessario eu sou!",
                afirmacao: "Não é sempre criativo, mas quando precisa é."
            }
        ]
    },
    {
        enunciado: "Você tem a opção de sair com seus amigos, ou ficar em casa, qual voce escolhe?",
        alternativas: [
            {
                texto: "Saio com meus amigos!",
                afirmacao: "Sociavel, gosta de sair e criar memorias com as pessoas."
            },
            {
                texto: "Prefiro ficar em casa.",
                afirmacao: "Prefere a companhia do sofa e uma serie."
            }
        ]
    },
     {
        enunciado: "Quando alguem esta mal, é voce quem procuram?",
        alternativas: [
            {
                texto: "Normalmente me procuram, sou boa dando conselhos!",
                afirmacao: "As pessoas te consideram alguem de conforto."
            },
            {
                texto: "Normalmente so me procuram quando precisam que alguem seja realista.",
                afirmacao: "Normalmente te procuram quando nâo querem respostas fofas."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();