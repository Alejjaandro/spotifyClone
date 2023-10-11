import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    name: "BEBE (Official Video)",
    album: "Giolì & Assia",
    url: 'http://localhost:3000/track-3.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) {  }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {console.log('Receiving track', response)}
    )

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(sub => sub.unsubscribe())
  }
}
