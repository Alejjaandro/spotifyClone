import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  mainMenu: {
    defaultOptions: Array<any>, 
    accessLink: Array<any>
  } = {defaultOptions: [], accessLink: []}

  customOptions: Array<any> = []

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Search',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Your Library',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Create List',
        icon: 'uil uil-plus-square'
      },
      {
        name: 'Liked Songs',
        icon: 'uil uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]

  }

}
