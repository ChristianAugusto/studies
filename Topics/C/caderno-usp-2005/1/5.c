#include <stdio.h>



void solucao(int* _discosVendidosDias, int _dias) {
    int maior = _discosVendidosDias[0];
    int posicaoMaior = 0;

    int i;
    for (i = 1; i < _dias; i++) {
        if (_discosVendidosDias[i] > maior) {
            maior = _discosVendidosDias[i];
            posicaoMaior = i + 1;
        }
    }

    printf("Dia maior venda: %d, quantidade: %d", posicaoMaior, maior);

    printf("\n");
}


int main() {
    int discosVendidosDias[] = {1,2,1,3};

    solucao(discosVendidosDias, 4);

    return 0;
}