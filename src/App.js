import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    return(
    <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            
        </Routes>
       
    </BrowserRouter>
    );
}

export default App;
