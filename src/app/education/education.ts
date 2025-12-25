import { Component } from '@angular/core';
import { PROFILE_DATA } from '../data';
import { FadeIn } from '../shared/fade-in';

@Component({
  selector: 'app-education',
  imports: [FadeIn],
  template: `
    <section class="container">
      <h2 class="section-title" appFadeIn>Education & Accomplishments</h2>
      
      <div class="education-grid">
         @for (edu of data.education; track edu.school) {
           <div class="edu-card" appFadeIn>
              <h3>{{ edu.school }}</h3>
              <p class="degree">{{ edu.degree }}</p>
              <span class="duration">{{ edu.duration }}</span>
           </div>
         }
      </div>

      <div class="accomplishments" appFadeIn>
        <h3>Achievements</h3>
        <ul>
          @for (acc of data.accomplishments; track acc) {
            <li>{{ acc }}</li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: [`
    .education-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 32px;
      margin-bottom: 80px;
    }

    .edu-card {
      background: var(--glass-bg);
      padding: 32px;
      border-radius: var(--radius-md);
      border: 1px solid var(--glass-border);
      position: relative;
      transition: all 0.3s ease;
    }
    
    .edu-card:hover {
      background: linear-gradient(180deg, var(--bg-secondary) 0%, rgba(15,17,21,0.8) 100%);
      border-color: rgba(99, 102, 241, 0.3);
      transform: translateY(-5px);
    }

    .edu-card h3 {
      font-size: 1.25rem;
      margin-bottom: 12px;
      color: var(--text-primary);
    }

    .degree {
      color: var(--accent-secondary);
      margin-bottom: 16px;
      font-weight: 500;
    }

    .duration {
      font-size: 0.9rem;
      color: var(--text-tertiary);
      font-family: monospace;
    }

    .accomplishments h3 {
      color: var(--text-primary);
      margin-bottom: 32px;
      font-size: 1.75rem;
    }

    .accomplishments ul {
      list-style-type: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .accomplishments li {
      background: var(--bg-secondary);
      padding: 20px;
      border-radius: var(--radius-sm);
      color: var(--text-secondary);
      border-left: 2px solid var(--accent-primary);
      transition: transform 0.3s ease;
    }
    
    .accomplishments li:hover {
      transform: translateX(5px);
       background: var(--bg-tertiary);
    }
  `]
})
export class Education {
  data = PROFILE_DATA;
}
