export type Color = {
    name: string,
    value: string
};

export type BlockState = {
    active: boolean;
    color: Color;
};

export type FieldState = {
    tetromino?: Tetromino,
    gameOver: boolean,
    blockState: BlockState[][]
};

export type Coordinate = {
    y: number;
    x: number;
}

export type Tetromino = {
    color: Color;
    activeCoordinates: Coordinate[];
    pieceMatrix: Coordinate[][]
};

export type Action = "FALL" | "ROTATE" | "MOVE_RIGHT" | "MOVE_LEFT" | "NEW_TETROMINO";