import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  
  private readonly URL = "https://alejjaandro-spotify-clone-api.vercel.app"

  private httpClient = inject(HttpClient)

  private skipById(trackList: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const newTrackList = trackList.filter(track => track._id != id)
      resolve(newTrackList)
    })
  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe( map( (response: any) => { return response } ),
      catchError((error) => {
        console.log('Something went wrong', error)
        return of([])
      })
    )
  }

  getRandomTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe( mergeMap( (response: any) => this.skipById(response, 1) ),
      catchError((error) => {
        console.log('Something went wrong', error)
        return of([])
      })
    )
  }

}
