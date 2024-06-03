import { TypeCard, TypeExtra, Types } from '../interfaces';

export const CONSTANT = {
  PAGE_DEFAULT: 1,
  ITEMS_PER_PAGE: 20,
};

export const TYPE_COLOR: Record<TypeCard, TypeExtra> = {
  0: {
    id: 0,
    name: 'Normal',
    color: '#b8b8b8',
    icon: '../../../assets/icons/normal.svg',
  },
  1: {
    id: 1,
    name: 'Fire',
    color: '#f0932b',
    icon: '../../../assets/icons/fire.svg',
  },
  2: {
    id: 2,
    name: 'Water',
    color: '#0190FF',
    icon: '../../../assets/icons/water.svg',
  },
  3: {
    id: 3,
    name: 'Grass',
    color: '#00b894',
    icon: '../../../assets/icons/grass.svg',
  },
  4: {
    id: 4,
    name: 'Electric',
    color: '#fed330',
    icon: '../../../assets/icons/electric.svg',
  },
  5: {
    id: 5,
    name: 'Ice',
    color: '#74b9ff',
    icon: '../../../assets/icons/ice.svg',
  },
  6: {
    id: 6,
    name: 'Fighting',
    color: '#30336b',
    icon: '../../../assets/icons/fighting.svg',
  },
  7: {
    id: 7,
    name: 'Poison',
    color: '#6c5ce7',
    icon: '../../../assets/icons/poison.svg',
  },
  8: {
    id: 8,
    name: 'Ground',
    color: '#EFB549',
    icon: '../../../assets/icons/ground.svg',
  },
  9: {
    id: 9,
    name: 'Flying',
    color: '#81ecec',
    icon: '../../../assets/icons/flying.svg',
  },
  10: {
    id: 10,
    name: 'Psychic',
    color: '#a29bfe',
    icon: '../../../assets/icons/psychic.svg',
  },
  11: {
    id: 11,
    name: 'Bug',
    color: '#26de81',
    icon: '../../../assets/icons/bug.svg',
  },
  12: {
    id: 12,
    name: 'Rock',
    color: '#2d3436',
    icon: '../../../assets/icons/rock.svg',
  },
  13: {
    id: 13,
    name: 'Ghost',
    color: '#a55eea',
    icon: '../../../assets/icons/ghost.svg',
  },
  14: {
    id: 14,
    name: 'Dark',
    color: '#000',
    icon: '../../../assets/icons/dark.svg',
  },
  15: {
    id: 15,
    name: 'Dragon',
    color: '#ffeaa7',
    icon: '../../../assets/icons/dragon.svg',
  },
  16: {
    id: 16,
    name: 'Steel',
    color: '#92acb8',
    icon: '../../../assets/icons/steel.svg',
  },
  17: {
    id: 17,
    name: 'Fairy',
    color: '#FF0069',
    icon: '../../../assets/icons/fairy.svg',
  },
};
