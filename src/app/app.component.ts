import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { NgFor } from '@angular/common';
import { FloatMenuComponent } from './components/float-menu/float-menu.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProjectComponent,
    NgFor,
    FloatMenuComponent,
    AboutMeComponent,
    FooterComponent,
    SkillsComponent,
    WhatsappComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';
  constructor() {}
}
