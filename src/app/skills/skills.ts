import { Component } from '@angular/core';
import { PROFILE_DATA } from '../data';
import { FadeIn } from '../shared/fade-in';

@Component({
  selector: 'app-skills',
  imports: [FadeIn],
  template: `
    <section class="container">
      <h2 class="section-title" appFadeIn>Skills & Technologies</h2>
      
      <div appFadeIn>
        <h3 class="skill-category">Technical Skills</h3>
        <div class="skills-grid">
          @for (skill of data.skills.technical; track skill) {
            <div class="skill-tag">{{ skill }}</div>
          }
        </div>
      </div>

      <div appFadeIn>
        <h3 class="skill-category">Tools</h3>
        <div class="skills-grid">
          @for (tool of data.skills.tools; track tool) {
            <div class="skill-tag tool">{{ tool }}</div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skill-category {
      color: var(--text-primary);
      margin: 40px 0 24px;
      font-size: 1.75rem;
      letter-spacing: -0.01em;
    }

    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .skill-tag {
      background: rgba(255, 255, 255, 0.03);
      padding: 12px 24px;
      border-radius: 50px;
      color: var(--text-secondary);
      font-size: 1rem;
      font-weight: 500;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.3s ease;
      cursor: default;
    }

    .skill-tag:hover {
      background: rgba(99, 102, 241, 0.1);
      border-color: rgba(99, 102, 241, 0.4);
      color: #fff;
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2);
    }
    
    .skill-tag.tool {
      background: transparent;
      border-style: dashed;
    }
  `]
})
export class Skills {
  data = PROFILE_DATA;
}
