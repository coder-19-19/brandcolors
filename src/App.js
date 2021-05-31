import React, {useEffect, useState} from 'react';
import MainContext from "./MainContext";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Copied from "./components/Copied";
import Collection from "./components/Collection";
import BrandsData from "./brands.json";
import {forceCheck} from 'react-lazyload';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
const App = () => {
        const brandsArray = []

        Object.keys(BrandsData).map(key => {
            brandsArray.push(BrandsData[key])
        })

        const [brands,setBrands] = useState(brandsArray)
        const [selectedBrands,setSelectedBrands] = useState([])
        const [copied,setCopied] = useState(false)
        const [search,setSearch] = useState('')
        const data = {
            brands,
            selectedBrands,
            setSelectedBrands,
            setCopied,
            setSearch
        }

        useEffect(() => {
            setTimeout(() => {
                setCopied(false)
            },700)

        },[copied])

        useEffect(() => {
            setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search.toLowerCase())))
        },[search])

        useEffect(() => {
            forceCheck()
        },[brands])

        return (
            <>
                <MainContext.Provider value={data}>
                    {copied && <Copied color={copied}/>}
                    <Sidebar/>
                    <Router>
                        <Switch>
                            <Route path="/" exact>
                                <Content/>
                            </Route>
                            <Route path="/collection/:slugs">
                                <Collection/>
                            </Route>
                        </Switch>
                    </Router>
                </MainContext.Provider>
            </>
        );
}

export default App;