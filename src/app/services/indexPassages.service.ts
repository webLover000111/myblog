import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class IndexPassagesService{
  constructor(private http: Http){}
  getUrl(): any{
    return this.http.get('/api')
      .map(res => res.json());
}
}
