public class Main {
  public static void main(String[] args) {
    int limiteAtual = 80000;
    int limiteDisponivelAlvo = 6580;
    int limiteDisponivelAtual = 15786;

    int novoLimite = limiteAtual - limiteDisponivelAtual + limiteDisponivelAlvo;
    double novoLimiteFormatado = novoLimite / 100.0;

    System.out.println(novoLimite);
    System.out.printf("Novo limite: %.2f\n", novoLimiteFormatado);
  }
}
