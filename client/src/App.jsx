import { createContext, useReducer } from "react";
import { initialState, reducer } from "./components/reducer/UseReducer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homePage/HomePage";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/SinglePage/SinglePage";
import Dashboard from "./routes/dashboard/Dashboard";
import AboutPage from "./routes/aboutPage/AboutPage";
export const UserContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/list", element: <ListPage /> },
      { path: "/singlePage", element: <SinglePage /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/aboutPage", element: <AboutPage /> },
    ],
  },
]);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

export default App;
