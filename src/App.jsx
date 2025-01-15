import React from 'react';
import logo from '/logo512.png';
import './App.css';

// Декларативный компонент App
export const App = () => {
// Императивный стиль начинается в return
    return React.createElement(
        'div',
        { className: 'App' },
        React.createElement(
            'header',
            { className: 'App-header' },
            React.createElement('img', {
                src: logo,
                className: 'App-logo',
                alt: 'logo'
            }),
            React.createElement(
                'p',
                null,
                'Edit ',
                React.createElement('code', null, 'src/App.js'),
                ' and save to reload.'
            ),
            React.createElement(
                'a',
                {
                    className: 'App-link',
                    href: 'https://reactjs.org',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                },
                'Learn React'
            ),
            React.createElement(
                'h2',
                null,
                `Year: ${new Date().getFullYear()}`
            )
        )
    );
};
