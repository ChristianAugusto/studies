package sections._01;

public abstract class Animal {
  public Animal(String name) {
    this.name = name;
  }

  private String name;

  abstract void makeNoise();

  public String getName() {
    return this.name;
  }
}
