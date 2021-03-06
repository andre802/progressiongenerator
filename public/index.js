import { Progression, Chord } from '@tonaljs/tonal';
import Soundfont from 'soundfont-player';
const degrees = ["Imajor", "IMaj7", "im", 'im7','imM7', "iim", "iim7", 'IImajor', 'IIm7', 'II7', "IIIbmajor","iiim", "iiim7", "IIImajor", "IIImaj7","III7", "IVmajor", "IVMaj7", "V7","ivm", "ivm7", "Vmajor", "VMaj7", "vim", "vim7", "VImajor","viio", "viio7", "VIImajor"];
function playChord(instrument, notes, ac) {
    Soundfont.instrument(ac, instrument).then((piano) => {
        for (let i = 0; i < notes.length; i++) {
            piano.play(notes[i], ac.currentTime).stop(ac.currentTime + 2);
        }
    });
}
function playProgression(instrument, progression, tonic) {
    const ac = new AudioContext();  
    for (let i = 0; i < progression.length; i++) {
        setTimeout(() => {
            const chord = Chord.get(Progression.fromRomanNumerals(tonic, [progression[i]]))
            const firstNote = chord.notes[0];
            const type = chord.type;
            const notes = Chord.getChord(type, firstNote + "5").notes;
            playChord(instrument, notes, ac);
        }, 1000 * i);
    }
}
function generateProgression(length, tonic = "C", tonicIsFirst = true) {
    let progression;
    tonicIsFirst ? progression = ["Imajor"] : progression = [degrees[Math.floor(Math.random() * degrees.length)]];
    for (let i = 1; i < length; i++) {
        let chord = degrees[Math.floor(Math.random() * degrees.length)];
        progression.push(chord);
    }
    
    const leadChords = Progression.fromRomanNumerals(tonic, progression);
    return [progression, leadChords];
}
export { generateProgression, playProgression };
