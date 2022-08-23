import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import Header from './Header';
import Body from './Body';

const Main = () => {

    //const [results, setResults] = useState("");
    // const config = {
    // headers:{
    //     ApiKey: 'b7b77702-b4ec-4960-b3f7-7d40e44cf5f4'
    //     }
    // };
    // const url = 'https://red-candidate-web.azurewebsites.net/api/Orders';

    
    // useEffect(() => {
    //     let response = {};
    //     axios.get(url, config)
    //     .then(res => {
    //         console.log("res", res);
    //         // response = res;
    //         // setResults(res)
    //     })
    //     .catch(err=> console.log(err))
    // })

    return (
        <React.Fragment>
            <Header />
            <Body />
        </React.Fragment>
    )
}

export default Main;