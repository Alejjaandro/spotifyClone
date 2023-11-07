import { Component, inject } from '@angular/core';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from '@shared/components/play-list-header/play-list-header.component';
import { FilterTracksService } from '@modules/favorites/services/filter-tracks.service';
import { CheckLocalStorageService } from '@modules/favorites/services/check-local-storage.service';
import { TrackModel } from '@core/models/tracks.model';

@Component({
    selector: 'app-favorites-page',
    templateUrl: './favorites-page.component.html',
    styleUrls: ['./favorites-page.component.css'],
    standalone: true,
    imports: [PlayListHeaderComponent, PlayListBodyComponent]
})
export class FavoritesPageComponent {

    favoritesList: Array<TrackModel> = []
    favoriteSongs: number = 0

    filterTracks = inject(FilterTracksService)
    checkLocalStorage = inject(CheckLocalStorageService)

    ngOnInit(): void {
        this.checkLocalStorage.watchStorage().subscribe(() => {
            this.getFavorites()
            this.favoriteSongs = localStorage.length
        })
    }

    getFavorites = () => {
        const songsInStorage = [...Object.values(localStorage)]
        this.filterTracks.getFavoritesTracks$(songsInStorage).subscribe((result: any) => {
            this.favoritesList = result
        })
    }

}
