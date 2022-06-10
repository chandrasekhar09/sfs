import { Component } from '@angular/core';
export interface ToolbarItem {
  title: string;
  routerLink: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Surplus Food Service';
  toolbarItems: ToolbarItem[] = [
    { title: 'Home', routerLink: 'home' },
    { title: 'About', routerLink: 'about' },
    { title: 'Admin', routerLink: 'admin' },
    { title: 'Donor', routerLink: 'donor' },
    { title: 'volunteer', routerLink: 'volunteer' },
  ];
}
