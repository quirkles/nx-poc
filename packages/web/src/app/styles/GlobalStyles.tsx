import styled from "styled-components";
import {colors} from "./variables";

export const GlobalStyles = styled.main`
  height: 100%;
  width: 100%;

  * {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font-family: 'Rubik', sans-serif;

    .font-serif {
      font-family: 'Arvo', serif;
    }

    .font-mono {
      font-family: 'Source Code Pro', serif;
    }

    ul {
      display: block;
      list-style: none;
      padding: 0;
      margin: 0;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 0;
    }

    ${Object.entries(colors).map(([color, hex]) => `.font-${color} { color: ${hex}; }`).join('\n')}
  }
`
