#include <iostream>
#include <math.h>


using namespace std;


void calcularSeV(double R, double r, double h, double &S, double &V) {
    S = 2 * M_PI * h * (R + r) + 2 * M_PI * (pow(R, 2) - pow(r, 2));
    V = M_PI * h * (pow(R, 2) - pow(r, 2));
}


        // qtd args,  args
int main(int argc, char const *argv[]) {
    if (argc < 3) {
        cout << "Informe o \"R\", \"r\" e \"h\"\n";
    }


    double R = atof(argv[1]);
    double r = atof(argv[2]);
    double h = atof(argv[3]);

    double S, V;
    calcularSeV(R, r, h, S, V);

    cout << "S = " << S << ", V = " << V << "\n";


    return 0;
}
