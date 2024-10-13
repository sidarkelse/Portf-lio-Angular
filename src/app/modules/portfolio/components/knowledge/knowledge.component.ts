import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/knowledge';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
    src: 'assets/icons/knowledge/.net.svg',
    alt: 'icone de conhecimento .net'
  },
  {
    src: 'assets/icons/knowledge/angular.svg',
    alt: 'icone de conhecimento angular'
  },
  {
    src: 'assets/icons/knowledge/javascript.svg',
    alt: 'icone de conhecimento javascript'
  },
  {
    src: 'assets/icons/knowledge/node.svg',
    alt: 'icone de conhecimento node.js'
  },
  {
    src: 'assets/icons/knowledge/sql.svg',
    alt: 'icone de conhecimento sql'
  },
  {
    src: 'assets/icons/knowledge/cSharp.svg',
    alt: 'icone de conhecimento c#'
  },
  {
    src: 'assets/icons/knowledge/css.svg',
    alt: 'icone de conhecimento css'
  },
  {
    src: 'assets/icons/knowledge/html.svg',
    alt: 'icone de conhecimento html'
  },
  {
    src: 'assets/icons/knowledge/laravel.svg',
    alt: 'icone de conhecimento laravel'
  },
  {
    src: 'assets/icons/knowledge/php.svg',
    alt: 'icone de conhecimento php'
  }
  ,  {
    src: 'assets/icons/knowledge/css.svg',
    alt: 'icone de conhecimento css'
  },
  {
    src: 'assets/icons/knowledge/azure.svg',
    alt: 'icone de conhecimento azure'
  }
])
  
}
