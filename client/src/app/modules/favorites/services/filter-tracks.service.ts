import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterTracksService {
  private readonly URL = "https://alejjaandro-spotify-clone-api.vercel.app"

  private httpClient = inject(HttpClient)

  getFavoritesTracks$(favorites: Array<string>): Observable<any> {
    return this.httpClient.get<Array<any>>(`${this.URL}/tracks`)
    .pipe( 
      map((response: Array<TrackModel>) => {
        // Filter the tracks based on the favorites array
        return response.filter(track => favorites.includes(track.name))
      })
    )
  }
}
