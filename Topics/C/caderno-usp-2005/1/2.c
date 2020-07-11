#include <stdio.h>



void solucao(int n) {
    int i, soma = 0;
    for (i = 1; i <= n; i++) {
        soma += i;
    }

    printf("Soma = %d", soma);

    printf("\n");
}


int main() {
    solucao(5);
    solucao(10);


    return 0;
}