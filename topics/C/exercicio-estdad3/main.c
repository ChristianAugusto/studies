#include <stdio.h>
#include <stdlib.h>



typedef int boolean;
#define true 1
#define false 0


typedef struct noA{
    char info;
    struct noA *esq;
    struct noA *dir;
    boolean esquerda_visitada;
    boolean direita_visitada;
} TNoA;


typedef struct elemento
{
    TNoA* no;
    struct elemento * prox;
} Elemento;


typedef struct pilha
{
    Elemento* topo;
    int qtd_elementos;
} Pilha;


Pilha* criar_pilha() {
    Pilha* nova = malloc(sizeof(Pilha));

    nova->topo = NULL;
    nova->qtd_elementos = 0;

    return nova;
}


Elemento* criar_elemento(TNoA* no) {
    Elemento* novo = malloc(sizeof(Elemento));

    novo->no = no;
    novo->prox = NULL;

    return novo;
}


void adicionar_na_pilha(Pilha* pilha, Elemento* novo) {
    if (pilha->qtd_elementos == 0) {
        pilha->topo = novo;
    }
    else {
        Elemento* aux = pilha->topo;
        pilha->topo = novo;
        novo->prox = aux;
    }

    pilha->qtd_elementos++;
}


Elemento* remover_da_pilha(Pilha* pilha) {
    if (pilha->qtd_elementos == 0) {
        return NULL;
    }

    Elemento* aux = pilha->topo;

    pilha->topo = pilha->topo->prox;

    pilha->qtd_elementos--;

    return aux;
}


TNoA* criaNo(char ch) {
    TNoA* novo = (TNoA*)malloc(sizeof(TNoA));

    novo->info = ch;
    novo->esq = NULL;
    novo->dir = NULL;
    novo->esquerda_visitada = false;
    novo->direita_visitada = false;

    return novo;
}


void percorrer_ordem_simetrica(TNoA* raiz) {
    Pilha* pilha = criar_pilha();

    TNoA* aux1 = raiz;

    while (1) {
        if (aux1->esq != NULL && !aux1->esquerda_visitada) {
            aux1->esquerda_visitada = true;
            adicionar_na_pilha(pilha, criar_elemento(aux1));
            aux1 = aux1->esq;
            continue;
        }
        aux1->esquerda_visitada = true;

        if (aux1->dir != NULL && !aux1->direita_visitada) {
            aux1->direita_visitada = true;
            adicionar_na_pilha(pilha, criar_elemento(aux1));
            aux1 = aux1->dir;
            continue;
        }
        aux1->direita_visitada = true;

        printf("%c ", aux1->info);

        Elemento* aux2 = remover_da_pilha(pilha);
        if (aux2 == NULL) {
            break;
        }

        aux1 = aux2->no;
    }

    printf("\n");
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

    raiz->esq->esq->esq = criaNo('H');
    raiz->esq->esq->dir = criaNo('I');

    raiz->esq->esq->dir->dir = criaNo('J');


    percorrer_ordem_simetrica(raiz);



    return 0;
}