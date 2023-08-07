import {Provider} from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {GlobalStyles} from "./styles";
import {store} from "./store";
import {Main} from "./pages";
import {pages} from "./pageConfig";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: pages.map(page => ({
      path: page.path,
      element: page.element(),
    })),
  },
]);

function App() {
  return (
    <GlobalStyles>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </GlobalStyles>
  );
}

export default App;
