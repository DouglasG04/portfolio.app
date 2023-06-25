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
      icon: faHtml5
    },
    {
      icon: faCss3Alt
    },
    {
      icon: faJs
    },
    {
      icon: faAngular
    },
    {
      icon: faBootstrap
    },

    {
      icon: faDatabase
    },
    {
      icon: faGit
    },
  ]
}
