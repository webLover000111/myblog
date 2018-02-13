import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class FrontendService{
  constructor(private http: Http){}
  getUrl(): any{
    return this.http.get('/api/variety/frontend')
      .map(res => res.json());
  }
}
