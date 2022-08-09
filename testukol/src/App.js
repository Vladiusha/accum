import './App.css';
import React, {useState} from 'react'
import Page from "./components/pages/Page";
import {CONF_EXAMP_TAB} from "./constants";

const App = () => {
    const [tab, setTab] = useState(CONF_EXAMP_TAB)

    return (
        <div className="App">
            <Page activeTab={tab} setActiveTab={setTab}/>
        </div>
    );
}

export default App;
