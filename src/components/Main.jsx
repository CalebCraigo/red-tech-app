import React, { useState, useEffect }  from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import { getOrders }from '../data/dataMethods';

const Main = () => {
    const [results, setResults] = useState({});
    const [isDrafts, setIsDrafts] = useState(false);
    
    useEffect(() => {
        const handleDataFetch = (res) => {
            setResults(res.data);
        }
        getOrders(handleDataFetch)
    }, []);

    return (
        <React.Fragment>
            <Header setIsDrafts={setIsDrafts} isDrafts={isDrafts}/>
            <Body isDrafts={isDrafts} results={results}/>
        </React.Fragment>
    )
}

export default Main;