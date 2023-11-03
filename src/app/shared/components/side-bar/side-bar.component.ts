import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css'],
    standalone: true,
    imports: [NgFor, RouterLink, NgClass]
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
        router: ['/', 'tracks']
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
  }

}
