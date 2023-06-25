import { Component } from '@angular/core';
import { faBars, faClose, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faAngular } from '@fortawesome/free-brands-svg-icons';
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
  devWith = faAngular
}


