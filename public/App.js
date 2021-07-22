import { Progression } from '@tonaljs/tonal';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { generateProgression, playProgression } from './index';
const App = () => {
    const [progression, setProgression] = useState(['Imajor']);
    const [length, setLength] = useState(4);
    const [showSaved, setShowSaved] = useState(false);
    const handleLength = (e) => {
        setLength(e.target.value);
    }
    const [saved, setSaved] = useState([]);
    function save(){
        if (progression[0].length != length) return;
        if (!saved.includes(progression[0])) {
            setSaved([...saved, progression[0]]);
        }
    }
    return (
        <div>
            <header>
            <h1>Progression Generator</h1>
            <button onClick={()=>setShowSaved(prev=> !prev)} id="saved">Saved</button>
            {showSaved && saved.length != 0 ? (
                <div id="savedDisplay">
                    {saved.map(s => {
                        return (
                            <p onClick={() => {
                                setProgression(() => {
                                    if (s == progression) return;
                                    const lead = Progression.fromRomanNumerals("C", s);
                                    setProgression([s, lead]);
                                }) 
                            }} id="savedProgression">{s.join("-")}</p>
                        )
                    } )}
                </div>
            ) : null}
            </header>
            <div id="progressionContainers">
                {progression != undefined && progression.length == 2 ? (
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
                    <button onClick={()=>save()}>Save</button>
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