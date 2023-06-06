import React, { useEffect, useState } from "react";
import { Field } from "./Field";
import { FieldState } from "../types/types";
import { initialFieldState } from "../constants/initialFieldState";
import { executeUpdate } from "../utils/tetrominoFunctions";

export const GameView: React.FC<{}> = () => {

    const [fieldState, setFieldState] = useState<FieldState>(executeUpdate(initialFieldState, "NEW_TETROMINO"));
    const [frame, setFrame] = useState<number>(0);

    setInterval(() => {
        setFieldState(executeUpdate(fieldState, "FALL"));
        setFrame(frame + 1);
    }, 1000);



    return <Field fieldState={fieldState} frame={frame} />;
};