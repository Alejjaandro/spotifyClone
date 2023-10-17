import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private readonly URL = "http://localhost:8000/api/1.0"

  constructor(private httpClient: HttpClient) {}

  searchTracks$(term: any): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks?src=${term}`)
    .pipe(
      map((dataRaw: any) => dataRaw.data)
    )
  }

}
