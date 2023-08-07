import styled from "styled-components";
import {useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../store/hooks";
import {Button, DropDown} from "./styled";
import {setEmail} from "../store/user";
import {pages} from "../pageConfig";

const HeaderStyles = styled.div`
  border-bottom: 1px solid black;

  header {
    display: flex;
    align-items: center;

    > * {
      margin: 1em 1em;

      &:first-child {
        flex-grow: 1;
      }
    }
  }
`

export function Header() {
  const email = useAppSelector((state) => state.user.email)
  const dispatch = useAppDispatch()
  const navigate = useNavigate();


  const options = pages.map(page => ({
    value: page.path,
    text: page.appName
  }))

  function handleChange(option?: string) {
    if(option !== undefined) {
      navigate(`/${option}`)
    }
  }

  return (
    <HeaderStyles>
      <header>
        <h5 className="font-purple font-mono">Copilot +</h5>
        <DropDown
          options={options}
          onChange={handleChange}
        ></DropDown>
        <div className="font-orange font-mono">{email}</div>
        <Button $color="red" className="font-mono" onClick={() => {
          localStorage.removeItem('GCP_JWT')
          dispatch(setEmail(null))
        }}>
          logout
        </Button>
      </header>
    </HeaderStyles>
  );
}
