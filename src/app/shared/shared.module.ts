import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    UserHeaderComponent,
    CardPlayerComponent,
    GenericSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    UserHeaderComponent,
    GenericSectionComponent,
    CardPlayerComponent
  ]
})
export class SharedModule { }
