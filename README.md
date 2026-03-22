# MapGame

A 2D tile-based game where maps are designed in LDtk and the game logic runs on Phaser 3.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Phaser](https://img.shields.io/badge/Phaser_3-blue)

## Play

**[Launch MapGame](https://kashmot2.github.io/mapgame/)**

## How It Works

1. Design maps visually in [LDtk](https://ldtk.io)
2. Save `.ldtk` files to the `/maps` folder
3. The game engine loads and renders them in-browser

## Project Structure

```
index.html   — Entry point
js/          — Game logic (Phaser 3)
maps/        — LDtk map files
assets/      — Sprites, tilesets, images
```

## Run Locally

```bash
git clone https://github.com/kashmot2/mapgame.git
cd mapgame
python3 -m http.server 8000
# open http://localhost:8000
```

## License

MIT

