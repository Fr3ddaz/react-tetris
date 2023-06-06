import { Tetromino } from "../types/types";
import { red } from "./colors";

export const OTetromino: Tetromino = {
    color: red,
    activeCoordinates: [
        {
            x: 4,
            y: 0
        },
        {
            x: 4,
            y: 1
        },
        {
            x: 5,
            y: 0
        },
        {
            x: 5,
            y: 1
        }
    ],
    pieceMatrix: [
        [{x: 0, y: 0}, {x: 0, y: 1}],
        [{x: 1, y: 0}, {x: 1, y: 1}]
    ]
};