function calcularSaldoVitoria(qtdVitorias, qtdDerrotas) {
    let saldo = qtdVitorias - qtdDerrotas
    return saldo
}


function analisarRanking(saldo) {
    switch (true) {
        case saldo <= 10:
            nivel = "Ferro"
            return nivel;
        case saldo >= 11 && saldo <= 20:
            nivel = "Bronze"
            return nivel;
        case saldo >= 21 && saldo <= 50:
            nivel = "Prata"
            return nivel;
        case saldo >= 51 && saldo <= 80:
            nivel = "Ouro"
            return nivel;
        case saldo >= 81 && saldo <= 90:
            nivel = "Diamante"
            return nivel;
        case saldo >= 91 && saldo <= 100:
            nivel = "Lendário"
            return nivel;
        case saldo >= 101:
            nivel = "Imortal"
            return nivel;
    }
}


function exibirMensagem(saldoVitorias, nivel) {
    console.log(`O herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)
}


function exibirNivelJogador(qtdVitorias, qtdDerrotas) {
    let saldo = calcularSaldoVitoria(qtdVitorias, qtdDerrotas)
    let ranking = analisarRanking(saldo)
    exibirMensagem(saldo, ranking)
}


exibirNivelJogador(100, 25)