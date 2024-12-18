import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapTwitterX, bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgIcon
  ],
  viewProviders: [provideIcons({ bootstrapTwitterX, bootstrapGithub, bootstrapLinkedin })],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'User List'
  links = {
    twitter: 'https://twitter.com/hariadiarief',
    github: 'https://github.com/hariadiarief',
    linkedin: 'https://www.linkedin.com/in/hariadiarief/'
  }
  currentYear = new Date().getFullYear()
}
