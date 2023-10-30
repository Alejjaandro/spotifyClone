import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { CardPlayerComponent } from '../card-player/card-player.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-generic-section',
    templateUrl: './generic-section.component.html',
    styleUrls: ['./generic-section.component.css'],
    standalone: true,
    imports: [NgClass, NgFor, CardPlayerComponent]
})
export class GenericSectionComponent {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<TrackModel> = []
}
