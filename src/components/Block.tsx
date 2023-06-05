import React from "react"
import styled from "styled-components";
import { Color } from "../constants/colors";

const StyledSquare = styled.div`
    background: ${props => props.color ? props.color : "white"};;
    width: 2rem;
    height: 2rem;
`;

type Props = {
    color: Color;
}

export const Block: React.FC<Props> = (props: Props) => {
    return <StyledSquare color={props.color.value} />
}