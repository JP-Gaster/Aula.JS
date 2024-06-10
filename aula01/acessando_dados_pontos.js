//Criando dados de clientes
const clientes = {
    nome: "João Paulo",
    idade: 17,
    cpf: "11122233300",
    gmail: "joaopaulosoares@gmail.com",
 }

console.log(clientes.nome)
console.log(`O nome do cliente é ${clientes.nome}, sua idade é ${clientes.idade} anos e seu gmail é ${clientes.gmail}.`)

console.log(`Os últimos digitos do seu cpf são ${clientes.cpf.substring(7,10)}.`)