import React from "react";
import { Block } from "./Block";
import { FieldState } from "../types/types";
import { drawBlockStateWithTetromino } from "../utils/tetrominoFunctions";

type Props = {
    fieldState: FieldState;
    frame: number;
};

export const Field: React.FC<Props> = (props: Props) => {

    const blocks = drawBlockStateWithTetromino(props.fieldState.blockState, props.fieldState.tetromino)

    return (
        <>
        {props.frame}
        <table>
            {blocks.map(blockRow => {
                return (
                    <tr>
                        {blockRow.map(block => {
                            return (
                                <th>
                                    <Block color={block.color} />
                                </th>
                            )
                        })}
                    </tr>
                )
            })}
        </table>
        </>);
};