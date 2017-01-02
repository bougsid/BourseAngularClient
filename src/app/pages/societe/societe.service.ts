import {Injectable} from "@angular/core";
import "../../rxjs-operators";
import {Response, Http, Headers, RequestOptions, RequestMethod} from "@angular/http";
import {Observable} from "rxjs";
import {Societe, Infos} from "./societe";
import { AuthHttp } from 'angular2-jwt';
@Injectable()
export class SocieteService {
  societes: Array<Societe>;

  private basicSocieteUrl = "http://localhost:8080/api/societes";
  private societeUrl = "http://localhost:8080/api/societe/";
  private _totalPages: Number = 0;
  private _totalOrdrePages: Number = 0;

  constructor(private http: AuthHttp) {
  }

  get totalPages(): Number {
    return this._totalPages;
  }

  set totalPages(value: Number) {
    this._totalPages = value;
  }

  get totalOrdrePages(): Number {
    return this._totalOrdrePages;
  }

  set totalOrdrePages(value: Number) {
    this._totalOrdrePages = value;
  }

  getSocietes(page: Number, size: Number): Observable<Societe[]> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    headers.append('Authorization', 'bearer ' + localStorage.getItem('id_token'));
    let options = new RequestOptions( {method: RequestMethod.Get, headers: headers });
    return this.http.get(this.basicSocieteUrl + "?page=" + page + "&size=" + size)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  getOrdres(code: string, page: Number, size: Number): Observable<Societe[]> {
    return this.http.get(this.societeUrl + code + "/ordres/" + page + "/" + size)
      .map(res => {
        let body = res.json();
        this.totalOrdrePages = body.totalPages;
        return body.content;
      })
      .catch(this.handleError);
  }

  getInfos(code: string): Observable<Infos> {
    return this.http.get(this.societeUrl + code + "/infos/")
      .map(res => {
        return res.json();
      })
      .catch(this.handleError);
  }

  getSociete(code: string): Observable<Societe> {
    return this.http.get(this.societeUrl + code)
      .map(res => {
        return res.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    this._totalPages = body.page.totalPages;
    return body._embedded.societes || {};
  }
}
