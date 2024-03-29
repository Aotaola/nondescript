import './App.css';
import Login from './Components/Login';
import CreateSet from './Components/CreateSet';
import Game from './Components/Game';
import Home from './Components/Home';
import AddCards from './Components/AddCards';
import Score from './Components/Score';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {useState, useEffect} from 'react'

function App() {

  const [cardSet, setCardSet] = useState([])
  const [selectedSet, setSelectedSet] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((r) => r.json())
      .then((cards) => setCardSet(cards));
  }, []);

  //Routes (Home page, 404 page, login, createsets/cards)
  const router = createBrowserRouter([
    {
      path: "/game/:id",
      element: <Game isLoggedIn={isLoggedIn}/>,
    },
    {
      path:"/*",
      element: <h1>404 not found</h1>
    },
    {
      path:"/login",
      element: <Login setIsLoggedIn={setIsLoggedIn}/>
    },
    {
      path: "/createset",
      element: <CreateSet isLoggedIn={isLoggedIn} setSelectedSet={setSelectedSet} setCardSet={setCardSet} cardSet={cardSet}/>
    },
    {
      path: "/",
      element: <Home isLoggedIn={isLoggedIn} setSelectedSet={setSelectedSet} cardSet={cardSet}/>
    },
    {
      path: "/addcards/:id",
      element: <AddCards isLoggedIn={isLoggedIn} selectedSet={selectedSet} />
    },
    {
      path: "/score/:score",
      element: <Score isLoggedIn={isLoggedIn} />
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
