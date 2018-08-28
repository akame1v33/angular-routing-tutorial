import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public testRequest(){
    return this.httpClient.get('http://localhost:8081/api/tokenista', { withCredentials: true });
    // return this.httpClient.get('http://localhost:8081/api/top-export-markets');
  }
}
