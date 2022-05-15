import * as Tone from "tone";
import { Frequency } from "tone/build/esm/core/type/Units";
import { chord } from "./ChordMaker";

// const finalChord: Frequency[] = chord.map((el) => {
//   return el.toString().replace("♯", "#") + "4";
// });

const finalChord = chord.map((el) => {
  if (Array.isArray(el)) {
    return el.map((key) =>
      key.includes("♯")
        ? key.toString().replace("♯", "#") + "4"
        : key.includes("♭")
        ? key.toString().replace("♭", "b") + "4"
        : key + "4"
    );
  }
  return;
});
console.log(finalChord);

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("play")!.addEventListener("click", () => playDelay());

  const synth = new Tone.PolySynth().toDestination();
  function playDelay() {
    if (Tone.context.state === "suspended") {
      Tone.context.resume();
    }
    const synthPart = new Tone.ToneEvent(function (time, note) {
      synth.triggerAttackRelease(note, 1, time);
    }, finalChord[2]);

    synthPart.start();
    Tone.Transport.start();

    synthPart.loop = 3;
    synthPart.loopEnd = "2m";
  }
});
