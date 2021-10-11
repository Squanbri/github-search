import React from "react";
import './styles/App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Repositories from "./pages/Repositories/Repositories";
import Repository from "./pages/Repository/Repository";
import Header from "./components/Header";

function App() {
    return(
        <BrowserRouter>
            <Header/>
            <main>
                <Route exact path="/" component={Repositories}/>
                <Route path="/repository/:login/:name" component={Repository}/>
            </main>
        </BrowserRouter>
    )
}

export default App;
