import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { generateProgression } from './index';
const App = () => {
    const [progression, setProgression] = useState(['I']);
    return (
        <div>
            <h1>Progression Generator</h1>
            <div id="progressionContainers">
                {progression.length == 2 ? (
                    <>
                    <div className="progression">
                        {progression[0].map(chord => {
                            return (<span className="chord">{chord}</span>)
                        })}
                    </div>
                    <div className="progression">
                                            {progression[1].map(chord => {
                            return (<span className="chord">{chord}</span>)
                        })}
                    </div>
                    </>
                ) : null}
            </div>
            <button onClick={() => setProgression(generateProgression())} id="generate">Generate</button>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))