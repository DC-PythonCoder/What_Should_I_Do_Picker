import random


OPTIONS = [
    "Play a game",
    "Watch a film",
    "Go for a walk",
    "Read a book",
    "Work on a project",
    "Cook a new recipe",
    "Listen to music",
    "Exercise",
    "Go surfing",
    "Learn a new skill",
    "Go for a drive",
    "Meditate",
    "Study",
    "Learn a language" 
]


def main():
    print("Welcome to the What Should I Do? picker!")

    while True:
        pick = random.choice(OPTIONS)
        print(f"\nYour pick: {pick}")

        while True:
            answer = input("Pick again? y/n: ").strip().lower()

            if answer in ("y", "n"):
                break

            print("Please enter 'y' or 'n'.")

        if answer == "n":
            break

    print("Goodbye!")


if __name__ == "__main__":
    main()