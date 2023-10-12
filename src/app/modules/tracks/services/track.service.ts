import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  
  private readonly URL = "http://localhost:8000/api/1.0"

  constructor(private httpClient: HttpClient) {}

  private skipById(trackList: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const newTrackList = trackList.filter(track => track._id != id)
      resolve(newTrackList)
    })
  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any) => { return data }),
      catchError((error) => {
        console.log('Something went wrong', error)
        return of([])
      })
    )
  }

  getRandomTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      mergeMap(({ data }: any) => this.skipById(data, 1)),
      catchError((error) => {
        console.log('Something went wrong', error)
        return of([])
      })
    )
  }
}
