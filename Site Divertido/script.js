// Jogo 1: Botão Fujão
const btnPegar = document.getElementById('btnPegar');
btnPegar.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnPegar.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnPegar.offsetHeight);
    btnPegar.style.position = 'fixed';
    btnPegar.style.left = `${x}px`;
    btnPegar.style.top = `${y}px`;
});

btnPegar.addEventListener('click', () => {
    alert('Parabéns! Você me pegou! 🎉');
    btnPegar.style.position = 'static';
});

// Jogo 2: Caixa de Cores
const caixaCor = document.querySelector('.caixa-cor');
caixaCor.addEventListener('click', () => {
    const cor = '#' + Math.floor(Math.random()*16777215).toString(16);
    caixaCor.style.backgroundColor = cor;
});

// Jogo 3: Jogo de Digitação
const palavras = ['programação', 'javascript', 'computador', 'desenvolvimento', 'tecnologia'];
let pontos = 0;
const palavraElement = document.getElementById('palavra');
const entradaElement = document.getElementById('entrada');
const pontuacaoElement = document.getElementById('pontuacao');

function novaPalavra() {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    palavraElement.textContent = palavraAleatoria;
}

entradaElement.addEventListener('input', () => {
    if (entradaElement.value === palavraElement.textContent) {
        pontos += 10;
        pontuacaoElement.textContent = `Pontos: ${pontos}`;
        entradaElement.value = '';
        novaPalavra();
    }
});

novaPalavra();