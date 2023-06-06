import { OTetromino } from "../constants/tetrominoes"
import { Action, FieldState, Tetromino } from "../types/types";

const setTetrominoInPlace = (fieldState: FieldState): FieldState => {
    if (!fieldState.tetromino) {
        return fieldState;
    }
    fieldState.blockState[fieldState.tetromino.activeCoordinates[0].y][fieldState.tetromino.activeCoordinates[0].x].active = true;
    fieldState.blockState[fieldState.tetromino.activeCoordinates[1].y][fieldState.tetromino.activeCoordinates[1].x].active = true;
    fieldState.blockState[fieldState.tetromino.activeCoordinates[2].y][fieldState.tetromino.activeCoordinates[2].x].active = true;
    fieldState.blockState[fieldState.tetromino.activeCoordinates[3].y][fieldState.tetromino.activeCoordinates[3].x].active = true;
    fieldState.blockState[fieldState.tetromino.activeCoordinates[0].y][fieldState.tetromino.activeCoordinates[0].x].color = fieldState.tetromino.color;
    fieldState.blockState[fieldState.tetromino.activeCoordinates[1].y][fieldState.tetromino.activeCoordinates[1].x].color = fieldState.tetromino.color;
    fieldState.blockState[fieldState.tetromino.activeCoordinates[2].y][fieldState.tetromino.activeCoordinates[2].x].color = fieldState.tetromino.color;
    fieldState.blockState[fieldState.tetromino.activeCoordinates[3].y][fieldState.tetromino.activeCoordinates[3].x].color = fieldState.tetromino.color;
    fieldState.tetromino = undefined;
    return fieldState;
}

const executeFall = (fieldState: FieldState): FieldState => {
    console.log(fieldState)
    if (!fieldState.tetromino) {
        return fieldState;
    }

    if (fieldState.tetromino.activeCoordinates.some(coordinate => {
        coordinate.y == 23;
    })) {
        return setTetrominoInPlace(fieldState)
    }

    if (
        fieldState.blockState[fieldState.tetromino.activeCoordinates[0].y+1][fieldState.tetromino.activeCoordinates[0].x].active
        || fieldState.blockState[fieldState.tetromino.activeCoordinates[1].y+1][fieldState.tetromino.activeCoordinates[1].x].active
        || fieldState.blockState[fieldState.tetromino.activeCoordinates[2].y+1][fieldState.tetromino.activeCoordinates[2].x].active
        || fieldState.blockState[fieldState.tetromino.activeCoordinates[3].y+1][fieldState.tetromino.activeCoordinates[3].x].active
    ) {
        return setTetrominoInPlace(fieldState);
    }

    fieldState.tetromino.activeCoordinates = fieldState.tetromino.activeCoordinates.map(coordinate => {
        return { y: coordinate.y + 1, x: coordinate.x };
    });

    fieldState.blockState[fieldState.tetromino.activeCoordinates[0].y][fieldState.tetromino.activeCoordinates[0].x].color = fieldState.tetromino.color;
    fieldState.blockState[fieldState.tetromino.activeCoordinates[1].y][fieldState.tetromino.activeCoordinates[1].x].color = fieldState.tetromino.color;
    fieldState.blockState[fieldState.tetromino.activeCoordinates[2].y][fieldState.tetromino.activeCoordinates[2].x].color = fieldState.tetromino.color;
    fieldState.blockState[fieldState.tetromino.activeCoordinates[3].y][fieldState.tetromino.activeCoordinates[3].x].color = fieldState.tetromino.color;

    return fieldState;
}

const randomizeTetromino = (): Tetromino => {
    return OTetromino;
}

const generateNewTetromino = (fieldState: FieldState): FieldState => {
    const tetromino = randomizeTetromino();
    fieldState.tetromino = tetromino;
    if (fieldState.blockState[tetromino.activeCoordinates[0].y][tetromino.activeCoordinates[0].x].active
        || fieldState.blockState[tetromino.activeCoordinates[1].y][tetromino.activeCoordinates[1].x].active
        || fieldState.blockState[tetromino.activeCoordinates[2].y][tetromino.activeCoordinates[2].x].active
        || fieldState.blockState[tetromino.activeCoordinates[3].y][tetromino.activeCoordinates[3].x].active) {
        fieldState.gameOver = true;
        return fieldState;
    }

    fieldState.blockState[fieldState.tetromino.activeCoordinates[0].y][fieldState.tetromino.activeCoordinates[0].x].color = fieldState.tetromino.color;
    fieldState.blockState[fieldState.tetromino.activeCoordinates[1].y][fieldState.tetromino.activeCoordinates[1].x].color = fieldState.tetromino.color;
    fieldState.blockState[fieldState.tetromino.activeCoordinates[2].y][fieldState.tetromino.activeCoordinates[2].x].color = fieldState.tetromino.color;
    fieldState.blockState[fieldState.tetromino.activeCoordinates[3].y][fieldState.tetromino.activeCoordinates[3].x].color = fieldState.tetromino.color;

    return fieldState;
}

export const executeUpdate = (fieldState: FieldState, action: Action): FieldState => {
    switch (action) {
        case "FALL":
            return executeFall(fieldState);
        case "NEW_TETROMINO":
            return generateNewTetromino(fieldState);
    }
    return fieldState;
}

