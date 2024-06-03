export type LegendaryCard = 0 | 1;
export type GenerationCard = NumRange<7>;
export type TypeCard = NumRange<18>;

export type Types = {
  id: TypeCard;
  name: string;
};

export type TypeExtra = Types & {
  color: string;
};

export type Card = {
  id: string;
  number: number;
  name: string;
  type_1: TypeCard;
  type_2?: TypeCard;
  total: number;
  hp: number;
  attack: number;
  defense: number;
  sp_atk: number;
  sp_def: number;
  speed: number;
  generation: GenerationCard;
  legendary: LegendaryCard;
  created_at: string;
  updated_at: string;
};
