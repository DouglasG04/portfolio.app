import { Component } from '@angular/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faGit, faAngular, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { Experience } from 'src/app/interfaces/icons.interface';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experienceTecnologies: Experience[] = [
    {
      icon: 'assets/svg/html5.svg'
    },
    {
      icon: 'assets/svg/css3.svg'
    },
    {
      icon: 'assets/svg/csharp.svg'
    },
    {
      icon: 'assets/svg/javascript.svg'
    },
    {
      icon: 'assets/svg/angular.svg'
    },
    {
      icon: 'assets/svg/tailwind-css.svg'
    },
    {
      icon: 'assets/svg/bootstrap.svg'
    },
    {
      icon: 'assets/svg/oracle.svg'
    },
    {
      icon: 'assets/svg/git.svg'
    },
  ]
}
