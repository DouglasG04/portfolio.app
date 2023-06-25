import { Component } from '@angular/core';
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons'
 @Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  projectsWHTML = faHtml5
  projectsWCss = faCss3Alt
  projectsWJs = faJs
  projectsWGitHub = faGithub
  commingSoon = faClock
}
