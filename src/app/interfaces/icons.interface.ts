import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Experience {
  icon: IconDefinition | any;
}

export interface TecnologiesSkills {
  icon: IconDefinition | any;
  description: string;
}



export interface Projects {
  img: string;
  title: string;
  description: string;
  icons: string[] | any;
  links: string[] | any;
}

export interface WorkExperience {
  companyName: string;
  position: string;
  period: string;
  description: string;
  technologies: TecnologiesSkills[];
}
