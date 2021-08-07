#include <stdio.h>



void solucao(int n, int j, int m) {
    int modulo = j % m;

    int i;
    for (i = 0; n > 0; i++) {
        if (i % m == modulo) {
            printf("%d ", i);
            n--;
        }
    }


    printf("\n");
}


int main() {
    solucao(20, 39, 4);

    return 0;
}