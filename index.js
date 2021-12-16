import { Cliente } from './Cliente.js';
import { Gerente } from './funcionarios/gerente.js';
import { Diretor } from './funcionarios/diretor.js';
import { SistemaAutenticacao } from './sistemaAutenticacao.js';

const diretor = new Diretor('Rodrigo', 1000, 12345665);
diretor.cadastrarSenha('1234')
const gerente = new Gerente('Gabi', 5000, 12345454);
gerente.cadastrarSenha('123')

const cliente = new Cliente('Gabi', 80093439454, 1234);
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '1234');
const onLoginGerente = SistemaAutenticacao.login(gerente, '123');
const clienteLogado = SistemaAutenticacao.login(cliente, '123');

console.log(diretorEstaLogado, onLoginGerente, clienteLogado)
































// import {Cliente} from "./Cliente.js"
// import {ContaCorrente} from "./conta/ContaCorrente.js"
// import { ContaPoupanca } from './conta/contaPoupanca.js';
// import { Conta } from './conta/conta.js';
// import { ContaSalario } from './conta/contaSalario.js';

// const cliente1 = new Cliente("Ricardo", 11122233309);

// const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);
// console.log(contaSalario);    
// // console.log(conta);
