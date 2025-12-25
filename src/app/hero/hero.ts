import { Component } from '@angular/core';
import { PROFILE_DATA } from '../data';
import { FadeIn } from '../shared/fade-in';

@Component({
  selector: 'app-hero',
  imports: [FadeIn],
  template: `
    <section class="hero-section">
      <div class="container hero-content">
        <div class="text-content" appFadeIn>
          <p class="greeting">Hi, I am</p>
          <h1 class="name">{{ data.details.name }}</h1>
          <h2 class="role">Full Stack Developer.</h2>
          <p class="summary">{{ data.summary }}</p>
          <div class="cta-group">
            <a href="mailto:{{ data.details.email }}" class="btn primary">
              Get In Touch
              <div class="glow"></div>
            </a>
            <a href="https://{{ data.details.github }}" target="_blank" class="btn secondary">GitHub</a>
          </div>
        </div>
        <div class="visual-content" appFadeIn>
           <div class="blob-wrapper">
             <div class="blob"></div>
             <div class="blob-2"></div>
           </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      align-items: center;
      gap: 60px;
    }

    .greeting {
      color: var(--accent-primary);
      font-family: var(--font-display);
      font-size: 1.25rem;
      margin-bottom: 24px;
      letter-spacing: 0.05em;
    }

    .name {
      font-size: 5rem;
      margin-bottom: 16px;
      line-height: 1.1;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.02em;
    }

    .role {
      font-size: 3rem;
      color: var(--text-secondary);
      margin-bottom: 32px;
      font-weight: 500;
      opacity: 0.8;
    }

    .summary {
      max-width: 540px;
      font-size: 1.125rem;
      line-height: 1.7;
      color: var(--text-tertiary);
      margin-bottom: 56px;
    }

    .cta-group {
      display: flex;
      gap: 24px;
    }

    .btn {
      position: relative;
      padding: 16px 32px;
      border-radius: var(--radius-sm);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      overflow: hidden;
      transition: transform 0.2s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
    }

    .btn.primary {
      background: var(--text-primary);
      color: var(--bg-primary);
      border: none;
    }

    .btn.primary .glow {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent);
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }

    .btn.primary:hover .glow {
      transform: translateX(100%);
    }

    .btn.secondary {
      background: transparent;
      color: var(--text-primary);
      border: 1px solid rgba(255,255,255,0.2);
    }
    
    .btn.secondary:hover {
      border-color: var(--text-primary);
      background: rgba(255,255,255,0.05);
    }

    /* Blob Animation */
    .blob-wrapper {
      position: relative;
      width: 400px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .blob {
      position: absolute;
      width: 300px;
      height: 300px;
      background: var(--gradient-main);
      border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
      filter: blur(40px);
      animation: morph 8s ease-in-out infinite;
      opacity: 0.6;
    }

    .blob-2 {
      position: absolute;
      width: 200px;
      height: 200px;
      background: #3b82f6;
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      filter: blur(60px);
      animation: morph 6s ease-in-out infinite reverse;
      opacity: 0.4;
    }

    @keyframes morph {
      0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(0deg); }
      34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
      67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
      100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(360deg); }
    }

    @media (max-width: 900px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
      }
      .cta-group {
        justify-content: center;
      }
      .blob-wrapper {
        margin: 0 auto;
        width: 300px;
        height: 300px;
      }
      .name { font-size: 3.5rem; }
      .role { font-size: 1.8rem; }
      .summary { margin: 0 auto 40px; }
    }
  `]
})
export class Hero {
  data = PROFILE_DATA;
}
