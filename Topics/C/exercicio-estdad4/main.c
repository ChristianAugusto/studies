#include <stdio.h>
#include <stdlib.h>



#define ORDEM 5


typedef struct bloco {
    int* valores[ORDEM-1];
    struct bloco* blocos[ORDEM];
} Bloco;


Bloco* declarar_bloco() {
    Bloco* novo = (Bloco*)malloc(sizeof(Bloco));

    int i;
    for (i = 0; i < ORDEM - 1; i++) {
        novo->valores[i] = NULL;
    }

    for (i = 0; i < ORDEM - 1; i++) {
        novo->blocos[i] = NULL;
    }
}



void inserir_valor(int valor) {
    
}



int main() {
    Bloco* raiz = declarar_bloco();



    return 0;
}
