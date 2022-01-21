import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private _http: HttpClient) {}

  create(post: any): Observable<any> {
    return this._http.post(``, post);
  }

  fetch(): Observable<any[]> {
    return this._http.get<any[]>(``);
  }

  remove(id: number): Observable<any> {
    return this._http.delete<void>(`${id}`);
  }
}
