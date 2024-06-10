const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["(43)99956-0459", "(43)99924-4321"],
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
})
console.log(cliente.endereços);