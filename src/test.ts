import PF from "pathfinding";

const grid = new PF.Grid(6, 6);

const finder = new PF.AStarFinder({
  diagonalMovement: PF.DiagonalMovement.Never
});

const path = finder.findPath(0, 0, 4, 5, grid);

console.log(path);
