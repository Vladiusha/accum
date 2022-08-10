//@flow

import './App.css';
import React, {useState} from 'react'
import Page from "./components/Pages/Page";
import {CONF_EXAMP_TAB} from "./constants";

const App = () : Object => {
    const [tab, setTab] = useState(CONF_EXAMP_TAB)

    return (
        <div className="App">
            <Page activeTab={tab} setActiveTab={setTab}/>
        </div>
    );
}

export default App;
