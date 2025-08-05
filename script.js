document.addEventListener("DOMContentLoaded", () => {
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");

    const perguntas = [
        {
            enunciado: "Alguns amigos te chamaram para sair. Onde vocês foram?",
            alternativas: [
                { texto: "Shopping/Cinema", afirmacao: "Escolhe algo mais previsível e confortável." },
                { texto: "Parque/Museu", afirmacao: "Escolhe algo imprevisível, pode acontecer de tudo." }
            ]
        },
        {
            enunciado: "Quando você vai fazer um trabalho em grupo, você toma a iniciativa ou deixa para que os outros façam isso?",
            alternativas: [
                { texto: "Eu tomo a frente!", afirmacao: "Toma a liderança, não confia nos outros." },
                { texto: "Prefiro seguir regras.", afirmacao: "Prefere seguir regras, se sente mais confortável." }
            ]
        },
        {
            enunciado: "Você se considera alguém criativo?",
            alternativas: [
                { texto: "Sim! Me considero bem criativo!", afirmacao: "É criativo e gosta de demonstrar isso para os outros." },
                { texto: "Não, mas quando necessário sou!", afirmacao: "Não é sempre criativo, mas quando precisa, é." }
            ]
        },
        {
            enunciado: "Você tem a opção de sair com seus amigos ou ficar em casa. Qual você escolhe?",
            alternativas: [
                { texto: "Saio com meus amigos!", afirmacao: "Sociável, gosta de sair e criar memórias com as pessoas." },
                { texto: "Prefiro ficar em casa.", afirmacao: "Prefere a companhia do sofá e uma série." }
            ]
        },
        {
            enunciado: "Quando alguém está mal, é você quem procuram?",
            alternativas: [
                { texto: "Normalmente me procuram, sou boa dando conselhos!", afirmacao: "As pessoas te consideram alguém de conforto." },
                { texto: "Normalmente só me procuram quando precisam que alguém seja realista.", afirmacao: "Normalmente te procuram quando não querem respostas fofas." }
            ]
        }
    ];

    let atual = 0;
    let historiaFinal = "";

    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }
        const perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.innerHTML = ""; // Limpar as alternativas
        perguntaAtual.alternativas.forEach(alternativa => {
            const botao = document.createElement("button");
            botao.textContent = alternativa.texto;
            botao.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botao);
        });
    }

    function respostaSelecionada(alternativa) {
        historiaFinal += alternativa.afirmacao + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado() {
        caixaPerguntas.textContent = "Você é...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.innerHTML = ""; // Limpar alternativas
        caixaResultado.classList.add("visivel");

        const botaoReiniciar = document.createElement("button");
        botaoReiniciar.textContent = "Refazer Quiz";
        botaoReiniciar.addEventListener("click", reiniciarQuiz);
        caixaAlternativas.appendChild(botaoReiniciar);
    }

    function reiniciarQuiz() {
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.remove("visivel");
        mostraPergunta();
    }

    mostraPergunta(); // Iniciar o quiz quando o DOM estiver pronto
});
