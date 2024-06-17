const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["(43)99956-0459", "(43)99924-4321"],
    saldo: 200,
    efetua_pagamento: function (valor_compra){
        if(valor_compra > this.saldo){
            console.log("Saldo insuficiente!")
        }else{
            this.saldo = this.saldo - valor_compra;
            console.log(`Pagamento realizado! Novo saldo: ${this.saldo}`)
        }
    }
};
cliente.endereços = [
    {
        rua: "J. Roberto Cruz",
        numero: 108,
        apartamento: false,
        casa: true,
        complemento: "Ao lado da Unidade de Saúde 24 Horas",
    },
];
cliente.endereços.push({
    rua: "Atrol do Bikini",
        numero: 204,
        apartamento: false,
        casa: false,
        complemento: "Ao lado da Fenda do Bikini",
});

cliente.efetua_pagamento(50);