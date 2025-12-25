import { Component } from '@angular/core';
import { PROFILE_DATA } from '../data';
import { FadeIn } from '../shared/fade-in';

@Component({
  selector: 'app-projects',
  imports: [FadeIn],
  template: `
    <section class="container">
      <h2 class="section-title" appFadeIn>Some Things I've Built</h2>
      <div class="projects-grid">
        @for (project of data.projects; track project.name) {
          <div class="project-card" appFadeIn>
            <div class="card-content">
              <div class="card-header">
                <div class="folder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <a href="#" class="github-icon" title="View Code">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
              <h3 class="project-title">{{ project.name }}</h3>
              <p class="project-desc">{{ project.description }}</p>
            </div>
            <div class="card-border"></div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
    }

    .project-card {
      position: relative;
      background: var(--glass-bg);
      border-radius: var(--radius-md);
      overflow: hidden;
      transition: transform 0.3s ease;
      height: 100%;
    }

    .project-card:hover {
      transform: translateY(-8px);
    }

    .card-content {
      padding: 32px 28px;
      position: relative;
      z-index: 2;
      background: var(--bg-secondary);
      height: 100%;
      border-radius: var(--radius-md);
      border: 1px solid var(--glass-border);
    }
    
    .project-card:hover .card-content {
      background: linear-gradient(180deg, var(--bg-secondary) 0%, rgba(15,17,21,0.8) 100%);
      border-color: rgba(99, 102, 241, 0.3);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      align-items: flex-start;
    }

    .folder-icon {
      color: var(--accent-primary);
      width: 48px;
      height: 48px;
    }
    
    .folder-icon svg { width: 100%; height: 100%; }

    .github-icon {
      color: var(--text-tertiary);
      width: 22px;
      height: 22px;
      transition: color 0.3s;
    }

    .github-icon svg { width: 100%; height: 100%; }

    .github-icon:hover {
      color: var(--text-primary);
    }

    .project-title {
      color: var(--text-primary);
      font-size: 1.5rem;
      margin-bottom: 16px;
      font-weight: 600;
    }

    .project-desc {
      color: var(--text-secondary);
      font-size: 1.05rem;
      line-height: 1.6;
    }
  `]
})
export class Projects {
  data = PROFILE_DATA;
}
