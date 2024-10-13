import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogProjectsComponent } from '../../dialog/dialog-projects/dialog-projects.component';
import { EDialogoPainelClass } from '../../enum/EDialogoPainelClass.enum';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/projects/chess4.png',
      alt: 'Projeto de xadrez',
      title:"Chess Game in Csharp",
      width: '200px',
      heigh: '100%',
      description: '<p> Aproveite e jogue xadrez com seus amigos localmente!</p>',
      links: [
        {
          name : ' Conheça o projeto Chess game',
          href: "https://github.com/sidarkelse/XadrezGame---ChessGame",
        },
      ],
    },
    
  ]);

  public openDialogo(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data ,
      panelClass: EDialogoPainelClass.PROJECTS
    })
  }

}
