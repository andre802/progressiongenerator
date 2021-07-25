import { Progression } from '@tonaljs/tonal';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ProgressionCmpt } from './ProgressionCmpt';
import { generateProgression, playProgression } from './index';
const App = () => {
    const [progression, setProgression] = useState(['Imajor']);
    const [length, setLength] = useState(4);
    const [showSaved, setShowSaved] = useState(false);
    const [tonic, setTonic] = useState("C");
    const [tonicIsFirst, setTonicIsFirst] = useState("false");

    const handleLength = (e) => {
        setLength(e.target.value);
    }
    const tonicOptions = ["C", "D", "E", "F", "G", "A", "B"];
    const changeTonic = (e) => {
        setTonic(e.target.value);
    }
    const changeChord = (chord, newChord, i) => {
        if (chord != newChord) {
            let copy = progression[0];
            copy[i] = newChord;
            setProgression([copy, Progression.fromRomanNumerals(tonic, copy)]);
        }
    }
    const showDisplay = () => {
        return (
            <div id="savedDisplay">
                {saved.map((s, i) => {
                    return (
                        <p key={i} onClick={() => {
                            setProgression(() => {
                                if (s == progression) return;
                                const lead = Progression.fromRomanNumerals(tonic, s);
                                setProgression([s, lead]);
                            })
                        }} id="savedProgression">{s.join("-")} <svg onClick={() => setSaved(prevProg => prevProg.filter(el => s != el))} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg> </p>

                    )
                })}
            </div>
        )
    }
    const [saved, setSaved] = useState([]);
    function save() {
        if (progression[0].length != length) return;
        if (!saved.includes(progression[0])) {
            setSaved([...saved, progression[0]]);
        }
    }
    return (
        <div>
            <header>
                <h1>Progression Generator</h1>
                <button onClick={() => setShowSaved(prev => !prev)} id="saved">Saved</button>
                {showSaved && saved.length != 0 ? (
                    showDisplay()
                ) : null}
            </header>
            <ProgressionCmpt setProgression={changeChord} progression={progression} length={length} />
            <div id="buttons">
                <button onClick={() => setProgression(generateProgression(length, tonic, tonicIsFirst))} id="generate">Generate</button>
                <button onClick={() => playProgression(progression[0])} id="play">Play</button>
                <button onClick={() => setTonicIsFirst(prev => !prev)}>{tonicIsFirst ? "First chord is Tonic" : "First chord is Random"}</button>
                <button onClick={() => save()}>Save</button>
                <select title="Change the tonic, or the first degree of the scale" value={tonic} onChange={changeTonic}>{tonicOptions.map(t => {
                    return (
                        <option value={t}>{t}</option>
                    )
                })}</select>
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