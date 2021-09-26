import React from "react";
import './styles/App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Repositories from "./pages/Repositories";
import Repository from "./pages/Repository";
import Header from "./components/general/Header";

function App() {
    return(
        <BrowserRouter>
            <Header/>
            <main>
                <Route exact path="/" component={Repositories}/>
                <Route path="/repository/:owner/:name" component={Repository}/>
            </main>
        </BrowserRouter>
    )
}

export default App;
