import { Component, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchServiceService } from '@modules/history/services/search-service.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PlayListBodyComponent } from '../../../../shared/components/play-list-body/play-list-body.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.css'],
    standalone: true,
    imports: [SearchComponent, PlayListBodyComponent, AsyncPipe]
})
export class HistoryPageComponent {

  resultList$: Observable<any> = of([])

  private searchService = inject(SearchServiceService)

  receiveData(event: string): void {
    this.resultList$ = this.searchService.searchTracks$(event)
  }
}
