import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { Main } from './Main';

export class App {
    constructor() {
        this.render();
    }

    private render(): void {
        ReactDOM.render(React.createElement(Main, { app: this }),
            document.getElementById("app") || document.createElement("div")
        );
    }
}

new App();