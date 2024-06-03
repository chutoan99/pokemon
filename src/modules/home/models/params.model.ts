import { GenerationCard, LegendaryCard, TypeCard } from '../interfaces';
import { CONSTANT } from '../resources';

export class ParamCard {
  page: number = CONSTANT.PAGE_DEFAULT;
  size: number = CONSTANT.PAGE_LIMIT;
  sort?: string;
  name?: string;
  generation?: GenerationCard;
  legendary?: LegendaryCard;
  type?: TypeCard;
  min_total?: number;
  max_total?: number;
  min_speed?: number;
  max_speed?: number;
  min_sp_def?: number;
  max_sp_def?: number;
  max_sp_atk?: number;
  min_sp_atk?: number;
  max_hp?: number;
  min_hp?: number;
  max_defense?: number;
  min_defense?: number;
  max_attack?: number;
  min_attack?: number;
}
