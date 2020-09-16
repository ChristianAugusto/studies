#include <stdio.h>
#include <stdlib.h>



typedef int boolean;
#define true 1
#define false 0


typedef struct noA{
    char info;
    struct noA *esq;
    struct noA *dir;
} TNoA;


TNoA* criaNo(char ch) {
    TNoA* novo = (TNoA*)malloc(sizeof(TNoA));

    novo->info = ch;
    novo->esq = NULL;
    novo->dir = NULL;

    return novo;
}


int get_altura_arvore(TNoA* no, int altura) {
    int nova_altura = altura;

    if (no->esq != NULL) {
        int res = get_altura_arvore(no->esq, altura+1);

        if (res > nova_altura) {
            nova_altura = res;
        }
    }

    if (no->dir != NULL) {
        int res = get_altura_arvore(no->dir, altura+1);

        if (res > nova_altura) {
            nova_altura = res;
        }
    }

    return nova_altura;
}

boolean get_arvore_cheia(TNoA* no, int altura_atual, int altura_arvore) {
    if (altura_atual != altura_arvore) {
        if (no->esq == NULL || no->dir == NULL) {
            return false;
        }
    }

    if (no->esq != NULL) {
        boolean res = get_arvore_cheia(no->esq, altura_atual+1, altura_arvore);

        if (!res) {
            return res;
        }
    }

    if (no->dir != NULL) {
        boolean res = get_arvore_cheia(no->dir, altura_atual+1, altura_arvore);

        if (!res) {
            return res;
        }
    }

    return true;
}


int main() {
    TNoA *raiz;
    raiz = criaNo('A');
    raiz->esq = criaNo('B');
    raiz->dir = criaNo('C');
    raiz->dir->esq = criaNo('D');
    raiz->dir->dir = criaNo('E');

    raiz->esq->esq = criaNo('F');
    raiz->esq->dir = criaNo('G');


    printf("get_altura_arvore = %d\n", get_altura_arvore(raiz, 1));

    printf("get_arvore_cheia = %d\n", get_arvore_cheia(raiz, 1, get_altura_arvore(raiz, 1)));


    raiz->esq->esq->esq = criaNo('H');
    raiz->esq->esq->dir = criaNo('I');

    raiz->esq->esq->dir->dir = criaNo('J');


    printf("--------------------------------\n");


    printf("get_altura_arvore = %d\n", get_altura_arvore(raiz, 1));

    printf("get_arvore_cheia = %d\n", get_arvore_cheia(raiz, 1, get_altura_arvore(raiz, 1)));


    return 0;
}