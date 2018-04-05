import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SynthesisApp extends Component {
    render() {
        return (
            <div>
                <p>Running this app.</p>
            </div>
        );
    }
}

ReactDOM.render(<SynthesisApp />, document.getElementById('root'));