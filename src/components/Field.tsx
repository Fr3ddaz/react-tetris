import React from "react";
import { Block } from "./Block";
import { FieldState } from "../types/types";

type Props = {
    fieldState: FieldState;
    frame: number;
};

export const Field: React.FC<Props> = (props: Props) => {

    return (
        <table>
            {props.fieldState.blockState.map(blockRow => {
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
        </table>);
};