function alterarStatus(id) {
    // Responsável por recuperar o id
    let game = document.getElementById(`game-${id}`);
    // Busca imagem e botão por classe 
    let imagem = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');

    // Busca o nome do jogo
    let gameName = game.querySelector('.dashboard__item__name');

    // Remove a classe 'o-ultimo' de qualquer elemento para reiniciar
    document.querySelectorAll('.o-ultimo').forEach(el => el.classList.remove('o-ultimo'));

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Confirmação para devolver o jogo
        if (confirm(`Você deseja devolver o jogo ${gameName.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    } else {
        //passa as condicoes de alugado
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        // Adiciona a classe 'o-ultimo' ao elemento que foi selecionado por último
        game.classList.add('o-ultimo');
    }

    // Impede que 3 jogos sejam selecionados ao mesmo tempo, devolvendo o último selecionado
    verificarJogosSelecionados();
}

function verificarJogosSelecionados() {
    //procura por quantidade de rented´s
    let jogosSelecionados = document.querySelectorAll('.dashboard__item__img--rented');

    //se for maior que 2
    if (jogosSelecionados.length > 2) {
        //procura pela classe adicionada na 1º condicional
        let ultimoSelecionado = document.querySelector('.o-ultimo');
        //se 'ultimo selecionado existir/ for diferente de null
        if (ultimoSelecionado) {
            // se existir procura por classes 
            let imagemUltimoSelecionado = ultimoSelecionado.querySelector('.dashboard__item__img');
            let botaoUltimoSelecionado = ultimoSelecionado.querySelector('.dashboard__item__button');
            let gameNameUltimoSelecionado = ultimoSelecionado.querySelector('.dashboard__item__name');
            //e passa as condicoes de jogo disponivel
            imagemUltimoSelecionado.classList.remove('dashboard__item__img--rented');
            botaoUltimoSelecionado.classList.remove('dashboard__item__button--return');
            botaoUltimoSelecionado.textContent = 'Alugar';
            
            // remove a classe 'o-ultimo'
            ultimoSelecionado.classList.remove('o-ultimo');

            alert(`Você não pode selecionar mais de dois jogos ao mesmo tempo. O último jogo selecionado ${gameNameUltimoSelecionado.textContent}, foi devolvido.`);
        }
    }
}
