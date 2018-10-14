import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    private cursos: Curso[] = [
        {
          nombre_curso: 'Robotica 101',
          description: 'Todo el conocimiento de la robótica en un 1, 2 , 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae explicabo voluptates dignissimos dolor aspernatur laboriosam architecto, vel neque, distinctio deserunt pariatur. Accusantium nobis atque ipsum nesciunt, maxime dolor fuga in.',
          img: 'assets/robotica1.jpg',
          inicio: '2018-10-01',
          profesor: 'Andrés Toro - Robotics master'
        },
        {
            nombre_curso: 'Robotica 201',
            description: 'Pasa al siguientenivel con el 4, 5, 6. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae explicabo voluptates dignissimos dolor aspernatur laboriosam architecto, vel neque, distinctio deserunt pariatur. Accusantium nobis atque ipsum nesciunt, maxime dolor fuga in.',
            img: 'assets/robotica2.jpg',
            inicio: '2018-10-01',
            profesor: 'Andrés Toro - Robotics master'
        },
        {
            nombre_curso: 'IoT 101',
            description: 'Todo el conocimiento del Internet de las cosas en un 1, 2 , 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae explicabo voluptates dignissimos dolor aspernatur laboriosam architecto, vel neque, distinctio deserunt pariatur. Accusantium nobis atque ipsum nesciunt, maxime dolor fuga in.',
            img: 'assets/iot1.png',
            inicio: '2018-10-01',
            profesor: 'Jonathan Salazar - IoT master'
        },
        {
            nombre_curso: 'IoT 201',
            description: 'Todos tus datos en la nube en un 4, 5, 6 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae explicabo voluptates dignissimos dolor aspernatur laboriosam architecto, vel neque, distinctio deserunt pariatur. Accusantium nobis atque ipsum nesciunt, maxime dolor fuga in.',
            img: 'assets/iot2.jpeg',
            inicio: '2018-10-01',
            profesor: 'Jonathan Salazar - IoT master'
        },
        {
            nombre_curso: 'Analítica 101',
            description: 'Analiza tus datos en un 1, 2 , 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae explicabo voluptates dignissimos dolor aspernatur laboriosam architecto, vel neque, distinctio deserunt pariatur. Accusantium nobis atque ipsum nesciunt, maxime dolor fuga in.',
            img: 'assets/bidtata2.jpeg',
            inicio: '2018-10-01',
            profesor: 'Ricardo Buitrago - Bigdata master'
        },
        {
            nombre_curso: 'Analítica 201',
            description: 'Vuélvelos a analizar en un 4, 5, 6 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae explicabo voluptates dignissimos dolor aspernatur laboriosam architecto, vel neque, distinctio deserunt pariatur. Accusantium nobis atque ipsum nesciunt, maxime dolor fuga in.',
            img: 'assets/bidtata1.jpeg',
            inicio: '2018-10-01',
            profesor: 'Ricardo Buitrago - Bigdata master'
        }
      ];

    constructor( ) {
        console.log('Servicio corriendo a lo bien');
    }

    getCursos() {
        return this.cursos;
    }

    getCurso(idx: string) {
        return this.cursos[idx];
    }

    buscarCursos( entrada: string) {
        const cursosArr: Curso[] = [];
        entrada = entrada.toLowerCase();

        for ( let i = 0; i < this.cursos.length; i++) {

            const curso = this.cursos[i];
            const nombre = curso.nombre_curso.toLowerCase();

            if ( nombre.indexOf(entrada) >= 0 ) {
                curso.idx = i;
                cursosArr.push( curso );
            }
        }
        return cursosArr;

    }

}

export interface Curso {
    nombre_curso: string;
    description: string;
    img: string;
    inicio: string;
    profesor: string;
    idx?: number;
}
