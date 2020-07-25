#include <stdio.h>
#include <math.h>



int stringLength(char* string) {
    int len = 0;
    for (len = 0; string[len] != '\0'; len++);
    return len;
}

void solucao(char* numberBin) {
    int numberLen = stringLength(numberBin);

    int numberDec = 0;
    int expoente = 0;

    int i;
    for (i = numberLen - 1; i >= 0; i--, expoente++) {
        if (numberBin[i] == '1') {
            numberDec += pow(2, expoente);
        }
    }

    printf("res = %d\n", numberDec);


    printf("\n");
}


int main() {
    solucao("10010");

    return 0;
}