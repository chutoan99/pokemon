export type LegendaryCard = 0 | 1;
export type GenerationCard = NumRange<7>;
export type TypeCard = NumRange<18>;

export type Types = {
  id: TypeCard;
  name: string;
};

export type TypeExtra = Types & {
  color: string;
  icon: any;
};

export class Card {
  id: string = '';
  number: number = 0;
  name: string = '';
  type_1: TypeCard = 0;
  type_2?: TypeCard = undefined;
  total: number = 0;
  hp: number = 0;
  attack: number = 0;
  defense: number = 0;
  sp_atk: number = 0;
  sp_def: number = 0;
  speed: number = 0;
  generation: GenerationCard = 1;
  legendary: LegendaryCard = 0;
  created_at: string = '';
  updated_at: string = '';
}
