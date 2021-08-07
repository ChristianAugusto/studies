#include <stdio.h>



void solucao(int _numero) {
    int limit = _numero / 2;

    for (int divisor = 2; divisor <= limit; divisor++) {
        if (_numero % divisor == 0) {
            printf("Nao eh primo\n");
            return;
        }
    }

    printf("Eh primo");

    printf("\n");
}


int main() {
    solucao(2);
    solucao(5);
    solucao(6);
    solucao(12);
    solucao(11);
    solucao(13);

    return 0;
}