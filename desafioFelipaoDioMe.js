// Classe para definir o usuário
class Usuario {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
}

// Classe para definir o ataque
class Ataque {
    constructor() {
        this.tipos = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };
    }

    // Método para obter o ataque com base no tipo de guerreiro
    obterAtaque(tipo) {
        return this.tipos[tipo.toLowerCase()] || "desconhecido";
    }
}

// Função principal para coletar dados e exibir o resultado
function iniciar() {
    // Coleta as informações do usuário
    let nome = prompt("Digite seu nome:");
    let idade = prompt("Digite sua idade:");
    let tipo = prompt("Digite o seu tipo de guerreiro (mago, guerreiro, monge, ninja):");

    // Cria as instâncias necessárias
    let usuario = new Usuario(nome, idade, tipo);
    let ataque = new Ataque();

    // Obtém o tipo de ataque correspondente
    let tipoAtaque = ataque.obterAtaque(usuario.tipo);

    // Exibe o resultado
    alert(`O ${usuario.tipo} ${usuario.nome} atacou usando ${tipoAtaque}`);
}

// Executa a função
iniciar();