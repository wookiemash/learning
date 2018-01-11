# learning
The purpose of this project is to create an AI that teaches itself to solve a maze in the shortest amount of moves.

**Run Project:**
To run the project, navigate to the learning folder and just open the html file called `view.html`.

**Files**
1. _map.js_: This acts as the MAIN function of the entire project. It initializes the map from creating
the blocks and also creates the AI character. It then calls necassary functions that need to be run everyframe.
2. _Block.js_: The Block file is a class that acts as the map for the Ai to traverse. It holds values such as how
likely the AI will choose _this block_ when it has the option. 
3. _Ai.js_:This file is where most everything is going on. From here the AI communicates with all the blocks one tile
space away from it and decides which would be the best block to move to. 

**Libraries Being Used:** `p5.js:` This library allows the creation of elements in the browser without having to write any html
at all. The library can be found here: [p5 library](https://p5js.org/).

*NOTES*
* I have no idea if I wrote this git README file properly at all. Hence, I would really appreciate the feedback for any errors you do see. 
