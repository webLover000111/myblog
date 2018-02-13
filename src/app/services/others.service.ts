import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class OthersService{
  constructor(private http: Http){}
  getUrl(): any{
    return this.http.get('/api/variety/others')
      .map(res => res.json());
  }
}
