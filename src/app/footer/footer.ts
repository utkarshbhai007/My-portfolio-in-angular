import { Component } from '@angular/core';
import { PROFILE_DATA } from '../data';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="container footer-content">
        <h2>Get In Touch</h2>
        <p>Currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        
        <div class="contact-links">
          <a href="mailto:{{ data.details.email }}" class="contact-btn primary">Say Hello</a>
          <a href="tel:{{ data.details.phone }}" class="contact-btn secondary">Call Me</a>
        </div>

        <div class="social-links">
           <a href="https://{{ data.details.linkedin }}" target="_blank" title="LinkedIn">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
           </a>
           <a href="https://{{ data.details.github }}" target="_blank" title="GitHub">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
           </a>
        </div>

        <p class="copyright">
          Designed & Built by <span class="highlight">{{ data.details.name }}</span>
        </p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      padding: 100px 0 40px;
      text-align: center;
      background: linear-gradient(to top, var(--bg-secondary), var(--bg-primary));
    }

    footer h2 {
      font-size: 3rem;
      margin-bottom: 24px;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    footer p {
      color: var(--text-tertiary);
      max-width: 600px;
      margin: 0 auto 48px;
      line-height: 1.8;
      font-size: 1.1rem;
    }

    .contact-links {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-bottom: 64px;
    }

    .contact-btn {
      padding: 16px 36px;
      border-radius: var(--radius-sm);
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .contact-btn.primary {
      background: var(--bg-tertiary);
      color: var(--accent-primary);
      border: 1px solid var(--accent-primary);
    }

    .contact-btn.primary:hover {
       background: rgba(99, 102, 241, 0.1);
       transform: translateY(-3px);
    }
    
    .contact-btn.secondary {
      background: transparent;
      color: var(--text-secondary);
      border: 1px solid var(--text-tertiary);
    }
    
    .contact-btn.secondary:hover {
      background: rgba(255,255,255,0.05);
      border-color: var(--text-primary);
      color: var(--text-primary);
    }

    .social-links {
      margin-bottom: 40px;
      display: flex;
      justify-content: center;
      gap: 32px;
    }

    .social-links a {
      color: var(--text-secondary);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .social-links a:hover {
      color: var(--accent-primary);
      transform: translateY(-3px);
    }

    .copyright {
      font-size: 0.9rem;
      margin: 0 auto;
      margin-top: 40px;
      opacity: 0.7;
    }
    
    .highlight {
      color: var(--accent-secondary);
    }
  `]
})
export class Footer {
  data = PROFILE_DATA;
}
