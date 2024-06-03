import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import {
  CardListResponse,
  DetailCardResponse,
  TypeCardResponse,
} from '../interfaces/home.interface';
import { ParamCard } from '../models/params.model';
import { Card, Types } from '../interfaces';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private urls : any[] = [];
  private readonly _endPoint: string =
    'https://api.vandvietnam.com/api/pokemon-api';

  constructor(private _http: HttpClient) {}

  /**
   * @param {ParamCard} param
   * @return {Observable<Card[] | []>}
   */
  public getList(params: ParamCard): Observable<Card[] | []> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: {
        'page[size]': params.size,
        'page[number]': params.page,
        'page[sort]': params.sort || '',
        'page[name]': params.name || '',
        'page[generation]': params.generation || '',
        'page[legendary]': params.legendary || '',
        'page[type]': params.type || '',
        'page[min_total]': params.min_total || '',
        'page[max_total]': params.max_total || '',
        'page[min_speed]': params.min_speed || '',
        'page[max_speed]': params.max_speed || '',
        'page[min_sp_def]': params.min_sp_def || '',
        'page[max_sp_def]': params.max_sp_def || '',
        'page[min_sp_atk]': params.min_sp_atk || '',
        'page[max_sp_atk]': params.max_sp_atk || '',
        'page[max_hp]': params.max_hp || '',
        'page[min_hp]': params.min_hp || '',
        'page[max_defense]': params.max_defense || '',
        'page[min_defense]': params.min_defense || '',
        'page[max_attack]': params.max_attack || '',
        'page[min_attack]': params.min_attack || '',
      },
    };

    return this._http
      .get<CardListResponse>(`${this._endPoint}/pokemons`, httpOptions)
      .pipe(
        filter(
          (res: CardListResponse) => res.status === 200 && res.data !== null
        ),
        map((res: CardListResponse) => res.data || [])
      );
  }

  /**
   * @param {string} id
   * @return {Observable<Card | {}>}
   */
  public getDetail(id: string): Observable<Card | {}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this._http
      .get<DetailCardResponse>(`${this._endPoint}/pokemons/${id}`, httpOptions)
      .pipe(
        filter(
          (res: DetailCardResponse) => res.status === 200 && res.data !== null
        ),
        map((res: DetailCardResponse) => res.data || {})
      );
  }

  /**
   * @return {Observable<Types[] | []>}
   */
  public getTypes(): Observable<Types[] | []> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this._http
      .get<TypeCardResponse>(`${this._endPoint}/types`, httpOptions)
      .pipe(
        filter(
          (res: TypeCardResponse) => res.status === 200 && res.data !== null
        ),
        map((res: TypeCardResponse) => res.data || [])
      );
  }


  public getImage(id: string): Observable<Blob> {
    return this._http
      .get(`${this._endPoint}/pokemons/${id}/sprite`, {
        responseType: "blob"
      });
  }
}
