import { Component, ElementRef, ViewChild, inject, DestroyRef } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { NgTemplateOutlet, NgIf, NgClass, AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { TrackModel } from '@core/models/tracks.model';
import { CheckLocalStorageService } from '@modules/favorites/services/check-local-storage.service';
@Component({
    selector: 'app-media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.css'],
    standalone: true,
    imports: [NgTemplateOutlet, NgIf, NgClass, AsyncPipe]
})
export class MediaPlayerComponent {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')

  state: string = 'paused'

  multimediaService = inject(MultimediaService)
  checkLocalStorage = inject(CheckLocalStorageService)
  destroyRef = inject(DestroyRef)

  allTracks: Array<TrackModel> = []

  ngOnInit(): void {
    this.multimediaService.playerStatus$
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(status => this.state = status)
  }

  handlePosition(event: MouseEvent): void {
    const nativeEl: HTMLElement = this.progressBar.nativeElement
    const {clientX} = event
    const {x, width} = nativeEl.getBoundingClientRect()
    const clickX = clientX - x
    const percentageFromX = (clickX * 100) / width
    this.multimediaService.seekAudio(percentageFromX)
  }

  toggleFavorites = (track: TrackModel) => {
    if(track.favorite) {
      track.favorite = !track.favorite
      this.checkLocalStorage.removeItem(track.name)
    } else {
      track.favorite = !track.favorite
      this.checkLocalStorage.setItem(track.name, track.name)
    }
  }
}
