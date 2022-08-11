//@flow

import React, {useEffect, useState} from 'react';
import TabButton from '../TabButton/TabButton'
import ConfigPage from "./ConfigPage";
import ResultPage from "./ResultPage";
import {CONF_EXAMP_TAB, CONF_TAB, RESULT_TAB} from "../../constants";
import tabButtonStyles from '../TabButton/TabButton.module.css'
import ConfigExamplePage from "./ConfigExamplePage";

type PageProps = {
    activeTab: string,
    setActiveTab: Function
}

const Page = (props : PageProps) : Object => {
    const [data, setData] = useState([])
    const [activePage, setActivePage] = useState(<div></div>)
    const {activeTab, setActiveTab} = props

    useEffect(() => {
            switch (activeTab) {
                case CONF_TAB :
                    setActivePage(<ConfigPage setData={setData} setActiveTab={setActiveTab}/>)
                    break
                case RESULT_TAB:
                    setActivePage(<ResultPage data={data}/>)
                    break
                case CONF_EXAMP_TAB:
                    setActivePage(<ConfigExamplePage />)
                    break
                default:
                    setActivePage(<div></div>)
                    break
            }
    }, [props.activeTab])

    return (
        <div id='pageWrapper'>
            <div id='tabsWrapper'>
                <TabButton text={CONF_EXAMP_TAB}
                           styleClass={ activeTab === CONF_EXAMP_TAB ? tabButtonStyles.activeTab : tabButtonStyles.unactiveTab }
                           setActiveTab={setActiveTab}/>
                <TabButton text={CONF_TAB}
                           styleClass={ activeTab === CONF_TAB ? tabButtonStyles.activeTab : tabButtonStyles.unactiveTab }
                           setActiveTab={setActiveTab}/>
                <TabButton text={RESULT_TAB}
                           styleClass={ activeTab === RESULT_TAB ? tabButtonStyles.activeTab : tabButtonStyles.unactiveTab }
                           setActiveTab={setActiveTab}/>
            </div>
            <div id='workspace'>
                {activePage}
            </div>
        </div>
    )
}

export default Page;