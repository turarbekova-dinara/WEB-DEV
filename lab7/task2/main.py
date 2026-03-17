from models import Animal, Dog, Cat

def main():
    dog1 = Dog("Rex", 3, "Brown", "Labrador")
    cat1 = Cat("Mimi", 2, "White", True)
    animal1 = Animal("Generic", 5, "Gray")

    animals = [dog1, cat1, animal1]

    for animal in animals:
        print(animal)             
        print(animal.info())      
        print(animal.speak())     
        print("-" * 30)

    print(dog1.fetch())
    print(cat1.sleep())


if __name__ == "__main__":
    main()