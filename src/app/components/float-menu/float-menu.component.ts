import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../../service/dark-mode.service';

@Component({
  selector: 'app-float-menu',
  standalone: true,
  imports: [NgIf],
  templateUrl: './float-menu.component.html',
  styleUrl: './float-menu.component.scss',
})
export class FloatMenuComponent {
  constructor(
    private router: Router,
    public darkModeService: DarkModeService
  ) {}

  goTo(route: string) {
    this.router.navigate([route]);
  }

  changeTheme() {
    this.darkModeService.setDarkMode(!this.darkModeService.isDarkMode());
  }
}
