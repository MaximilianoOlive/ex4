// Valor a ser adivinhado (entre 0 e 10)
const valorADevolver = Math.floor(Math.random() * 11);
let tentativas = 3;

const iniciarJogoButton = document.getElementById('iniciarJogo');
const resultadoDiv = document.getElementById('resultado');

iniciarJogoButton.addEventListener('click', () => {
    iniciarJogoButton.disabled = true;

    while (tentativas > 0) {
        const chute = parseInt(prompt('Digite o seu palpite:'));

        if (chute === valorADevolver) {
            resultadoDiv.textContent = 'Parabéns! Você acertou o número.';
            break;
        } else {
            tentativas--;
            if (tentativas > 0) {
                resultadoDiv.textContent = `Errado! Você tem mais ${tentativas} tentativas.`;
            } else {
                resultadoDiv.textContent = `Suas tentativas acabaram. O número era: ${valorADevolver}`;
            }
        }
    }
});