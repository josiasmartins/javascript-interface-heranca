/**
    ser autenticavel significa ter um método autenticar
 */

export class SistemaAutenticacao {

    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    // chamo ele direto, porque ele é um método static
    static ehAutenticavel(autenticavel) {
        // operator in: verifica se a chave ('autenticar') existe dentro do objeto (autenticavel)
        // instaceof: se é uma instancia de uma função
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}