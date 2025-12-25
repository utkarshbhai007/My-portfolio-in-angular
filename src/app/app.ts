import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Education } from './education/education';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    Experience,
    Skills,
    Projects,
    Education,
    Footer,
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero id="home"></app-hero>
      <app-experience id="experience"></app-experience>
      <app-skills id="skills"></app-skills>
      <app-projects id="projects"></app-projects>
      <app-education id="education"></app-education>
    </main>
    <app-footer id="contact"></app-footer>
  `,
  styles: [`
    main {
      padding-top: 80px;
    }
  `],
})
export class App { }
