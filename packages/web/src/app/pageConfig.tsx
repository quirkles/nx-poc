import {Applications, Flows, Home, Programs} from "./pages";
import {ReactElement} from "react";

interface PageConfig {
  path: string,
  appName: string
  element: () => ReactElement
}

export const pages: PageConfig[] = [
  {
    appName: 'programs',
    path: 'programs',
    element: () => <Programs/>,
  },
  {
    appName: 'applications',
    path: 'applications',
    element: () => <Applications/>
  },
  {
    appName: 'flows',
    path: 'flows',
    element: () => <Flows/>
  },
  {
    appName: 'home',
    path: '',
    element:() =>  <Home/>
  },
]
