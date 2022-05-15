export type typeChord =
  | "M"
  | "m"
  | "dim"
  | "M7"
  | "m7"
  | "m7#5"
  | "dom7"
  | "dom7add9"
  | "m7b5"
  | "dim7"
  | "mM7"
  | "M6"
  | "m6"
  | "M6/9"
  | "m6/9"
  | "M9"
  | "m9"
  | "m9b5"
  | "m9#5"
  | "dom9"
  | "M11"
  | "m11"
  | "dom11"
  | "M13"
  | "m13"
  | "dom13"
  | "dom13b9"
  | "dom13#9"
  | "dom13b5"
  | "dom13#5"
  | "aug"
  | "aug7"
  | "sus4"
  | "7sus4"
  | "dom7#4"
  | "M7b5"
  | "M7#5"
  | "dom7#5b9"
  | "dom7b5#9"
  | "dom7#5#9"
  | "dom7b5b9"
  | "dom7#9"
  | "dom7b9"
  | "dom9b5"
  | "dom9#5"
  | "sus9"
  | "Madd9"
  | "madd9";

export type typeScale = "major" | "minor";

export enum Keys_Flat {
  "D♭" = "D♭",
  "D" = "D",
  "E♭" = "E♭",
  "E" = "E",
  "F" = "F",
  "G♭" = "G♭",
  "G" = "G",
  "A♭" = "A♭",
  "A" = "A",
  "B♭" = "B♭",
  "B" = "B",
  "C" = "C",
}

export enum Keys_Sharp {
  "C" = "C",
  "D" = "D",
  "E" = "E",
  "G" = "G",
  "A" = "A",
  "B" = "B",
}

export type SHARPS_KEY_SIGNATURES =
  | "C"
  | "C♯"
  | "D"
  | "D♯"
  | "E"
  | "F"
  | "F♯"
  | "G"
  | "G♯"
  | "A"
  | "A♯"
  | "B";
export type FLAT_KEY_SIGNATURES =
  | "D"
  | "D♭"
  | "E"
  | "E♭"
  | "F"
  | "G♭"
  | "G"
  | "A♭"
  | "A"
  | "B♭"
  | "B"
  | "C";

export interface SCALE_PATTERN {
  key: (string | number)[];
}

export interface SCALE_PATTERN_EXTENDS {
  degree: typeChord;
  value?: (string | number)[];
  key?: SHARPS_KEY_SIGNATURES | FLAT_KEY_SIGNATURES;
}
