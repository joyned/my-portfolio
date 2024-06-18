import { Component } from '@angular/core';
import { DarkModeService } from '../../service/dark-mode.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgIf],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  constructor(public darkModeService: DarkModeService) {}
}
