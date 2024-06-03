import { Card, Types } from './card.interface';

export interface CardListResponse {
  data?: Card[] | null;
  links: LinkResponse;
  meta: Pagination;
  status: number;
  success: boolean;
}

export interface DetailCardResponse {
  data?: Card | null;
  status: number;
  success: boolean;
}

export interface TypeCardResponse {
  status: number;
  success: boolean;
  data?: Types[] | null;
}

type LinkResponse = {
  first: string;
  last: string;
  prev?: null;
  next: string;
};

export type Pagination = {
  per_page: number;
  current_page: number;
  from: number;
  to: number;
  total: number;
  last_page: number;
  path: string;
};




