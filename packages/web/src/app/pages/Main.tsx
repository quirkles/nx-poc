import styled from "styled-components";
import { Outlet } from "react-router-dom";

import {useAppSelector} from "../store/hooks";
import {Header} from "../components";

import {Login} from "./Login";
import {RootState} from "../store";

const MainStyles = styled.div`
  width: 100%;
  height: 100%;
`

export function Main() {
  const email = useAppSelector((state: RootState) => state.user.email)
  return email ? (
    <MainStyles>
      <Header/>
      <div>
        <Outlet></Outlet>
      </div>
    </MainStyles>
  ) : (<Login></Login>);
}
