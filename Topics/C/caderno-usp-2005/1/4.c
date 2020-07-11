#include <stdio.h>



void solucao(int x, int n) {
    int res = 1;

    int i;
    for (i = 0; i < n; i++) {
        res *= x;
    }

    printf("res = %d", res);

    printf("\n");
}


int main() {
    solucao(2, 2);
    solucao(2, 3);
    solucao(3, 2);
    solucao(3, 3);


    return 0;
}