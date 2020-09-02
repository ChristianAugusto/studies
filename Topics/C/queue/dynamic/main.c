#include <stdio.h>
#include <stdlib.h>



typedef int boolean;

#define true 1
#define false 0


typedef struct element {
    int id;
    struct element * next;
} Element;



Element* createElement(int id) {
    Element* new = (Element*)malloc(sizeof(Element));

    new->id = id;

    return new;
}

void printElement(Element* element) {
    printf("%d\n", element->id);
}



typedef struct {
    Element* head;
    Element* last;
    int size;
} Queue;


Queue* createQueue() {
    Queue* new = (Queue*)malloc(sizeof(Queue));

    new->head = NULL;

    return new;
}

boolean emptyQueue(Queue* queue) {
    return !queue->head;
}

boolean enqueue(Queue* queue, Element* element) {
    element->next = NULL;

    if (emptyQueue(queue)) {
        queue->head = element;
    }
    else {
        queue->last->next = element;
    }

    queue->last = element;
    queue->size++;

    return true;
}

Element* dequeue(Queue* queue) {
    if (emptyQueue(queue)) {
        return NULL;
    }

    Element* aux;
    aux = queue->head;

    if (queue->size == 1) {
        queue->head = NULL;
        queue->last = NULL;
    }
    else {
        queue->head = queue->head->next;
    }

    queue->size--;

    return aux;
}

Element* peek(Queue* queue) {
    return queue->head;
}

void printQueue(Queue* queue) {
    if (emptyQueue(queue)) {
        printf("Empty queue\n");
        return;
    }

    Element* aux = queue->head;

    while (aux != NULL) {
        printElement(aux);

        aux = aux->next;
    }
}



int main() {
    Queue* queue = createQueue();


    enqueue(queue, createElement(1));
    enqueue(queue, createElement(2));
    enqueue(queue, createElement(3));
    enqueue(queue, createElement(4));


    printQueue(queue);


    dequeue(queue);


    printf("--------------\n");
    printQueue(queue);


    enqueue(queue, createElement(5));
    dequeue(queue);
    enqueue(queue, createElement(6));
    dequeue(queue);


    printf("--------------\n");
    printQueue(queue);


    dequeue(queue);
    dequeue(queue);
    dequeue(queue);


    printf("--------------\n");
    printQueue(queue);
    printf("--------------\n");


    enqueue(queue, createElement(1));
    enqueue(queue, createElement(2));
    enqueue(queue, createElement(3));
    enqueue(queue, createElement(4));


    printElement(peek(queue));


    printf("--------------\n");
    printQueue(queue);


    return 0;
}
