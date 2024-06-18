import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-float-menu',
  standalone: true,
  imports: [],
  templateUrl: './float-menu.component.html',
  styleUrl: './float-menu.component.scss',
})
export class FloatMenuComponent {
  constructor(private router: Router) {}

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
