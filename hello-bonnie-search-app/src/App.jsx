// src/App.jsx
import React from 'react';
import { PostalCodeProvider } from './context/PostalCodeContext';
import Form from './components/Form';
import Result from './components/Result';
import './styles/App.modules.scss';

const App = () => {
    return (
        <PostalCodeProvider>
            <div className="App">
                <h1>Postal Code Lookup</h1>
                <Form />
                <Result />
            </div>
        </PostalCodeProvider>
    );
};

export default App;
