#include <stdio.h>



void solucao(int* _array, int _len) {
    int i;
    for (i = 0; i < _len; i++) {
        printf("%d ", _array[i] * _array[i]);
    }

    printf("\n");
}


int main() {
    int array[] = {1,2,3,4,5};

    solucao(array, 5);


    return 0;
}