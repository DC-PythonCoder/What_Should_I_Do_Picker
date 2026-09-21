# What Should I Do? 🎲

Have you ever been bored out of your mind yet unable to decide what to do? Well I have many times and I feel like this app will help me with that, that's why I created it. Maybe it will help you too.

It does not have categories because what's the point in making a hard "Which category?" choice if you don't have to!

The project started as a Python terminal program. I then built a browser
version using HTML, CSS, and JavaScript.

## Requirements

Python 3. No external packages are required.

## Web app

The page starts with five activity ideas. You can add your own activities,
remove unwanted ones, and click **Pick for me** to choose at random.

Changes to the activity list last until the page is refreshed...

Unless of course you change the initial activities to include all the ones you want in 

## How to Run the App

### 1st Option - Web App
In the [src/script.js](src/script.js) file alter the activities that you want the picker to have as the initial choice to choose from. Then:

(in the terminal)
```bash
explorer.exe index.html
```
or just double click the index.html file

Then click "Pick again" button if you want another activity

### 2nd Option - Simple Python Terminal Program
In the [python/main.py](python/main.py) file alter the activities that you want the picker to choose from. Then:

(in the terminal)
```bash
python main.py
```

Enter `y` for another pick or `n` to exit and end the program with your final choice.

## Project files

- `index.html` — page structure
- `src/style.css` — appearance and responsive layout
- `src/script.js` — activity list and random picker
- `python/main.py` — original terminal version

## License

Copyright © 2026 Diogo Caldeirinha.

This project is available under the PolyForm Noncommercial License 1.0.0.
Personal and other noncommercial use is permitted under its terms.
Commercial use requires my separate permission. See [LICENSE](LICENSE).