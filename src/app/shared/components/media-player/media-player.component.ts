import { Component, ElementRef, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';
import { NgTemplateOutlet, NgIf, NgClass, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.css'],
    standalone: true,
    imports: [NgTemplateOutlet, NgIf, NgClass, AsyncPipe]
})
export class MediaPlayerComponent {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state: string = 'paused'

  constructor(public multimediaService: MultimediaService) {  }

  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$
    .subscribe(status => this.state = status)

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(sub => sub.unsubscribe())
  }

  handlePosition(event: MouseEvent): void {
    const nativeEl: HTMLElement = this.progressBar.nativeElement
    const {clientX} = event
    const {x, width} = nativeEl.getBoundingClientRect()
    const clickX = clientX - x
    const percentageFromX = (clickX * 100) / width
    this.multimediaService.seekAudio(percentageFromX)
  }
}
