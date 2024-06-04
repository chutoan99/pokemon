import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, filter, map, throwError } from 'rxjs';
import { ParamCard } from '../models/params.model';
import { Card, Types } from '../interfaces';
import { conFigParams } from '../helpers';
import {
  CardListResponse,
  DetailCardResponse,
  Pagination,
  TypeCardResponse,
} from '../interfaces/home.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pagination!: Pagination;

  private readonly _endPoint: string =
    'https://api.vandvietnam.com/api/pokemon-api';

  constructor(private _httpClient: HttpClient) {}

  /**
   * @param {ParamCard} params
   * @return {Observable<Card[] | []>}
   */
  public getList(params: ParamCard): Observable<Card[] | []> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const paramString: string = conFigParams(params);

    return this._httpClient
      .get<CardListResponse>(
        `${this._endPoint}/pokemons?${paramString}`,
        httpOptions
      )
      .pipe(
        filter(
          (res: CardListResponse) => res.status === 200 && res.data !== null
        ),
        map((res: CardListResponse) => {
          this.pagination = res.meta;
          return res.data || [];
        }),
        catchError(this._handleError)
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

    return this._httpClient
      .get<DetailCardResponse>(`${this._endPoint}/pokemons/${id}`, httpOptions)
      .pipe(
        filter(
          (res: DetailCardResponse) => res.status === 200 && res.data !== null
        ),
        map((res: DetailCardResponse) => res.data || {}),
        catchError(this._handleError)
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
    return this._httpClient
      .get<TypeCardResponse>(`${this._endPoint}/types`, httpOptions)
      .pipe(
        filter(
          (res: TypeCardResponse) => res.status === 200 && res.data !== null
        ),
        map((res: TypeCardResponse) => res.data || []),
        catchError(this._handleError)
      );
  }

  /**
   * @param {string} id
   * @return {Observable<Blob>}
   */
  public getImage(id: string): Observable<Blob> {
    return this._httpClient.get(`${this._endPoint}/pokemons/${id}/sprite`, {
      responseType: 'blob',
    });
  }

  /**
   * @param error
   * @return {Observable<never>}
   */
  private _handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
