#include <stdio.h>



void solucao(int _number) {
    int num;
    for (num = 1; num < _number - 3; num++) {
        if (num * (num + 1) * (num + 2) == _number) {
            printf("triangular\n");
            return;
        }
    }

    printf("Nao eh triangular");

    printf("\n");
}


int main() {
    solucao(120);
    solucao(6);
    solucao(5);

    return 0;
}