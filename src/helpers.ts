import { FLAT_KEY_SIGNATURES, SHARPS_KEY_SIGNATURES } from "./types";

//Get order from specific note
export const retriveOrder = <T>(note: T, arrayNotes: T[]): T[] => {
  const findIdx = arrayNotes.findIndex((el) => el === note);
  const actualOrder = arrayNotes.slice(findIdx, arrayNotes.length);
  const rest = arrayNotes.slice(0, findIdx);
  return [...actualOrder, ...rest];
};

// export const changeKeys = (
//   key: SHARPS_KEY_SIGNATURES | FLAT_KEY_SIGNATURES
// ) => {
//   if (key.includes("♯")) {
//     if (key === "A♯") key = "B";
//     if (key === "G♯") key = "A";
//     if (key === "C♯") key = "D";
//     if (key === "D♯") key = "E";
//     if (key === "F♯") key = "G";

//     return key;
//   } else if (key.includes("♭")) {
//     if (key === "A♭") key = "A";
//     if (key === "G♭") key = "G";
//     if (key === "B♭") key = "B";
//     if (key === "D♭") key = "D";
//     if (key === "E♭") key = "E";
//     return key;
//   } else {
//     if (key === "B") key = "C";
//     if (key === "C") key = "C♯";
//     if (key === "F") key = "F♯";
//     if (key === "A") key = "A♯";
//     if (key === "G") key = "G♯";
//     if (key === "D") key = "D♯";
//     if (key === "E") key = "F";

//     return key;
//   }
// };

// Change key from note
export const changeKeys = (
  key: SHARPS_KEY_SIGNATURES | FLAT_KEY_SIGNATURES
) => {
  if (key.includes("♯")) {
    if (key === "A♯") key = "B♭";
    if (key === "G♯") key = "A♭";
    if (key === "C♯") key = "D♭";
    if (key === "D♯") key = "E♭";
    if (key === "F♯") key = "G♭";

    return key;
  } else if (key.includes("♭")) {
    if (key === "A♭") key = "G♯";
    if (key === "G♭") key = "F♯";
    if (key === "B♭") key = "A♯";
    if (key === "D♭") key = "C♯";
    if (key === "E♭") key = "D♯";
    return key;
  } else {
    return key;
  }
};
//2,5
export const switchKeySignature = (
  scale: (SHARPS_KEY_SIGNATURES | FLAT_KEY_SIGNATURES)[],
  alteredDegrees: number[]
) => {
  return scale.map((key, idx) => {
    if (alteredDegrees.indexOf(idx) >= 0) {
      return changeKeys(key);
    } else {
      return key;
    }
  });
};
