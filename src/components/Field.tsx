import React from "react"
import { Block } from "./Block"
import { gray } from "../constants/colors"


export const Field: React.FC<{}> = () => {

    let blocks: any[] = [];

    for (var i = 0; i < 24; i++) {
        blocks.push(<tr>
            <th><Block color={gray} /></th>
            <th><Block color={gray} /></th>
            <th><Block color={gray} /></th>
            <th><Block color={gray} /></th>
            <th><Block color={gray} /></th>
            <th><Block color={gray} /></th>
            <th><Block color={gray} /></th>
            <th><Block color={gray} /></th>
            <th><Block color={gray} /></th>
            <th><Block color={gray} /></th>
        </tr>);
      }

    return (
        <table>
            {blocks.map(block => {return block})}
        </table>)
}