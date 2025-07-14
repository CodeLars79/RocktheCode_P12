# 🏛️ Finding Gaudí
### A React-based digital tribute to the life and work of Antoni Gaudí, one of the most visionary architects in history. This web experience blends curated visuals, interactive maps, and a quiz to illuminate Gaudí’s architectural legacy.


## 📌 Overview
### Finding Gaudí is an educational and visual platform that showcases:
- Iconic Gaudí buildings
- An interactive map of his creations
- A short quiz to test your knowledge
- Insightful background information


## 🧠 Features
- 🗺️ Interactive Map: Powered by Google Maps, explore key locations of Gaudí’s works across Catalonia.
- 🏛️ Architecture Explorer: Browse a sortable, searchable list of major buildings with images and external resources.
- ❓ Quiz Section: Test your knowledge of Gaudí’s life and work.
- 📜 About Page: A personal reflection on the influence of Gaudí from the creator.
- 📱 Responsive Design: Optimized for mobile, tablet, and desktop.


## ⚙️ Tech Stack
- Frontend: React, React Router
- Map API: Google Maps JavaScript API
- Styling: CSS 
- Icons & Images: Custom assets in /assets/

## 🧩 React Hooks
### useState
Used to manage dynamic state, e.g.:
Search input and sorting in the Buildings page
Quiz answers and filters

### useEffect
Handles side effects like loading the Google Map once on component mount.

### useReducer
Provides structured state management for the quiz logic, including scoring and progression.

### useMemo
Used to memoize a shuffled subset of quiz questions.

### useRef
References the Google Maps container div to mount the interactive map.

### Custom Hook: useScrollToTop
Automatically scrolls to the top on route changes.


## 🔍 Project Structure


## 🧑‍🎨 Creator
Lars Sorensen, Architect & Web Developer
Built as a tribute to the poetry of Gaudí’s architecture

## 📄 License
This project is open-source and available for non-commercial use and educational purposes.
