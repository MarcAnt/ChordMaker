import {
  FLAT_KEY_SIGNATURES,
  SCALE_PATTERN,
  SHARPS_KEY_SIGNATURES,
} from "./types";

export const KEYS_SHARP: SHARPS_KEY_SIGNATURES[] = [
  "C",
  "C♯",
  "D",
  "D♯",
  "E",
  "F",
  "F♯",
  "G",
  "G♯",
  "A",
  "A♯",
  "B",
];
export const KEYS_FLAT: FLAT_KEY_SIGNATURES[] = [
  "D♭",
  "D",
  "E♭",
  "E",
  "F",
  "G♭",
  "G",
  "A♭",
  "A",
  "B♭",
  "B",
  "C",
];

export const MAJOR_PATTERN: SCALE_PATTERN[] = [
  { key: ["T", 2] },
  { key: ["T", 4] },
  { key: ["ST", 5] },
  { key: ["T", 7] },
  { key: ["T", 9] },
  { key: ["T", 11] },
];

export const MINOR_PATTERN: SCALE_PATTERN[] = [
  { key: ["T", 2] },
  { key: ["TS", 3] },
  { key: ["T", 5] },
  { key: ["T", 7] },
  { key: ["ST", 8] },
  { key: ["T", 10] },
];

export const HARMONIC_MINOR_PATTERN: SCALE_PATTERN[] = [
  { key: ["T", 2] },
  { key: ["TS", 3] },
  { key: ["T", 5] },
  { key: ["T", 7] },
  { key: ["ST", 8] },
  { key: ["TS", 11] },
];

//Scale patterns for make chords
export const scale_patterns = {
  major: (idx: number) =>
    idx === 0 || idx === 3 ? "M" : idx === 6 ? "dim" : idx === 4 ? "dom" : "m",
  minor: (idx: number) =>
    idx === 0 || idx === 3 || idx === 4 ? "m" : idx === 1 ? "dim" : "M",
};

export const chord_patterns = {
  M: [0, 4, 7],
  dom: [0, 4, 7],
  m: [0, 3, 7],
  dim: [0, 3, 6],
  aug: [0, 4, 8],
  M7: [0, 4, 7, 11],
  M7b5: [0, 4, 6, 11],
  "M7#5": [0, 4, 8, 11],
  m7: [0, 3, 7, 10],
  "m7#5": [0, 3, 8, 10],
  dom7: [0, 4, 7, 10],
  dom7add9: [0, 4, 7, 10, 2],
  m7b5: [0, 3, 6, 10],
  dim7: [0, 3, 6, 9],
  mM7: [0, 3, 7, 11],
  "dom7#4": [0, 4, 6, 10],
  "dom7#5b9": [0, 4, 8, 10, 1],
  "dom7b5#9": [0, 4, 6, 10, 3],
  "dom7#5#9": [0, 4, 8, 10, 3],
  dom7b5b9: [0, 4, 6, 10, 1],
  "dom7#9": [0, 4, 7, 10, 3],
  aug7: [0, 4, 8, 10],
  "7sus4": [0, 5, 7, 10],
  M9: [0, 4, 7, 11, 2],
  M9b5: [0, 4, 6, 11, 2],
  "M9#5": [0, 4, 8, 11, 2],

  m9: [0, 3, 7, 10, 2],

  m9b5: [0, 3, 5, 10, 2],
  "m9#5": [0, 3, 8, 10, 2],

  dom9: [0, 4, 7, 10, 2],
  dom7b9: [0, 4, 7, 10, 1],
  dom9b5: [0, 4, 6, 10, 2],
  "dom9#5": [0, 4, 8, 10, 2],
  M6: [0, 4, 7, 9],
  m6: [0, 3, 7, 9],
  "M6/9": [0, 4, 7, 9, 2],
  "m6/9": [0, 3, 7, 9, 2],
  sus4: [0, 5, 7],
  sus9: [0, 5, 7, 10, 2],
  Madd9: [0, 4, 7, 2],
  madd9: [0, 3, 7, 3],
  M11: [0, 4, 7, 11, 2, 5],
  m11: [0, 3, 7, 10, 2, 5],
  dom11: [0, 4, 7, 10, 2, 5],
  M13: [0, 4, 7, 11, 2, 5, 9],
  m13: [0, 3, 7, 10, 2, 5, 9],
  dom13: [0, 4, 7, 10, 2, 5, 9],
  dom13b9: [0, 4, 7, 10, 1, 5, 9],
  "dom13#9": [0, 4, 7, 10, 3, 5, 9],
  dom13b5: [0, 4, 6, 10, 2, 5, 9],
  "dom13#5": [0, 4, 8, 10, 2, 5, 9],
};
