import './App.css';
import InputHandler from './Components/InputHandler';
import NavBar from './Components/NavBar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
          <NavBar />
      </div>
      <Routes>
          <Route exact path="/" element={<InputHandler />} >
              
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
      </Routes>
  </BrowserRouter>

    
  )
}

export default App;
