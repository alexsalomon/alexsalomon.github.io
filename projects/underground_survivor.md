---
layout: project-layout
project-name: Underground Survivor
image_sources:
  - /assets/img/projects/underground-survivor/main_menu.jpg
  - /assets/img/projects/underground-survivor/wave1_start.jpg
  - /assets/img/projects/underground-survivor/enemies_coming.jpg
  - /assets/img/projects/underground-survivor/gameplay_4.jpg
  - /assets/img/projects/underground-survivor/wave4.jpg
  - /assets/img/projects/underground-survivor/game_over.jpg
<!-- source-code: https://github.com/alexsalomon/underground-survivor -->
downloadable: true
download-windows: http://bit.ly/MtCjwg
---

## Introduction

   Underground Survivor is a project I worked on during the winter of 2012. The idea was to create a game from scratch, designing not only the game logic, but also the entire game engine and graphics. Although most of the basic functionality such as player control, rendering, animation system and artificial intelligence has already been implemented, the game is still a prototype, and, as such, some of the graphics were taken from other websites, which I cite in the game.
  
   This project reflected my desire to understand how games work underneath the hood: their physics, mechanics and the challenges involved in making them. While developing this game, I used a full object oriented approach, keeping code readability, re-usability and maintainability as my priority. When I first started, I barely knew C++ or how to create a project inside Visual Studio 2010. I have come a long way from looking up tutorials online on how to create a Win32 application and display a window to the screen to have produced a fully functional game. 

## Languages, Libraires and Frameworks
   - C++
   - [DevIL](http://openil.sourceforge.net/about.php)
   - [OpenGL](http://www.opengl.org/)
   - [googletest](https://code.google.com/p/googletest/)

## Game Idea and Gameplay

   The game idea is quite simple: In 2015, a plague broke out in some of the major cities on Earth, turning most of its inhabitants into zombies. To stop the plague, many soldiers were sent to those cities in order to surround the area and contain the infestation. Unfortunately for our main character, Beatriz, something went wrong and she was left behind in the middle of one of those cities. Running for her life, Beatriz fell into a  surrounded underground place, calling a lot of attention to herself. In order to return to the surface, she has to  free her way out through one of the ten passages around her, killing as many zombies as necessary to survive.  

   Beatriz starts with a simple pistol which currently has unlimited bullets. She can be controlled by using the up, down, left and right arrows on the keyboard. Use the mouse to aim at the enemies and the left button to shoot. You can also press the Pause button in order to pause your game. Zombies arrive in waves and the higher the wave number is, the harder it gets. Your job is to kill as many zombies as you can. Be aware that zombies can come from any directions. 

   In the next versions of the game, I plan on adding a limit on how many bullets can be fired with each weapon before a new one is needed, as well as a new variety of weapons that come from the surface and items that will increase the player's health and attack bonuses. Underground Survivor will also have a high score count and support for multiple players in the future.
