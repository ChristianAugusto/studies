#include <stdio.h>
#include <stdlib.h>



struct reg {
    int	conteudo;
    struct reg* prox;
};
typedef struct reg celula;

//Versao super resumida
int lista_vazia(celula* lista) {
    return !lista->prox;
};



void imprime_rec(celula* ll) {
    if (ll) {
        printf("%d\n", ll->conteudo);
        imprime_rec(ll->prox);
    }
};


void imprime_elementos(celula* ll) {
    celula* atual = ll;
    while (atual) {
        printf("%d\n", atual->conteudo);
        atual = atual->prox;
    }
};


void imprime_elementos_reverso(celula* ll) {
    if (ll == NULL)
        return;

    imprime_elementos_reverso(ll->prox);
    printf("%d\n", ll->conteudo);
}


celula* busca_elemento(int elem, celula* lista) {
    celula* atual = lista;
    while (atual) {
        if (atual->conteudo = elem) return atual;  atual = atual->prox;
    }
    return NULL;
};

celula* busca_elemento_rec(int elem, celula* lista) {
    if (!lista) return NULL;
    if (lista->conteudo == elem) {
        return lista;
    }
    else {
        return busca_elemento_rec(elem, lista->prox);
    }
};


void busca_e_remove(int elem, celula* lista) {
    celula* p, * q;
    p = lista;
    q = lista->prox;
    while (q != NULL && q->conteudo != elem) {
        p = q;
        q = q->prox;
    }
    if (q != NULL) {
        p->prox = q->prox;  free(q);
    }
}


void insere_elemento(int elem, celula* lista) {
    celula* nova;
    nova = (celula*) calloc(1, sizeof(celula));
    nova->conteudo = elem;
    nova->prox = lista->prox;  
    lista->prox = nova;
}


//Remove a celula seguinte a celula apontada por p
void remove_elemento(celula* p) {
    celula* removida;
    removida = p->prox;
    p->prox = removida->prox;  free(removida);
}

celula* insere_inicio(int elem, celula* inicial) {
    celula* nova;
    nova = (celula*) calloc(1, sizeof(celula));
    nova->conteudo = elem;
    nova->prox = inicial;
    return nova; /* devolve o inı́cio da lista */
}




int main() {
    celula* lista;
    lista = (celula*) malloc(sizeof(celula));
    lista->prox = NULL;

    insere_elemento(3, lista);
    insere_elemento(1, lista);
    insere_elemento(4, lista);
    insere_elemento(1, lista);
    insere_elemento(5, lista);

    imprime_elementos(lista);

    printf("----------------\n");

    imprime_elementos_reverso(lista);

    return 0;
}