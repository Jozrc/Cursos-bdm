import Index from "./components/index.jsx";
import NavbarReact from "./components/nav.jsx";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'



function App() {
  const location = window.location.pathname;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Index/> } />
        <Route path="/login" element={ <Login/> }/>
        <Route path="/register" element={ <Register/> }/>
      </Routes>
    </div>

  );
}

export default App;
