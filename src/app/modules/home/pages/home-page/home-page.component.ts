import { Component } from '@angular/core';
import { MediaPlayerComponent } from '../../../../shared/components/media-player/media-player.component';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../../../shared/components/side-bar/side-bar.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [SideBarComponent, RouterOutlet, MediaPlayerComponent]
})
export class HomePageComponent {

}
