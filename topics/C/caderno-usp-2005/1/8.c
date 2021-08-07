#include <stdio.h>



void solucao(int n) {
    int fatorial = 1;

    int i;
    while (n > 1) {
        fatorial *= n;
        n--;
    }

    printf("%d", fatorial);

    printf("\n");
}


int main() {
    solucao(2);
    solucao(3);
    solucao(4);

    return 0;
}