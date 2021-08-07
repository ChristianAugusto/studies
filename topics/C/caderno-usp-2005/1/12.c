#include <stdio.h>



int mdc(int a, int b) {
    if (a == 0) {
        return b;
    }
    if (b == 0) {
        return a;
    }

    if (a > b) {
        return mdc(a-b, b);
    }
    else {
        return mdc(a, b-a);
    }
}


void solucao(int num1, int num2) {
    printf("mdc(%d,%d) = %d", num1, num2, mdc(num1, num2));

    printf("\n");
}


int main() {
    solucao(382, 120);
    solucao(24, 15);

    return 0;
}