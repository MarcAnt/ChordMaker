import { changeKeys, retriveOrder, switchKeySignature } from "./helpers";
import {
  chord_patterns,
  KEYS_FLAT,
  KEYS_SHARP,
  MAJOR_PATTERN,
  MINOR_PATTERN,
  HARMONIC_MINOR_PATTERN,
  scale_patterns,
} from "./keys";
import {
  FLAT_KEY_SIGNATURES,
  Keys_Flat,
  Keys_Sharp,
  SCALE_PATTERN,
  SHARPS_KEY_SIGNATURES,
  typeChord,
  typeScale,
} from "./types";

class MakeScale {
  protected scale:
    | SHARPS_KEY_SIGNATURES[]
    | FLAT_KEY_SIGNATURES[]
    | (FLAT_KEY_SIGNATURES | SHARPS_KEY_SIGNATURES)[] = [];

  createScaleSharp(key: SHARPS_KEY_SIGNATURES, scalePattern: SCALE_PATTERN[]) {
    //Get final order
    const orderedKeys = retriveOrder<SHARPS_KEY_SIGNATURES>(key, KEYS_SHARP);

    const finalOrderSharp: SHARPS_KEY_SIGNATURES[] = scalePattern.map((val) => {
      const valueDegree = typeof val.key[1] === "number" ? val.key[1] : 1;
      return [...orderedKeys.slice(valueDegree, valueDegree + 1)][0];
    });
    return (this.scale = [key, ...finalOrderSharp]);
  }

  createScaleFlat(key: FLAT_KEY_SIGNATURES, scalePattern: SCALE_PATTERN[]) {
    //Get final order
    const orderedKeys = retriveOrder<FLAT_KEY_SIGNATURES>(key, KEYS_FLAT);

    const finalOrderFlat: FLAT_KEY_SIGNATURES[] = scalePattern.map((val) => {
      const valueDegree = typeof val.key[1] === "number" ? val.key[1] : 1;
      return [...orderedKeys.slice(valueDegree, valueDegree + 1)][0];
    });

    return (this.scale = [key, ...finalOrderFlat]);
  }

  createMixedScale(
    key: FLAT_KEY_SIGNATURES | SHARPS_KEY_SIGNATURES,
    scalePattern: SCALE_PATTERN[]
  ) {
    const orderedKeys = retriveOrder<
      FLAT_KEY_SIGNATURES | SHARPS_KEY_SIGNATURES
    >(key, [...KEYS_FLAT, ...KEYS_SHARP]);

    const finalOrder: (FLAT_KEY_SIGNATURES | SHARPS_KEY_SIGNATURES)[] =
      scalePattern.map((val) => {
        const valueDegree = typeof val.key[1] === "number" ? val.key[1] : 1;
        return [...orderedKeys.slice(valueDegree, valueDegree + 1)][0];
      });

    return (this.scale = [key, ...finalOrder]);
  }

  get getScale() {
    return this.scale;
  }
}

class MakeChord extends MakeScale {
  protected chords: string[][] | string[] = [];

  constructor() {
    super();
  }

  createTriadChords(
    scale: SHARPS_KEY_SIGNATURES[] | FLAT_KEY_SIGNATURES[],
    scaleType: typeScale = "major",
    chordType: typeChord = "M"
  ) {
    let k = 0,
      m = 0;

    return (this.chords = scale
      .map((_, idx, arr) => {
        let copy2 = idx + 2;
        let copy3 = idx + 4;

        if (copy2 >= 7) {
          copy2 = k++;
        }
        if (copy3 >= 7) {
          copy3 = m++;
        }

        const condition = scale_patterns[scaleType](idx);

        return [arr[idx], arr[copy2], arr[copy3], condition];
      })
      .filter((el) => {
        return el[el.length - 1] === chordType;
      }));
  }

  createSeventhChords(
    scale: SHARPS_KEY_SIGNATURES[] | FLAT_KEY_SIGNATURES[],
    scaleType: typeScale = "major",
    chordType: typeChord = "M"
  ) {
    let k = 0,
      m = 0,
      l = 0;

    const resultChords = scale
      .map((_, idx, arr) => {
        let third = idx + 2;
        let fifth = idx + 4;
        let seventh = idx + 6;

        if (third >= 7) third = k++;
        if (fifth >= 7) fifth = l++;
        if (seventh >= 7) seventh = m++;

        const condition = scale_patterns[scaleType](idx);

        return [arr[idx], arr[third], arr[fifth], arr[seventh], condition];
      })
      .filter((el) => {
        return el[el.length - 1] === chordType;
      });

    this.chords = resultChords.map((el) => el.splice(0, 4));
  }

  createSeventhDimChords(
    scale: SHARPS_KEY_SIGNATURES[] | FLAT_KEY_SIGNATURES[]
  ) {
    let k = 0,
      m = 0,
      l = 0;

    const resultChords = scale.map((_, idx, arr) => {
      let third = idx + 2;
      let fifth = idx + 4;
      let seventh = idx + 5;

      if (third >= 7) third = k++;
      if (fifth >= 7) fifth = l++;
      if (seventh >= 7) seventh = m++;

      return [arr[idx], arr[third], arr[fifth], changeKeys(arr[seventh])];
    });

    this.chords = resultChords.splice(6);
  }

  createSixChords(
    scale: SHARPS_KEY_SIGNATURES[] | FLAT_KEY_SIGNATURES[],
    scaleType: typeScale = "major",
    chordType: Omit<typeChord, "dim" | "dom"> = "M"
  ) {
    let k = 0,
      m = 0,
      l = 0;

    const resultChords = scale
      .map((_, idx, arr) => {
        if (idx === 4 || idx === 6) return [];

        let third = idx + 2;
        let fifth = idx + 4;
        let six = idx + 5;

        if (third >= 7) third = k++;
        if (fifth >= 7) fifth = l++;
        if (six >= 7) six = m++;

        const condition = scale_patterns[scaleType](idx);

        return [arr[idx], arr[third], arr[fifth], arr[six], condition];
      })
      .filter((el) => {
        return el[el.length - 1] === chordType;
      });

    this.chords = resultChords.map((el) => el.splice(0, 4));
  }

  createSixNinthChords(
    scale: SHARPS_KEY_SIGNATURES[] | FLAT_KEY_SIGNATURES[],
    scaleType: typeScale = "major",
    chordType: Omit<typeChord, "dim" | "dom"> = "M"
  ) {
    let k = 0,
      m = 0,
      l = 0,
      n = 0;

    const resultChords = scale
      .map((_, idx, arr) => {
        if (idx === 4 || idx === 6) return [];

        let third = idx + 2;
        let fifth = idx + 4;
        let six = idx + 5;
        let ninth = idx + 1;

        if (third >= 7) third = k++;
        if (fifth >= 7) fifth = l++;
        if (six >= 7) six = m++;
        if (ninth >= 7) ninth = n++;

        const condition = scale_patterns[scaleType](idx);

        return [
          arr[idx],
          arr[third],
          arr[fifth],
          arr[six],
          arr[ninth],
          condition,
        ];
      })
      .filter((el) => {
        return el[el.length - 1] === chordType;
      });

    this.chords = resultChords.map((el) => el.splice(0, 5));
  }

  createNinthChords(
    scale: SHARPS_KEY_SIGNATURES[] | FLAT_KEY_SIGNATURES[],
    scaleType: typeScale = "major",
    chordType: Omit<typeChord, "dim"> = "M"
  ) {
    let k = 0,
      m = 0,
      l = 0,
      j = 0;

    const resultChords = scale
      .map((_, idx, arr) => {
        if (idx >= 6) return [];

        let third = idx + 2;
        let fifth = idx + 4;
        let seventh = idx + 6;
        let ninth = idx + 1;

        if (ninth >= 7) ninth = j++;
        if (third >= 7) third = k++;
        if (fifth >= 7) fifth = l++;
        if (seventh >= 7) seventh = m++;

        const condition = scale_patterns[scaleType](idx);

        return [
          arr[idx],
          arr[third],
          arr[fifth],
          arr[seventh],
          arr[ninth],
          condition,
        ];
      })
      .filter((el) => {
        return el[el.length - 1] === chordType;
      });

    this.chords = resultChords.map((el) => el.splice(0, 5));
  }

  createEleventhChords(
    scale: SHARPS_KEY_SIGNATURES[] | FLAT_KEY_SIGNATURES[],
    scaleType: typeScale = "major",
    chordType: Omit<typeChord, "dim"> = "M"
  ) {
    let k = 0,
      m = 0,
      l = 0,
      j = 0,
      n = 0;

    const resultChords = scale
      .map((_, idx, arr) => {
        if (idx >= 6) return [];

        let third = idx + 2;
        let fifth = idx + 4;
        let seventh = idx + 6;
        let ninth = idx + 1;
        let eleventh = idx + 3;

        if (ninth >= 7) ninth = j++;
        if (third >= 7) third = k++;
        if (fifth >= 7) fifth = l++;
        if (seventh >= 7) seventh = m++;
        if (eleventh >= 7) eleventh = n++;

        const condition = scale_patterns[scaleType](idx);

        return [
          arr[idx],
          arr[third],
          arr[fifth],
          arr[seventh],
          arr[ninth],
          arr[eleventh],
          condition,
        ];
      })
      .filter((el) => {
        return el[el.length - 1] === chordType;
      });

    this.chords = resultChords.map((el) => el.splice(0, 6));
  }

  createThirteenChords(
    scale: SHARPS_KEY_SIGNATURES[] | FLAT_KEY_SIGNATURES[],
    scaleType: typeScale = "major",
    chordType: Omit<typeChord, "dim"> = "M"
  ) {
    let k = 0,
      m = 0,
      l = 0,
      j = 0,
      n = 0,
      o = 0;

    const resultChords = scale
      .map((_, idx, arr) => {
        if (idx >= 6) return [];

        let third = idx + 2;
        let fifth = idx + 4;
        let seventh = idx + 6;
        let ninth = idx + 1;
        let eleventh = idx + 3;
        let thirteen = idx + 5;

        if (ninth >= 7) ninth = j++;
        if (third >= 7) third = k++;
        if (fifth >= 7) fifth = l++;
        if (seventh >= 7) seventh = m++;
        if (eleventh >= 7) eleventh = n++;
        if (thirteen >= 7) thirteen = o++;

        const condition = scale_patterns[scaleType](idx);

        return [
          arr[idx],
          arr[third],
          arr[fifth],
          arr[seventh],
          arr[ninth],
          arr[eleventh],
          arr[thirteen],
          condition,
        ];
      })
      .filter((el) => {
        return el[el.length - 1] === chordType;
      });

    this.chords = resultChords.map((el) => el.splice(0, 6));
  }

  createSpecificChord(
    note: SHARPS_KEY_SIGNATURES | FLAT_KEY_SIGNATURES,
    chordType: typeChord
  ) {
    let orderedKeys;
    if (
      note === "C" ||
      note === "C♯" ||
      note === "D" ||
      note === "D♯" ||
      note === "E" ||
      note === "F♯" ||
      note === "G" ||
      note === "G♯" ||
      note === "A" ||
      note === "A♯" ||
      note === "B"
    ) {
      orderedKeys = retriveOrder<SHARPS_KEY_SIGNATURES>(note, KEYS_SHARP);
    } else {
      orderedKeys = retriveOrder<FLAT_KEY_SIGNATURES>(note, KEYS_FLAT);
    }

    const chordPattern = chord_patterns[chordType];

    const finalChord = orderedKeys
      .map((_, idx, arr) => {
        return arr[chordPattern[idx]];
      })
      .slice(0, chordPattern.length);

    return (this.chords = finalChord);
  }

  createChordFromScale(
    note: SHARPS_KEY_SIGNATURES | FLAT_KEY_SIGNATURES,
    scaleDegrees: number[],
    scalePattern: SCALE_PATTERN[],
    alteredScale?: number[]
  ) {
    if (
      note === "C" ||
      note === "C♯" ||
      note === "D" ||
      note === "D♯" ||
      note === "E" ||
      note === "F♯" ||
      note === "G" ||
      note === "G♯" ||
      note === "A" ||
      note === "A♯" ||
      note === "B"
    ) {
      let finalScale: SHARPS_KEY_SIGNATURES[];

      finalScale = this.createScaleSharp(note, scalePattern);

      if (alteredScale?.length) {
        finalScale = this.createScaleSharp(note, scalePattern);
        const alterFinalScale = switchKeySignature(finalScale, alteredScale);

        const chordScales = alterFinalScale.map((el) => {
          return retriveOrder<SHARPS_KEY_SIGNATURES | FLAT_KEY_SIGNATURES>(
            el,
            alterFinalScale
          )
            .map((_, idx, arr) => {
              return arr[scaleDegrees[idx]];
            })
            .slice(0, scaleDegrees.length);
        });

        return (this.chords = chordScales);
      } else {
        const chordScales = finalScale.map((el) => {
          return retriveOrder<SHARPS_KEY_SIGNATURES>(el, finalScale)
            .map((_, idx, arr) => {
              return arr[scaleDegrees[idx]];
            })
            .slice(0, scaleDegrees.length);
        });

        return (this.chords = chordScales);
      }
    } else {
      let finalScale: FLAT_KEY_SIGNATURES[];
      finalScale = this.createScaleFlat(note, scalePattern);

      if (alteredScale?.length) {
        finalScale = this.createScaleFlat(note, scalePattern);
        const alterFinalScale = switchKeySignature(finalScale, alteredScale);
        const chordScales = alterFinalScale.map((el) => {
          return retriveOrder<SHARPS_KEY_SIGNATURES | FLAT_KEY_SIGNATURES>(
            el,
            alterFinalScale
          )
            .map((_, idx, arr) => {
              return arr[scaleDegrees[idx]];
            })
            .slice(0, scaleDegrees.length);
        });
        return (this.chords = chordScales);
      } else {
        const chordScales = finalScale.map((el) => {
          return retriveOrder<FLAT_KEY_SIGNATURES>(el, KEYS_FLAT)
            .map((_, idx, arr) => {
              return arr[scaleDegrees[idx]];
            })
            .slice(0, scaleDegrees.length);
        });
        return (this.chords = chordScales);
      }
    }
  }

  get getChords() {
    return this.chords;
  }
}

// const makeScale = new MakeScale();
// makeScale.createScaleSharp(Keys_Sharp.C, MAJOR_PATTERN);
// makeScale.createScaleFlat(Keys_Flat["D♭"], MAJOR_PATTERN);
// const scale = makeScale.getScale;
const makeChord = new MakeChord();
// makeChord.createSeventhDimChords(scale);
// makeChord.createSixNinthChords(scale);
// makeChord.createSpecificChord("D", "m7b5");
makeChord.createChordFromScale(
  "C",
  [0, 2, 4, 6],
  HARMONIC_MINOR_PATTERN,
  [2, 5]
);
makeChord.createChordFromScale("C", [0, 2, 4, 6], MAJOR_PATTERN);
// makeChord.createSpecificChord("B", "M");
// const minors = makeChord.createChords(scale, "major", "m");

const chord = makeChord.getChords;

console.log(chord);

export { chord };
