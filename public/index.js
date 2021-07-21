import { Progression, Chord } from '@tonaljs/tonal';
import Soundfont from 'soundfont-player';
const majorKey = {
    tonic: ["Imajor", 'Imajor7'],
    supertonic: ["iim", "iim7"],
    mediant: ['iiim', 'iiim7'],
    subdominant: ['IVmajor', 'IVmajor7'],
    dominant: ['Vmajor', 'V7'],
    submediant: ['vim', 'vim7'],
    leadingtone: ['viio', 'viio7']
}
// const tonic = ["C", "D", "E", "F", "G", "A", "B"];
function playChord(notes, ac) {
    Soundfont.instrument(ac, "acoustic_grand_piano").then((piano) => {
        for (let i = 0; i < notes.length; i++) {
            piano.play(notes[i], ac.currentTime).stop(ac.currentTime + 2);
        }
    });


}
function playProgression(progression) {
    const ac = new AudioContext();
    for (let i = 0; i < progression.length; i++) {
        setTimeout(() => {
            const notes = Chord.get(Progression.fromRomanNumerals("C5", [progression[i]])).notes;
            playChord(notes, ac);
        }, 1000 * i);
    }
}
function generateProgression(length) {
    const progression = ["Imajor"];
    for (let i = 1; i < length; i++) {
        let chord = majorKey[Object.keys(majorKey)[Math.floor(Math.random() * Object.keys(majorKey).length)]][0];
        progression.push(chord);
    }
    const leadChords = Progression.fromRomanNumerals("C4", progression);
    return [progression, leadChords];
}
export { generateProgression, playProgression };
