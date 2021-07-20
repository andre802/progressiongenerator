import { Progression } from '@tonaljs/tonal';
const majorKey = {
    tonic: ["I", 'Imaj7'],
    supertonic: ["iim", "iim7"],
    mediant: ['iiim','iiim7'],
    subdominant: ['IV', 'IVmaj7'],
    dominant: ['V', 'V7'],
    submediant: ['vim', 'vim7'],
    leadingtone: ['viio', 'viio7']
}
const tonic = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];
const length = 4;
function generateProgression() {
    const progression = ["I"];
    for (let i = 1; i < length; i++) {
        let chord = majorKey[Object.keys(majorKey)[Math.floor(Math.random() * Object.keys(majorKey).length)]][0];
        progression.push(chord);
    }
    console.log(progression);
    let tonicNote = tonic[Math.floor(Math.random() * tonic.length)];
    const leadChords = Progression.fromRomanNumerals(tonicNote, progression);
    console.log(leadChords)
    // document.getElementById("progression").innerText = leadChords.join(", ");
    // document.getElementById("progression").innerHTML += "<br/>";
    // document.getElementById("progression").innerText += progression.join(", ");
    return [progression, leadChords];
}
export {generateProgression};
// document.getElementById("generate").addEventListener("click", generateProgression)