import { Component } from '@angular/core';
import { DarkModeService } from '../../service/dark-mode.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  constructor(public darkModeService: DarkModeService) {}
}
