import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import { GenericSectionComponent } from '../../../../shared/components/generic-section/generic-section.component';

@Component({
    selector: 'app-tracks-page',
    templateUrl: './tracks-page.component.html',
    styleUrls: ['./tracks-page.component.css'],
    standalone: true,
    imports: [GenericSectionComponent]
})
export class TracksPageComponent {

  trendingTracks: Array<TrackModel> = []
  randomTracks: Array<TrackModel> = []
  observersList$: Array<Subscription> = []

  constructor (private trackService: TrackService) {}

  ngOnInit(): void {
    this.loadAllData()
    this.loadRandomData()
  }

  async loadAllData(): Promise<any> {
    this.trendingTracks = await this.trackService.getAllTracks$().toPromise()
  }

  async loadRandomData(): Promise<any> {
    this.randomTracks = await this.trackService.getRandomTracks$().toPromise()
  }
  
  ngOnDestroy(): void {

  }
}
