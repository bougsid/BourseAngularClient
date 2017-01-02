import {Injectable} from "@angular/core";
import "../../rxjs-operators";
import {Response, Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
@Injectable()
export class LoginService {
  private url = 'http://localhost:8080/user/login';

  constructor(private http: Http) {
  }

  login(username: string, password: string): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers}); // Create a request option

    return this.http.post(this.url, {name: username, password: password}, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  isLoggedIn() {
    if (localStorage.getItem('id_token'))return true;
    return false;
  }
}
