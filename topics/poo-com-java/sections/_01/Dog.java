package sections._01;

public class Dog extends Animal {
  public Dog(String name) {
    super(name);
  }

  public void makeNoise() {
    System.out.printf("%s está fazendo AU AU...\n", this.getName());
  }
}
