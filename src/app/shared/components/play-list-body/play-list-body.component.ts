import { Component, Input, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { OrderListPipe } from '../../pipes/order-list.pipe';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgFor, NgTemplateOutlet } from '@angular/common';
import { FilterTracksService } from './services/filter-tracks.service';
import { TrackService } from '@modules/tracks/services/track.service';
import { filter, fromEvent, map } from 'rxjs';
import { CheckLocalStorageService } from '../../services/check-local-storage.service';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css'],
  standalone: true,
  imports: [NgFor, NgTemplateOutlet, ImgBrokenDirective, OrderListPipe]
})
export class PlayListBodyComponent {

  filterTracks = inject(FilterTracksService)
  checkLocalStorage = inject(CheckLocalStorageService)
  @Input() tracks: Array<TrackModel> = []

  likedSongs: Array<TrackModel> = []

  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  ngOnInit(): void {
    this.checkLocalStorage.watchStorage().subscribe(() => {
      this.getFavorites()
    })
  }

  getFavorites = () => {
    const songsInStorage = [...Object.values(localStorage)]
    this.filterTracks.getFavoritesTracks$(songsInStorage).subscribe((result: any) => {
      this.likedSongs = result
    })
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}
