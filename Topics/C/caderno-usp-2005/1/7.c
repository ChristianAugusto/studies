#include <stdio.h>



void solucao(int* _array, int _len) {
    int i, soma = 0;
    for (i = 0; i < _len; i++) {
        if (_array[i] % 2 == 0) {
            soma += _array[i];
        }
    }

    printf("Soma = %d", soma);

    printf("\n");
}


int main() {
    int array[] = {1,2,3,4};

    solucao(array, 4);

    return 0;
}