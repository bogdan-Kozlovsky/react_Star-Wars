import React from 'react';
import cn from 'classnames';
import style from '../components/App.module.scss'


const App = () => {
    console.log(style)
    return (
        <div>
            <h1 className={cn(style.title, style.text)}>
                Hello React!
                <span className={cn(style.text__decoration)}>
                    22 years
                </span>
            </h1>
        </div>
    );
};

export default App;