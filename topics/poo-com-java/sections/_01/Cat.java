package sections._01;

public class Cat extends Animal {
  public Cat(String name) {
    super(name);
  }

  public void makeNoise() {
    System.out.printf("%s está fazendo MIAU...\n", this.getName());
  }
}
