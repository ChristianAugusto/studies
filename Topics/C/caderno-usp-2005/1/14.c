#include <stdio.h>


int fibonacci(int n) {
    if (n < 1) {
        return -1;
    }
    else if (n == 1 || n == 2) {
        return 1;
    }


    int anterior = 1;
    int atual = 1;

    n -= 2;
    while (n > 0) {
        int aux = atual;

        atual += anterior;
        anterior = aux;

        n--;
    }

    return atual;
}


void solucao(int n) {
    printf("%d\n", fibonacci(n));
}


int main() {
    solucao(1);
    solucao(2);
    solucao(3);
    solucao(4);
    solucao(5);
    solucao(6);
    solucao(7);
    solucao(8);

    return 0;
}