import { Component } from '@angular/core';
import { faBars, faClose, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Projects, TecnologiesSkills, WorkExperience } from 'src/app/interfaces/icons.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  readonly navbarOpenMobile = faBars;
  readonly navBarCloseMobile = faClose;
  readonly gitHub = faGithub;
  readonly linkedin = faLinkedin;
  readonly mail = faEnvelope;
  readonly pdf = faDownload;

  projects: Projects[] = [
    {
      img: 'assets/nexiteproject.png',
      title: 'Nexite',
      description: 'Nexite is a new founded company that offers services designed to help companies pages and systems.',
      icons: ['assets/svg/astro.svg', 'assets/svg/tailwind-css.svg'],
      links: ['https://bitbucket.org/nexite_app/nexitepage/src/master/', 'https://nexite.app/']
    },
    {
      img: 'assets/project3.jpg',
      title: 'Kuppa',
      description: 'Kuppa is a website of a fictitious company created at my university to simulate a request for tourist services.',
      icons: ['assets/svg/css3.svg', 'assets/svg/javascript.svg', 'assets/svg/mongodb.svg'],
      links: ['https://github.com/DouglasG04/proyecto1-grupo2.git']
    },
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
  ];

  workExperience: WorkExperience[] = [
    {
      companyName: 'Tek Experts',
      position: 'Technical Support Engineer',
      period: '2023 - Present',
      description: 'Collaborate and work with different departments to ensure user and business requirements. Communicate with Microsoft customers via phone and email. Interpret X++ code and use MS SQL Server scripts to solve their issues.',
      technologies: [
        { icon: 'assets/svg/ssms.svg', description: 'SSMS logo' },
        { icon: 'assets/svg/d365.svg', description: 'Dynamics 365 logo' }
      ]
    },
    {
      companyName: 'MAPFRE',
      position: 'Junior Developer',
      period: '2022 - July 2023',
      description: 'Collaborated with developers and other departments to ensure systems met user and business requirements using the SCRUM framework and agile methodologies.',
      technologies: [
        { icon: 'assets/svg/html5.svg', description: 'HTML5 logo' },
        { icon: 'assets/svg/css3.svg', description: 'CSS3 logo' },
        { icon: 'assets/svg/csharp.svg', description: 'C# logo' },
        { icon: 'assets/svg/javascript.svg', description: 'JavaScript logo' },
        { icon: 'assets/svg/angular.svg', description: 'Angular logo' },
        { icon: 'assets/svg/tailwind-css.svg', description: 'Tailwind CSS logo' },
        { icon: 'assets/svg/bootstrap.svg', description: 'Bootstrap logo' },
        { icon: 'assets/svg/oracle.svg', description: 'Oracle logo' },
        { icon: 'assets/svg/git.svg', description: 'Git logo' },
      ]
    },
  ];

  skills: TecnologiesSkills[] = [
    { icon: 'assets/svg/astro.svg', description: 'Astro' },
    { icon: 'assets/svg/tailwind-css.svg', description: 'Tailwind CSS' },
    { icon: 'assets/svg/javascript.svg', description: 'JavaScript' },
    { icon: 'assets/svg/csharp.svg', description: 'C#' },
    { icon: 'assets/svg/angular.svg', description: 'Angular' },
    { icon: 'assets/svg/react.svg', description: 'React' },
    { icon: 'assets/svg/oracle.svg', description: 'PL SQL Oracle' },
    { icon: 'assets/svg/git.svg', description: 'Git' }
  ];
}
