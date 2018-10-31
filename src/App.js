import React, { Component } from 'react';
import VariableManager from './VariableManager';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faTrash, faPen);
class App extends Component {
    render() {
        return (
            <div className="App">
                <VariableManager></VariableManager>
            </div>
        );
    }
}

export default App;
