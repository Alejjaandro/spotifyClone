import { Component, Input, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'app-card-player',
    templateUrl: './card-player.component.html',
    styleUrls: ['./card-player.component.css'],
    standalone: true,
    imports: [NgIf, ImgBrokenDirective, NgClass]
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track!: TrackModel

  private multimediaService = inject(MultimediaService)

  sendPlay(track: TrackModel): void {
    if(localStorage.getItem(track.name)) track.favorite = true
    
    this.multimediaService.trackInfo$.next(track)
  }
}
