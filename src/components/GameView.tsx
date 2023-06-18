import React, { useEffect, useState } from "react";
import { Field } from "./Field";
import { FieldState } from "../types/types";
import { initialFieldState } from "../constants/initialFieldState";
import { executeUpdate } from "../utils/tetrominoFunctions";

export const GameView: React.FC<{}> = () => {

    const [fieldState, setFieldState] = useState<FieldState>(executeUpdate(initialFieldState, "NEW_TETROMINO"));
    const [frame, setFrame] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFieldState((fs) => executeUpdate(fs, "FALL"));
            setFrame((f) => f + 1);
        }, 500); 
        return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        if(fieldState.gameOver) {
            // do gameover stuff
        }
        if(!fieldState.tetromino) {
            setFieldState((fs) => executeUpdate(fs, "NEW_TETROMINO"))
        }
      }, [fieldState])


    return <Field fieldState={fieldState} frame={frame} />;
};