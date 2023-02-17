function Pessoa(nome) {  //classe "Pessoa" é uma classe de abstração. Ela define as propriedades e métodos, como nome e ações de dizer "oi", "cargo" e "salário". 
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
    this.dizSalario = function() {
        console.log(this.salario);
    }
}

function Funcionario(nome, cargo, salario) { //classe "Funcionário" é a primeira classe herdeira e adiciona duas propriedade "cargo" e "salario".
    this.cargo = cargo;
    //this.salario = salario;
    let _salario = salario;

    this.getSalario = function() {
        return `O salário de ${this.nome} é ${_salario}`;
    }
    
    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() { //Polimorfismo (Executar mesma tarefa de formas diferentes).
        const novoSalario = _salario * 1.1;
        console.log(novoSalario);
        _salario = novoSalario;
    }

    Pessoa.call(this,nome);
}

const funcionario1 = new Funcionario("Bianca", "dev Front-end", "5000");  //Foram criadas três instâncias da classe "Funcionario".
const funcionario2 = new Funcionario("Paula", "dev Back-end", "8000");
const funcionario3 = new Funcionario("Leandro", "Gerente de Projetos", "12000");

funcionario1.dizOi();
funcionario1.dizCargo();
funcionario1.aumento(); //Polimorfismo
console.log(funcionario1.getSalario());

funcionario2.dizOi();
funcionario2.dizCargo();
funcionario2.setSalario('mil');
console.log(funcionario2.getSalario());

funcionario3.dizOi();
funcionario3.dizCargo();
funcionario3.setSalario('mil');
console.log(funcionario3.getSalario());


function DonoDaEmpresa(nome, cargo, salario) { //classe "DonoDaEmpresa" é a segunda classe herdeira e adiciona duas propriedades "cargo" e "salário".
    this.cargo = cargo;
    //this.salario = salario;
    let _salario = salario;

    this.getSalario = function() {
        return `O salário de ${this.nome} é ${_salario}`;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    Pessoa.call(this,nome);
}

const DonoDaEmpresa1 = new DonoDaEmpresa("Fernando", "Diretor", "30000"); //foram criados três instâncias da classe "DonoDaEmpresa".
const DonoDaEmpresa2 = new DonoDaEmpresa("Ricardo", "Presidente", "30000");
const DonoDaEmpresa3 = new DonoDaEmpresa("Brenda", "CEO", "30000");

DonoDaEmpresa1.dizOi();
DonoDaEmpresa1.dizCargo();
DonoDaEmpresa1.setSalario('mil');
console.log(DonoDaEmpresa1.getSalario());

DonoDaEmpresa2.dizOi();
DonoDaEmpresa2.dizCargo();
DonoDaEmpresa2.setSalario('mil');
console.log(DonoDaEmpresa2.getSalario());

DonoDaEmpresa3.dizOi();
DonoDaEmpresa3.dizCargo();
DonoDaEmpresa3.setSalario('mil');
console.log(DonoDaEmpresa3.getSalario());



