import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AboutComponent } from './components/about/about.component';
import { CursoComponent } from './components/curso/curso.component';
import { BusquedacursoComponent } from './components/busquedacurso/busquedacurso.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoComponent },
    { path: 'busquedacurso/:ter', component: BusquedacursoComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
