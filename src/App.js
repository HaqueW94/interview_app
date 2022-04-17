import React  from "react";
import Login from "./login";
import { Provider } from "react-redux";
import Home from "./home";
import PrivateRoute from "./privateRoute";
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import { Store } from "./store";

function App(){

    return(
       <Provider store={Store}>
            <BrowserRouter>
        <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route path="/" element={<PrivateRoute><Home/> </PrivateRoute>}/>
        </Routes>
        </BrowserRouter>
       </Provider>
    )
    
}

export default App;