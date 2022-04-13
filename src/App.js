import React  from "react";
import Login from "./login";
import Context from "./context";
import Home from "./home";
import PrivateRoute from "./privateRoute";
import {Route,Routes,BrowserRouter} from 'react-router-dom';

function App(){

    return(
        <BrowserRouter>
        <Context>
        <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route path="/" element={<PrivateRoute><Home/> </PrivateRoute>}/>
        </Routes>
        </Context>
        </BrowserRouter>
    )
    
}

export default App;