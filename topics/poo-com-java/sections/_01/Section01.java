package sections._01;

public class Section01 {
  public static void run() {
    var dog = new Dog("Tina");
    var cat = new Cat("Suzy");
    var animalSounds = new AnimalSounds();

    animalSounds.playSound(dog);
    animalSounds.playSound(cat);
  }
}
