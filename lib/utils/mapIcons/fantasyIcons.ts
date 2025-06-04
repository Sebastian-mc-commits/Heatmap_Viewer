
export type IconName =
  | 'dragon2' | 'dragon3' | 'dragon4' | 'dragon5'
  | 'First'
  | 'goblin1' | 'goblin2' | 'goblin3' | 'goblin4'
  | 'knight1' | 'knight2' | 'knight3' | 'knight4' | 'knight5'
  | 'wizard1' | 'wizard2' | 'wizard3' | 'wizard4' | 'wizard5'
  | 'skeleton';

const generateIconNamesArray = () => {
  const icons: string[] = [];
  const ranges: { [key: string]: { start: number; end: number } } = {
    dragon: { start: 2, end: 5 },
    goblin: { start: 1, end: 4 },
    knight: { start: 1, end: 5 },
    wizard: { start: 1, end: 5 },
  };

  for (const prefix in ranges) {
    for (let i = ranges[prefix].start; i <= ranges[prefix].end; i++) {
      icons.push(`${prefix}${i}`);
    }
  }

  icons.push('First');
  icons.push('skeleton');

  return icons;
};

export const numberToIcon = (rank: number): IconName => {

  const flooredRank = Math.floor(rank);
  switch (flooredRank) {

    case 1: return 'First';
    case 2: return 'dragon2';
    case 3: return 'dragon3';
    case 4: return 'dragon4';
    case 5: return 'dragon5';
    case 6: return 'knight1';
    case 7: return 'knight2';
    case 8: return 'knight3';
    case 9: return 'knight4';
    case 10: return 'knight5';
    case 11: return 'wizard1';
    case 12: return 'wizard2';
    case 13: return 'wizard3';
    case 14: return 'wizard4';
    case 15: return 'wizard5';
    case 16: return 'goblin1';
    case 17: return 'goblin2';
    case 18: return 'goblin3';
    case 19: return 'goblin4';
    default: return 'skeleton';
  }
}

export const ICON_NAMES_ARRAY = generateIconNamesArray();

export function isValidIconName(name: string): name is IconName {
  return ICON_NAMES_ARRAY.includes(name);
}