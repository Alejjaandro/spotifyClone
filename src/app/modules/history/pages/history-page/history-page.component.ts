import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchServiceService } from '@modules/history/services/search-service.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {

  resultList$: Observable<any> = of([])

  constructor(private searchService: SearchServiceService) {}

  receiveData(event: string): void {
    this.resultList$ = this.searchService.searchTracks$(event)
  }
}
