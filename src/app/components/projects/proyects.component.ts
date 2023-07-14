import { Component } from '@angular/core';
import { Projects } from 'src/app/interfaces/icons.interface';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {

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
}
