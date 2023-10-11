import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {

  trendingTracks: Array<TrackModel> = []
  randomTracks: Array<TrackModel> = []

  observersList$: Array<Subscription> = []

  constructor (private trackService: TrackService) {}

  ngOnInit(): void {
    const observer$1 = this.trackService.dataTrendingTracks$.subscribe(
      (response => {
        this.trendingTracks = response
        this.randomTracks = response
        console.log('Trending tracks', response)
      })
    )

    const observer$2 = this.trackService.dataRandomTracks$.subscribe(
      (response => {
        this.randomTracks = [...this.randomTracks, ...response]
        console.log('Random tracks', response)
      })
    )

    this.observersList$ = [observer$1, observer$2]
  }

  ngOnDestroy(): void {
    this.observersList$.forEach(sub => sub.unsubscribe())
  }
}
