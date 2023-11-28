function calcularNivel(vitorias, derrotas) {
    var saldoVitorias = vitorias - derrotas;
    var nivel = '';

    if (saldoVitorias <= 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else if (saldoVitorias >= 101) {
        nivel = 'Imortal';
    }
    return nivel;
}

var herois = [
    { nome: "Homem de Ferro", nivel: 10 },
    { nome: "Batmam", nivel: 15 },
    { nome: "Flash", nivel: 50 },
    { nome: "Homem Aranha", nivel: 70 },
    { nome: "Thor", nivel: 81 },
    { nome: "Capitão America", nivel: 89 },
    { nome: "Mulher Maravilha", nivel: 92 },
    { nome: "Superman", nivel: 10001 }
];

for (var i = 0; i < herois.length; i++) {
    var heroi = herois[i];
    var vitorias = heroi.nivel;
    var derrotas = 0;

    heroi.nivel = calcularNivel(vitorias, derrotas);

    console.log("O Herói " + heroi.nome + " tem de saldo de : " + vitorias + " está no nível de : " + heroi.nivel);
}

