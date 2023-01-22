import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";

const routerSource = (props) => [
  { index: true, path: "/", element: <Home {...props} title="Home" /> },

  { index: true, path: "/*", element: <>ERROR</> },
];

const AppRoutes = (props) => {
  const routers = routerSource(props);
  let routes = useRoutes(routers);
  return routes;
};

export default AppRoutes;
