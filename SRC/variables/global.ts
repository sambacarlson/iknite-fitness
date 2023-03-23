/**
 * GLOBAL VARIABLES
 */

import RNSystemSounds from '@dashdoc/react-native-system-sounds';

const primaryLight = '#df4994';
// const primaryLight = '#938e07';
// const primaryLighter = '#d9d10a';
const primaryLighter = '#ffa9e4';
const primaryDark = '#333';

export const variables = {
  colors: {
    primaryLight,
    primaryLighter,
    primaryDark,
    // secondaryDark: '',
  },
  fonts: {
    smallText: {fontSize: 12, fontWeight: 400},
    normalText: {fontSize: 14, fontWeight: 400, color: primaryLighter},
    mediumTitles: {fontSize: 18, fontWeight: 600, textTransform: 'uppercase'},
    bigTitles: {
      fontSize: 24,
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'white',
    },
  },
};

//// Beeps
export const rn_beeps = (counter: number) => {
  // play sounds
  if (counter < 4) {
    RNSystemSounds.beep();
  }
  if (counter === 0) {
    RNSystemSounds.beep(RNSystemSounds.Beeps.Negative);
  }
};
