import { Component, inject } from '@angular/core';
import { NgFor, NgTemplateOutlet } from '@angular/common';
import { SearchServiceService } from '@modules/history/services/search-service.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PlayListBodyComponent } from '../../../../shared/components/play-list-body/play-list-body.component';
import { SearchComponent } from '../../components/search/search.component';
import { OrderListPipe } from '@shared/pipes/order-list.pipe';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.css'],
    standalone: true,
    imports: [SearchComponent, PlayListBodyComponent, AsyncPipe, NgFor, NgTemplateOutlet, OrderListPipe]
})
export class HistoryPageComponent {

  resultList$: Observable<any> = of([])

  private searchService = inject(SearchServiceService)

  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }

  receiveData(event: string): void {
    this.resultList$ = this.searchService.searchTracks$(event)
  }
}
