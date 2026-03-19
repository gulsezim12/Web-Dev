from models import Animal, Dog, Cat

a = Animal("Animal", 5, "gray")
d = Dog("Rex", 3, "black", "Shepherd")
c = Cat("Mimi", 2, "white", 9)

animals = [a, d, c]

for animal in animals:
    print(animal)
    print(animal.info())
    print(animal.speak())
    print("-----")

print(d.fetch())
print(c.climb())