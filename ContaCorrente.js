import { Conta } from './conta.js';

// extends: Herança: extende tudo que estiver na classe Conta;
export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        // super(): palavra especial que vai chamar o constructor da classe pai
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    } 

    sacar(valor) {
        let taxa = 1.1;
       return this._sacar(valor, taxa);
    }
}
