import styled from "styled-components";

import {Color, colors} from "../../styles/variables";
import {useState} from "react";

const DropDownStyles = styled.div<{ $color?: Color; }>`
  > div.toggle {
    color: ${props => colors[props.$color || colors.blue as Color]};
    border: 2px solid ${props => colors[props.$color || colors.blue as Color]};
    font-size: 1em;
    padding: 0.25em 32px 0.25em 1em;
    width: 100px;
    border-radius: 3px;
    display: block;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    position: relative;

    &::after {
      transition: all 0.1s ease-in-out;
      content: "↓";
      width: 32px;
      text-align: center;
      font-size: medium;
      position: absolute;
      right: 0;
    }

    &:hover {
      box-shadow: 0px -1px 2px -1px ${props => colors[props.$color || colors.blue as Color]} inset;
      &::after {
        font-size: x-large;
        translate: 0 -4px;
        font-weight: bold;
      }
    }
  }
  >ul {
    z-index: 2;
    position: absolute;
    border: 1px solid ${props => colors[props.$color || "blue"]};
    background-color: ${colors["white"]};
    display: none;
    cursor: pointer;
    color: ${props => colors[props.$color || "blue"]};
    li {
      padding: 1em 2em 1em 1em;
      &:hover {
        background-color: ${props => colors[props.$color || colors.blue as Color]}20;

      }
    }
  }
  &.is-open {
    >ul {
      display: flex;
      flex-direction: column;
    }
    >div.overlay {
      width: 100vw;
      height: 100vh;
      position: fixed;
      z-index: 1;
      opacity: 0;
      top: 0;
      left: 0;
    }
  }
`

interface Option<T> {
  text: string,
  value: T
}

interface DropdownProps<T> {
  color?: Color;
  options: Option<T>[]
  onChange?: (selected?: T) => void
}

export function DropDown<T>(props: DropdownProps<T>) {
  const {
    color = "blue",
    options,
    onChange = () => {
    }
  } = props
  const selected = options[0] || {}
  const [displayText, setDisplayText] = useState(selected.text || 'Select')
  const [isOpen, setIsOpen] = useState(false)
  function handleClick(option: Option<T>) {
    setDisplayText(option.text)
    setIsOpen(!isOpen)
    onChange(option.value)
  }
  return (
    <DropDownStyles $color={color} className={`${isOpen ? 'is-open' : ''}`}>
      <div className="toggle" onClick={() => setIsOpen(!isOpen)}>{displayText}</div>
      <ul className={`dd-options`}>
        {options.map((opt, i) => <li key={i} onClick={() => handleClick(opt)}><DropDownOption option={opt}></DropDownOption></li>)}
      </ul>
      {isOpen ?
        <div className='overlay' onClick={() => setIsOpen(!isOpen)}></div> : null
      }
    </DropDownStyles>
  )
}

function DropDownOption<T>(props: {
  option: Option<T>
}) {
  return <div>{props.option.text}</div>
}
