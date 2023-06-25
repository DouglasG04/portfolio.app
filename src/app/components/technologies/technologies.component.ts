import { Component } from '@angular/core';
import { TecnologiesSkills } from 'src/app/interfaces/icons.interface';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faGit, faAngular, faBootstrap } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  skills: TecnologiesSkills[] = [
    {
      icon: faHtml5,
      description: "HTML",
    },
    {
      icon: faCss3Alt,
      description: "CSS"
    },
    {
      icon: faBootstrap,
      description: "Bootstrap"
    },
    {
      icon: faJs,
      description: "JavaScript"
    },
    {
      icon: faAngular,
      description: "Angular"
    },
    {
      icon: faDatabase,
      description: "SQL"
    },
    {
      icon: faGit,
      description: "Git"
    },
  ]
}
