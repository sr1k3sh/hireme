import { BrowserRouter as Router,
  useRoutes, } from 'react-router-dom';
import './App.scss';
import About from './pages/About';
import Home from './pages/Home';

const Routes = () =>{
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About></About>}
  ]);
  return routes;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
