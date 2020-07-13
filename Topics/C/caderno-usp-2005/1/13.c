#include <stdio.h>



void solucao(int numero) {
    int limite = numero / 2;

    int soma = 0;

    int i;
    for (i = 1; i <= limite; i++) {
        if (numero % i == 0) {
            soma += i;

            if (soma > numero) {
                printf("Nao eh perfeito\n");
                return;
            }
        }
    }

    if (soma == numero) {
        printf("Eh perfeito\n");
    }
    else {
        printf("Nao eh perfeito\n");
    }
}


int main() {
    solucao(6);
    solucao(7);

    return 0;
}