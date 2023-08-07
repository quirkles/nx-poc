import styled from "styled-components";

import {Color, colors} from "../../styles/variables";

export const Button = styled.button<{ $color?: Color; }>`
    color: ${props => colors[props.$color || colors.blue as Color]};
    border: 2px solid ${props => colors[props.$color || colors.blue as Color]};
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    display: block;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    box-shadow: inset -0.1em -0.1em ${props => colors[props.$color || colors.blue as Color]};
      &:hover {
        box-shadow: inset 0.05em 0.05em ${props => colors[props.$color || colors.blue as Color]};
        translate: 0.1em 0.1em;
      }
`
