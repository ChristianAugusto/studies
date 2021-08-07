#include <stdio.h>



void solucao(int* _notas, int _qtdNotas) {
    int maior = _notas[0], menor = _notas[0], i;

    for (i = 1; i < _qtdNotas; i++) {
        if (_notas[i] > maior) {
            maior = _notas[i];
        }

        if (_notas[i] < menor) {
            menor = _notas[i];
        }
    }

    printf("Maior: %d, Menor: %d", maior, menor);

    printf("\n");
}


int main() {
    int notas[] = {90, 50, 35, 60};

    solucao(notas, 4);

    return 0;
}