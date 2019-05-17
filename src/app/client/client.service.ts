import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { iClient } from './Client'
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) { }

  clientUrl = 'http://localhost:8081'

  getClient() {
    return this.http.get<iClient>(this.clientUrl)
  }

  addClient (client: iClient):Observable<iClient> {
    return this.http.post<iClient>(this.clientUrl, client, httpOptions)
  }

}
