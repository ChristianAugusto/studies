#include <stdio.h>
#include <stdlib.h>



int stringLength(char* string) {
    int len = 0;
    for (len = 0; string[len] != '\0'; len++);
    return len;
}

char* concat(char* str1, char* str2) {
    int newLen = stringLength(str1) + stringLength(str2) + 1;
    char* newStr = (char*)malloc(newLen * sizeof(char));


    int i, j = 0;


    for (i = 0; str1[i] != '\0'; i++, j++) {
        newStr[j] = str1[i];
    }

    for (i = 0; str2[i] != '\0'; i++, j++) {
        newStr[j] = str2[i];
    }

    newStr[newLen-1] = '\0';


    return newStr;
}


char* reverseStr(char* str) {
    int strLen = stringLength(str);
    char* newStr = (char*)malloc((strLen+1) * sizeof(char));

    int i, j;
    for (i = strLen - 1, j = 0; i >= 0; i--, j++) {
        newStr[j] = str[i];
    }

    newStr[strLen] = '\0';

    return newStr;
}


void solucao(int number) {
    char* binary = NULL;

    while (1) {
        int bit = number % 2;
        char bitc[2];

        if (binary == NULL) {
            sprintf(bitc, "%d", bit);
            binary = concat("", bitc);
        }
        else {
            sprintf(bitc, "%d", bit);
            binary = concat(binary, bitc);
        }

        number /= 2;

        if (number == 1) {
            binary = concat(binary, "1");
            break;
        }
        else if (number == 0) {
            binary = concat(binary, "0");
            break;
        }
    }

    binary = reverseStr(binary);

    printf("res = %s\n", binary);
}


int main() {
    solucao(3);
    solucao(2);
    solucao(4);
    solucao(5);

    return 0;
}