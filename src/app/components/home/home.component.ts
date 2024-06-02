import { Component } from '@angular/core';
import { faBars, faClose, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faAngular, faHtml5, faCss3Alt, faJs, faGit, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { Experience, Projects, TecnologiesSkills, WorkExperience } from 'src/app/interfaces/icons.interface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {

  navbarOpenMobile = faBars
  navBarCloseMobile = faClose
  gitHub = faGithub
  linkeding = faLinkedin
  mail = faEnvelope
  pdf = faDownload


  projects: Projects[] = [
    {
      img: 'assets/project1.PNG',
      title: 'Blackjack Game',
      description: 'Enjoy the classic card game Blackjack 21 as you compete against the machine!',
      icons: ['assets/svg/html5.svg', 'assets/svg/css3.svg', 'assets/svg/javascript.svg'],
      links: ['https://github.com/DouglasG04/mini-projects', 'https://blackjackgamedgo.netlify.app/']
    },
    {
      img: 'assets/project2.PNG',
      title: 'To Do Task',
      description: 'Helps to manage your responsibilities and organized your daily life!',
      icons: ['assets/svg/vitejs.svg'],
      links: ['https://github.com/DouglasG04/mini-projects', 'https://todolistdgo.netlify.app/']
    },
    {
      img: 'assets/comming-soon.png',
      title: 'Comming Soon',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, odio.',
      icons: ['assets/svg/clock.svg'],
      links: ['https://github.com/DouglasG04/mini-projects']
    }
  ]

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

  workExperience: WorkExperience[] = [
    {
      companyName: 'Tek Experts',
      position: 'Technical Support Engineer',
      period: '2023 - Present',
      description: 'Collaborate and work with different departments to ensure user and business requirements. Communicating with Microsoft customers via phone and email. Interpret X++ code and use MS SQL Server scripts to solve their issues.',
      technologies: [
        {
          icon: 'assets/svg/ssms.svg',
          description: "SSMS logo"
        },
        {
          icon: 'assets/svg/d365.svg',
          description: "SSMS logo"
        }
      ]
    },
    {
      companyName: 'MAPFRE',
      position: 'Junior Developer',
      period: '2022 - July 2023',
      description: 'Worked as a team with other developers and collaborated with other departments to ensure that the systems met user and business requirements. Use  SCRUM framework and agile methodologies to manage projects efficiently.',
      technologies: [
        {
          icon: 'assets/svg/html5.svg',
          description: "HTML5 logo"
        },
        {
          icon: 'assets/svg/css3.svg',
          description: "CSS3 logo"
        },
        {
          icon: 'assets/svg/csharp.svg',
          description: "C Sharp logo"
        },
        {
          icon: 'assets/svg/javascript.svg',
          description: "JavaScript logo"
        },
        {
          icon: 'assets/svg/angular.svg',
          description: "Angular logo"
        },
        {
          icon: 'assets/svg/tailwind-css.svg',
          description: "Oracle logo"
        },
        {
          icon: 'assets/svg/bootstrap.svg',
          description: "Git logo"
        },
        {
          icon: 'assets/svg/oracle.svg',
          description: "Oracle logo"
        },
        {
          icon: 'assets/svg/git.svg',
          description: "Git logo"
        },
        
      ]
    },
  ]
}




