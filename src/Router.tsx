import { HashRouter as Router, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Title from './Title';
import Home from './Home';
import Empty from './Components/Empty';

const RouterApp = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "title",
        element: <Title />,
      },
      {
        path: "empty1",
        element: <Empty />,
      },
      {
        path: "empty2",
        element: <Empty />,
      },
      {
        path: "empty3",
        element: <Empty />,
      },
    ],
  }], { basename: "/assign-dream" });

export default RouterApp;