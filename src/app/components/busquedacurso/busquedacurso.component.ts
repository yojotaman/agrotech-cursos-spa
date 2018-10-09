import { Component, OnInit } from '@angular/core';
import { CursosService, Curso } from '../../services/cursos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-busquedacurso',
  templateUrl: './busquedacurso.component.html'
})
export class BusquedacursoComponent implements OnInit {
  termino: string;
  cursos: Curso[] = [];
  constructor( private cursosService: CursosService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino =  params['ter'];
      this.cursos = this.cursosService.buscarCursos(params['ter']);
    console.log(this.cursos);
  });

  }

  getCurso(idx: number) {
    // console.log(idx);
    this.router.navigate(['curso', idx]);
  }

}
