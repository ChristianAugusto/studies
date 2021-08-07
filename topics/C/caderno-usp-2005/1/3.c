#include <stdio.h>



void solucao(int n) {
    int numero, count = 0;
    for (numero = 1; count < n; numero++) {
        if (!(numero % 2 == 0)) {
            printf("%d ", numero);
            count++;
        }
    }

    printf("\n");
}


int main() {
    solucao(4);


    return 0;
}