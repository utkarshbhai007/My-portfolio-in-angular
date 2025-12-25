import { Component } from '@angular/core';
import { PROFILE_DATA } from '../data';
import { FadeIn } from '../shared/fade-in';

@Component({
  selector: 'app-experience',
  imports: [FadeIn],
  template: `
    <section class="container">
      <h2 class="section-title" appFadeIn>Where I've Worked</h2>
      <div class="timeline">
        @for (job of data.experience; track job.company) {
          <div class="job-card" appFadeIn>
            <div class="job-header">
              <h3>{{ job.role }} <span class="company">@ {{ job.company }}</span></h3>
              <span class="duration">{{ job.duration }}</span>
            </div>
            <ul class="job-desc">
              @for (point of job.description; track point) {
                <li>{{ point }}</li>
              }
            </ul>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .timeline {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      padding-left: 20px;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, var(--accent-primary), rgba(99, 102, 241, 0.1));
    }

    .job-card {
      position: relative;
      margin-bottom: 60px;
      padding-left: 40px;
    }

    .job-card::before {
      content: '';
      position: absolute;
      left: -9px;
      top: 5px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--bg-primary);
      border: 4px solid var(--accent-primary);
      box-shadow: 0 0 15px var(--accent-glow);
    }

    .job-header h3 {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }

    .company {
      color: var(--accent-secondary);
    }

    .duration {
      font-family: monospace;
      font-size: 0.95rem;
      color: var(--text-tertiary);
      margin-bottom: 24px;
      display: block;
    }

    .job-desc li {
      position: relative;
      padding-left: 24px;
      margin-bottom: 12px;
      color: var(--text-secondary);
      line-height: 1.7;
      font-size: 1.05rem;
    }

    .job-desc li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--accent-primary);
    }
  `]
})
export class Experience {
  data = PROFILE_DATA;
}
