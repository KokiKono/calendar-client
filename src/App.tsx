import * as React from 'react';

import Header from './components/Header';

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <Header/>
            </div>
        );
    }
}
