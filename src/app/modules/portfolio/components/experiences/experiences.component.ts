import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiencesComponent = signal<IExperiences[]>([
    {
      summary: {
        strong: "Back-End",
        p:"EasyComtec | nov 2021 - jan 2023"
      },
       text: "Me destaquei no desenvolvimento de soluções back-end, atuando em projetos diversos para clientes internos e externos. Trabalhei em equipe utilizando tecnologias como Angular, Ionic, Laravel, C# e .NET para criar plataformas robustas e eficientes. Colaborei com equipes multidisciplinares, focando na implementação de funcionalidades, otimização de desempenho e integração de sistemas, sempre buscando garantir qualidade e escalabilidade nas soluções entregues"
    }
  ])

}
