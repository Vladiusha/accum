import React, {useState} from 'react';
import TabButton from '../tabButton/TabButton'
import ConfigPage from "./ConfigPage";
import ResultPage from "./ResultPage";
import {CONF_EXAMP_TAB, CONF_TAB, RESULT_TAB} from "../../constants";
import tabButtonStyles from '../tabButton/TabButton.module.css'
import ConfigExamplePage from "./ConfigExamplePage";

const Page = (props) => {
    const [data, setData] = useState([])

    return (
        <div id='pageWrapper'>
            <div id='tabsWrapper'>
                <TabButton text={CONF_EXAMP_TAB}
                           styleClass={ props.activeTab === CONF_EXAMP_TAB ? tabButtonStyles.activeTab : tabButtonStyles.unactiveTab }
                           setActiveTab={props.setActiveTab}/>
                <TabButton text={CONF_TAB}
                           styleClass={ props.activeTab === CONF_TAB ? tabButtonStyles.activeTab : tabButtonStyles.unactiveTab }
                           setActiveTab={props.setActiveTab}/>
                <TabButton text={RESULT_TAB}
                           styleClass={ props.activeTab === RESULT_TAB ? tabButtonStyles.activeTab : tabButtonStyles.unactiveTab }
                           setActiveTab={props.setActiveTab}/>
            </div>
            <div id='workspace'>
                {(() => {
                    switch (props.activeTab) {
                        case CONF_TAB :
                            return <ConfigPage setData={setData}/>
                        case RESULT_TAB:
                            return <ResultPage data={data}/>
                        case CONF_EXAMP_TAB:
                            return <ConfigExamplePage />
                        default:
                            return <div></div>
                    }
                })()}
            </div>
        </div>
    )
}

export default Page;