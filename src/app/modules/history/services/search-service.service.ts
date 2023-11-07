import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private readonly URL = "http://localhost:8000"

  private httpClient = inject(HttpClient)

  searchTracks$(term: any): Observable<any> {
    console.log(term)
  
    return this.httpClient.get(`${this.URL}/tracks?src=${term}`)
    .pipe(      
      map((response: any) => {
        console.log(response)
        return response
      })
    )
  }
}
