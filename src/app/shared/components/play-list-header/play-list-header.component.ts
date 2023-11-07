import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-play-list-header',
    templateUrl: './play-list-header.component.html',
    styleUrls: ['./play-list-header.component.css'],
    standalone: true
})
export class PlayListHeaderComponent {
    @Input() songsNumber: number = 0
}
