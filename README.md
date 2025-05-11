# ScripTown – Interactive City Showcase using JavaScript, HTML, and CSS

A fully responsive interactive experience inspired by *Pokémon FireRed*, designed to introduce the developer through a nostalgic game-like city. Built entirely with vanilla JavaScript, HTML, and CSS, ScripTown simulates a 2D explorable town with building entry, collisions, text zones, and mobile/desktop support.

---

## 📋 Project Overview

- Simulates a classic 2D city environment with interactive elements  
- Allows character movement and exploration on desktop and mobile  
- Each building loads its own unique HTML scene with custom logic  
- Fixed 1920x1080 resolution to ensure visual consistency across devices  
- Mobile scaling and controls fully implemented  
- Text trigger zones and collisions differ per scene  

---

## 🔍 Key Features

- Character movement with `WASD` / arrow keys (desktop) or UI buttons (mobile)  
- Clickable buildings that navigate to distinct HTML files  
- Trigger zones that display text when entered  
- Per-scene collision maps to control movement boundaries  
- Visual debug mode for creating and adjusting collision boxes  
- Exportable collision data as JSON for integration into logic  
- Smooth scene transitions and nostalgic visual design  

---

## 💡 Additional Functionalities

- Custom debug mode allows manual collision editing by drag-and-drop
- Custom collision mode (press "C")
- JSON export/import of collision data streamlines development  
- Mobile version has separate collisions and trigger zones for precision  
- All logic is modular and scene-based, allowing scalability  
- Lightweight architecture with no frameworks or external dependencies  

---

## 🧪 Development & Methodology

Developed using:

- **Vanilla JavaScript** for interactivity and logic  
- **HTML** for structure and individual scene rendering  
- **CSS** for layout and retro-style design  
- **JSON** for exporting and loading collision metadata  
- Optional tools like browser dev tools for testing and layout adjustments  

Folder structure separates:

- `/scenes/` individual building HTML files  
- `/js/` character logic, collisions, and utilities  
- `/assets/` for sprites, tilesets, and background images  

The project is version-controlled with Git and designed to run in any modern browser. Future improvements may include audio, character customization, dialogue branching, and game-saving features.
