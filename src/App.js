import React from "react";
import './styles/App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Repositories from "./pages/Repositories";
import Repository from "./pages/Repository";
import Header from "./components/Header";

function App() {
    return(
        <BrowserRouter>
            <Header/>
            <main>
                <Route path="/repositories">
                    <Repositories/>
                </Route>
                <Route path="/repository/:owner/:name">
                    <Repository/>
                </Route>
            </main>
        </BrowserRouter>
    )
}

export default App;
