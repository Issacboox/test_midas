interface Board {
    ladders: [number, number][];
    snakes: [number, number][];
}

function quickestPath(board: Board): number[] {
    const visited = new Set<number>();
    const path: number[] = [];
    const rolls = [6, 5, 4, 3, 2, 1];

    function findPath(currentPos: number, rollsLeft: number): boolean {
        if (currentPos === 100) {
            return true;
        }

        if (rollsLeft === 0) {
            return false;
        }

        for (const roll of rolls) {
            const nextPos = currentPos + roll;

            if (board.ladders.some(([start, end]) => start === nextPos)) {
                if (findPath(board.ladders.find(([start, end]) => start === nextPos)![1], rollsLeft - 1)) {
                    path.push(roll);
                    return true;
                }
            } else if (board.snakes.some(([start, end]) => start === nextPos)) {
                if (findPath(board.snakes.find(([start, end]) => start === nextPos)![1], rollsLeft - 1)) {
                    path.push(roll);
                    return true;
                }
            } else if (!visited.has(nextPos) && nextPos <= 100) {
                visited.add(nextPos);
                if (findPath(nextPos, rollsLeft - 1)) {
                    path.push(roll);
                    return true;
                }
            }
        }

        return false;
    }

    findPath(1, 6);

    return path.reverse();
}

// Example board
const board: Board = {
    ladders: [[3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93]],
    snakes: [[21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66]]
};

console.log(quickestPath(board)); 
