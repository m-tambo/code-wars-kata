// http://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript

// You will be given a 2D array of the maze and an array of directions.
// Your task is to follow the directions given. If you reach the end point before all your moves have gone,
// you should return Finish. If you hit any walls or go outside the maze border, you should return Dead.
// If you find yourself still in the maze after using all the moves, you should return Lost.

const testMaze = [[1,1,1,1,1,1,1],
        		[1,0,0,0,0,0,3],
        		[1,0,1,0,1,0,1],
        		[0,0,1,0,0,0,1],
        		[1,0,1,0,1,0,1],
        		[1,0,0,0,0,0,1],
        		[1,2,1,0,1,0,1]]

// 0 = Safe place to walk
// 1 = Wall
// 2 = Start Point
// 3 = Finish Point

// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
// 2. The start and finish positions will change for the final tests.
// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

const mazeRunner = (maze, directions) => {
	let currentArray, currentIndex;
	for (let i = 0; i < maze.length; i++) { // FIND THE ARRAY AND INDEX OF THE START POINT '2'
		if (maze[i].indexOf(2) != -1) {
			currentArray = i;
			currentIndex = maze[i].indexOf(2);
		}
	}

	for (let k = 0; k < directions.length; k++) { // ADJUST POSITION FOR EACH DIRECTION

		currentArray += directions[k] == 'S' ? 1
						: directions[k] == 'N' ? -1
						: 0;
		currentIndex += directions[k] == 'E' ? 1
						: directions[k] == 'W' ? -1
						:0;

		if (currentArray < 0 || currentArray >= maze.length || currentIndex < 0 || currentIndex >= maze[0].length) {
			return 'Dead'; // IF RUNNER GOES OUTSIDE THE ARRAY, RETURN 'DEAD'
		} else
		if (maze[currentArray][currentIndex] == 1) {
			return 'Dead';
		}
		if (maze[currentArray][currentIndex] == 3) {
			return 'Finish';
		}
	}
	return 'Lost';
}

// tests

// console.log(mazeRunner(testMaze,["N","N","N","N","N","E","E","E","E","E"]), " should be Finish");
// console.log(mazeRunner(testMaze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]), " should be Finish");
// console.log(mazeRunner(testMaze,["N","N","N","N","N","E","E","E","E","E","W","W"]), " should be Finish");
// console.log(mazeRunner(testMaze,["N","N","N","W","W"]), " should be Dead");
// console.log(mazeRunner(testMaze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]), " should be Dead");
// console.log(mazeRunner(testMaze,["N","E","E","E","E"]), " should be Lost");

