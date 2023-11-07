import { Component, inject } from '@angular/core';
import { CheckLocalStorageService } from '@shared/services/check-local-storage.service';

@Component({
    selector: 'app-play-list-header',
    templateUrl: './play-list-header.component.html',
    styleUrls: ['./play-list-header.component.css'],
    standalone: true
})
export class PlayListHeaderComponent {
    
    public favoriteSongs: number = 0
    checkLocalStorage = inject(CheckLocalStorageService)

    ngOnInit(): void {
        this.checkLocalStorage.watchStorage().subscribe(() => {
            this.favoriteSongs = localStorage.length
        })
    }
}
