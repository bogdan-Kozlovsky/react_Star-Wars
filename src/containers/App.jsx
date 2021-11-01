import React from 'react';
import {getApiRosource} from '../until/network'
import style from '../components/App.module.scss'


const App = () => {
    getApiRosource();
    return (
        <div>
            <h1 className={style.title}>
                Hello React!
            </h1>
        </div>
    );
};

export default App;