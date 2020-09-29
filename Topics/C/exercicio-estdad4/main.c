#include <stdio.h>
#include <stdlib.h>



#define ORDEM 3


typedef struct bloco {
    int qtd_valores;
    int* valores[ORDEM];

    int qtd_blocos;
    struct bloco* blocos[ORDEM];
} Bloco;


Bloco* declarar_bloco() {
    Bloco* novo = (Bloco*)malloc(sizeof(Bloco));

    novo->qtd_valores = 0;
    novo->qtd_blocos = 0;

    int i;
    for (i = 0; i < ORDEM - 1; i++) {
        novo->valores[i] = NULL;
    }

    for (i = 0; i < ORDEM; i++) {
        novo->blocos[i] = NULL;
    }
}


void ordernar_valores(Bloco* bloco) {
    int i, j;
    for (i = 0; i < bloco->qtd_valores - 1; i++) {
        int posicao = i;
        int menor_valor = *bloco->valores[i];

        for (j = i+1; j < bloco->qtd_valores; j++) {
            if (*bloco->valores[j] < menor_valor) {
                menor_valor = *bloco->valores[j];
                posicao = j;
            }
        }

        if (posicao != i) {
            int aux = *bloco->valores[i];
            *bloco->valores[i] = *bloco->valores[posicao];
            *bloco->valores[posicao] = aux;
        }
    }
}


void liberar_valores(Bloco* bloco) {
    int i;
    for (i = 0; i < ORDEM ; i++) {
        bloco->valores[i] = NULL;
    }

    bloco->qtd_valores = 0;
}



Bloco* inserir_valor(Bloco* bloco, int valor) {
    int posicao_vazia = bloco->qtd_valores < ORDEM - 1 ? bloco->qtd_valores: -1;

    bloco->valores[bloco->qtd_valores] = (int*)malloc(sizeof(int));
    *bloco->valores[bloco->qtd_valores] = valor;
    bloco->qtd_valores++;
    ordernar_valores(bloco);

    printf("posicao_vazia = %d\n", posicao_vazia);

    if (posicao_vazia != -1) {
        return NULL;
    }

    int middle_position = ORDEM % 2 == 0 ? (ORDEM / 2) - 1 : ORDEM / 2;
    int middle_value = *bloco->valores[middle_position];

    int i, j;
    for (i = 0, j = 0; i < ORDEM; i++) {
        if (i == middle_position) {
            continue;
        }

        bloco->blocos[j] = (Bloco*)malloc(sizeof(Bloco));
        bloco->qtd_blocos++;
        inserir_valor(bloco->blocos[j], *bloco->valores[i]);
        j++;
    }


    liberar_valores(bloco);
    inserir_valor(bloco, middle_value);
}



int main() {
    Bloco* raiz = declarar_bloco();


    inserir_valor(raiz, 3);
    inserir_valor(raiz, 2);
    inserir_valor(raiz, 1);


    return 0;
}
