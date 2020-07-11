#include <stdio.h>



void solucao(int n, int i, int j) {
    int numero;
    for (numero = 0; n > 0; numero++) {
        if (numero % i == 0 || numero % j == 0) {
            printf("%d ", numero);
            n--;
        }
    }


    printf("\n");
}


int main() {
    solucao(6, 2, 3);

    return 0;
}