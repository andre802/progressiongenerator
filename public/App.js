import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { generateProgression, playProgression } from './index';
const App = () => {
    const [progression, setProgression] = useState(['Imajor']);
    const [length, setLength] = useState(4);
    const handleLength = (e) => {
        setLength(e.target.value);
    }
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
            <div id="buttons">
            <button onClick={() => setProgression(generateProgression(length))} id="generate">Generate</button>
            <button onClick={() => playProgression(progression[0])} id="play">Play</button>
            </div>
            <div id="options">
                <label>Number of Chords: 
                    <input value={length} onChange={handleLength} min="2" max="6" type="number" />
                </label>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))