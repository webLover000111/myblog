import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class BackendService{
  constructor(private http: Http){}
  getUrl(): any{
    return this.http.get('/api/variety/backend')
      .map(res => res.json());
  }
}
