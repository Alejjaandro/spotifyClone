import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private readonly URL = "https://alejjaandro-spotify-clone-api.vercel.app"

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
