import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header [class.scrolled]="isScrolled()">
      <div class="container header-content">
        <a href="#" class="logo">Utkarsh<span class="dot">.</span></a>
        <nav>
          <ul>
            <li><a (click)="scrollTo('home')">Home</a></li>
            <li><a (click)="scrollTo('experience')">Experience</a></li>
            <li><a (click)="scrollTo('skills')">Skills</a></li>
            <li><a (click)="scrollTo('projects')">Work</a></li>
            <li><a (click)="scrollTo('education')">Education</a></li>
            <li><a (click)="scrollTo('contact')" class="contact-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      transition: all 0.4s ease;
      padding: 32px 0;
      background: transparent;
    }
    
    header.scrolled {
      padding: 16px 0;
      background: rgba(5, 5, 7, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-family: var(--font-display);
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: -0.02em;
    }

    .logo .dot {
      color: var(--accent-primary);
    }

    nav ul {
      display: flex;
      gap: 40px;
      align-items: center;
    }

    nav a {
      cursor: pointer;
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--text-secondary);
      position: relative;
    }

    nav a:not(.contact-link)::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent-primary);
      transition: width 0.3s ease;
    }

    nav a:hover {
      color: var(--text-primary);
    }
    
    nav a:not(.contact-link):hover::after {
      width: 100%;
    }

    .contact-link {
      padding: 10px 24px;
      border: 1px solid var(--accent-primary);
      border-radius: 4px;
      color: var(--accent-primary);
      transition: all 0.3s ease;
    }
    
    .contact-link:hover {
      background: rgba(99, 102, 241, 0.1);
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      nav { display: none; } 
    }
  `]
})
export class Header {
  isScrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
