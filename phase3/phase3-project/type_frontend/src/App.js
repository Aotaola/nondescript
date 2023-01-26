import './App.css';
import Login from './Components/Login';
import CreateSet from './Components/CreateSet';
import Home from './Components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {useState, useEffect} from 'react'

function App() {
  const [cards, setCards] = useState()
  useEffect(() => {
    fetch("http://localhost:9292/cardsets")
      .then((r) => r.json())
      .then((cards) => setCards(cards));
  }, []);
  //Routes (Home page, 404 page, login, createsets/cards)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:"/*",
      element: <h1>404 not found</h1>
    },
    {
      path:"/login",
      element: <Login />
    },
    {
      path: "/createset",
      element: <CreateSet/>
    }
  ]);

  //return whatever the route is on
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
