import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  
  dataTrendingTracks$: Observable<TrackModel[]> = of([])
  dataRandomTracks$: Observable<any> = of([])

  constructor() {
    const {data}: any = (dataRaw as any).default

    this.dataTrendingTracks$ = of(data)
    this.dataRandomTracks$ = new Observable((observer) => {

      const trackExample: TrackModel = {
        _id: 9,
        name: 'Leve',
        album: 'Cartel de Santa',
        url: 'http://',
        cover: ''
      }

      setTimeout(() => {observer.next([trackExample])}, 3500)
    })
  }
}
