import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {  }

  buscarCurso(term: string) {
    console.log(term);
    this.router.navigate(['/busquedacurso', term]);
  }

}
