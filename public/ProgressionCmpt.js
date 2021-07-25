import React from 'react';

export const ProgressionCmpt = ({progression, length, setProgression}) => {
    const degrees = ["Imajor", "IMaj7", "im", 'im7','imM7', "iim", "iim7", 'IImajor', 'IIm7', 'II7', "iiim", "iiim7", "IIImajor", "IIImaj7","III7", "IVmajor", "IVMaj7", "V7","ivm", "ivm7", "Vmajor", "VMaj7", "vim", "vim7", "VImajor","viio", "viio7", "VIImajor"];
    return (
        <div id="progressionContainers">
            {progression != undefined && progression.length == 2 && progression[0].length == length && progression[0].length == progression[1].length ? (
                    <>
                        <div className="progression">
                            {progression[0].map((chord, i) => {
                                return (<select key={i}
                                    onChange={e => {
                                        return setProgression(chord, e.target.value, i)
                                    }} className="chord" value={chord}>{degrees.map((d,j) => {
                                        return (
                                            <option
                                                key={j}
                                                value={d}>{d}</option>
                                        )
                                    })}
                                </select>)
                            })}
                        </div>
                        <div className="progression">
                            {progression[1].map((chord,i) => {
                                return (<span key={i} className="chord">{chord}</span>)
                            })}
                        </div>
                    </>
                ) : null}
        </div>
    )
}