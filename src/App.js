import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Registration from "./pages/registationPage"
import SigninPage from "./pages/signInPage";
import TodoPage from "./pages/todoApp";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Registration/>}/>
    <Route path="/pages/signin" element={<SigninPage/>}/>
    <Route path="/pages/todopage" element={<TodoPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
