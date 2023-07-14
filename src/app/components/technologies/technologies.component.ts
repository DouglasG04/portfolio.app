import { Component } from '@angular/core';
import { TecnologiesSkills } from 'src/app/interfaces/icons.interface';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  skills: TecnologiesSkills[] = [
    {
      icon: 'assets/svg/html5.svg',
      description: "HTML",
    },
    {
      icon: 'assets/svg/css3.svg',
      description: "CSS"
    },
    {
      icon: 'assets/svg/tailwind-css.svg',
      description: "Tailwindcss"
    },

    {
      icon: 'assets/svg/javascript.svg',
      description: "JavaScript"
    },
    {
      icon: 'assets/svg/csharp.svg',
      description: "C Sharp"
    },
    {
      icon: 'assets/svg/angular.svg',
      description: "Angular"
    },
    {
      icon: 'assets/svg/oracle.svg',
      description: "PL SQL Oracle"
    },
    {
      icon: 'assets/svg/git.svg',
      description: "Git"
    },
  ]
}
