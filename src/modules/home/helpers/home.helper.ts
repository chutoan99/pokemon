import { ParamCard } from '../models';

/**
 * @param {ParamCard} param
 * @return {string}
 */
export function conFigParams(params: ParamCard): string {
  const newParams = {
    size: params.size,
    number: params.page,
    sort: params.sort || '',
    name: params.name || '',
    generation: params.generation || '',
    legendary: params.legendary || '',
    type: params.type || '',
    min_total: params.min_total || '',
    max_total: params.max_total || '',
    min_speed: params.min_speed || '',
    max_speed: params.max_speed || '',
    min_sp_def: params.min_sp_def || '',
    max_sp_def: params.max_sp_def || '',
    min_sp_atk: params.min_sp_atk || '',
    max_sp_atk: params.max_sp_atk || '',
    max_hp: params.max_hp || '',
    min_hp: params.min_hp || '',
    max_defense: params.max_defense || '',
    min_defense: params.min_defense || '',
    max_attack: params.max_attack || '',
    min_attack: params.min_attack || '',
  };

  //* Filter out undefined, null, or empty string values
  const filteredParams = Object.fromEntries(
    Object.entries(newParams).filter(
      ([_key, value]) => value !== '' && value != null
    )
  );
  console.log(filteredParams, 'filteredParams');
  //* Construct the query string
  const queryString = Object.keys(filteredParams)
    .map((key) => {
      let prefix = '';
      if (key === 'size' || key === 'number') {
        prefix = 'page';
      } else {
        prefix = 'filter';
      }

      return `${prefix}[${key}]=${encodeURIComponent(filteredParams[key])}`;
    })
    .join('&');

  return queryString;
}

/**
 * @param {string | undefined} value
 * @return {string | undefined}
 */
export function capitalizeFirstLetter(value?: string): string | undefined {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
}
