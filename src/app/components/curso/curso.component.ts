import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService  } from '../../services/cursos.service'



@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html'
})
export class CursoComponent {

  curso: any = { };

  constructor( private activatedRoute: ActivatedRoute,
               private cursosService: CursosService) {
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.curso = this.cursosService.getCurso(params['id']);
      console.log(this.curso);
    });
  }
}
