import React from 'react';

import '../styles/App.css';

function App() {
    return (
        <>
            <h1>
                React App (Remote)
            </h1>
            <div className='Host-Container'>
                <ModuleLoader
                    module='RemoteComponent1'
                />
            </div>
        </>
    );
}

export default App;
