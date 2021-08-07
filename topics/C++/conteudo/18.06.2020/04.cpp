#include <iostream>


using namespace std;


int numeroAleatorio(int menor, int maior) {
    return rand()%(maior-menor+1) + menor;
}


int main(int argc, char const *argv[]) {
    int n;

    cout << "Informe uma ordem de matriz [1,50]: ";
    cin >> n;

    if (n <= 0 || n > 50) {
        cout << "Informe uma ordem de matriz positiva <= 50" << "\n";
        return 0;
    }



    int matriz[n][n];



    srand((unsigned)time(0)); //para gerar números aleatórios reais.

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            matriz[i][j] = numeroAleatorio(-25, 46);
        }
    }



    int soma = 0;

    for (int i = 0, j = n-1; i < n; i++, j--) {
        if (matriz[i][j] % 5 != 0) {
            soma += matriz[i][j];
        }
    }

    cout << "Quantidade de nao multiplos de 5 diagonal principal: " << soma << "\n";



    int qtdParesPositivos = 0;
    for (int i = 0, j = 0; i < n; i++, j++) {
        if (matriz[i][j] % 2 == 0 && matriz[i][j] > 0) {
            qtdParesPositivos++;
        }
    }

    cout << "Quantidade de pares e positivos diagonal secundaria: " << qtdParesPositivos << "\n";



    int maiorElemento = matriz[0][0];
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (matriz[i][j] > maiorElemento) {
                maiorElemento = matriz[i][j];
            }
        }
    }

    cout << "Maior elemento elemento da matriz: " << maiorElemento << "\n";


    return 0;
}
