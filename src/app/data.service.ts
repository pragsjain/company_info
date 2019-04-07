import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private _headers = {headers: new HttpHeaders().append("Content-Type","application/json")};
  constructor(private http: HttpClient) {} 
 
get(url):Observable<any>{   
   return this.http.get(url,this._headers).pipe(
   map((response) => {
     console.log(response);
      return response;
    }
    ))
 }

 getByJson(url){
  return this.http.get(url).pipe(
  map(
    (response: Response) => {
    return response.json()
    }))
}


}

  

