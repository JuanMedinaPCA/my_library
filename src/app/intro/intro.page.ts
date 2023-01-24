import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      class: "slide1",
      title: "Bienvenidos",
      subtitle: "Libreria caja de lectura",
      img: "assets/img1.jpg",
      titulo2: "",
      descripcion: " Al lanzar una mirada a la libreria CAJA DE LECTURA encontraras interesantes y diversas categorias, ya que cuenta con una excelente seleccion de literatura clasica, medieval y narrativa. Este es un espacio que invita a los usuarios a dedicarsea la lectura con total tranquilidad.",
      //button: ""
    },
    {
      title: "Literatura clasica",
      subtitle: "",
      img: "assets/img2.jpg",
      titulo2: "Selecciona tu libro",
      descripcion: "En esta seccion encontraras literatura clasica, con interesantes libros que han permanecido en el gusto publico a traves de los años.",
      //button: "Explorar"
    },
    {
      title: "Literatura medieval",
      subtitle: "",
      img: "assets/img3.jpg",
      titulo2: "",
      descripcion: "En esta seccion encontraras obras literarias, filosofas, religiosas asi como obras de la imaginacion que trasienden los limites de la fantasia lirica para mezclarse con datos historios y aspectos socioculturales.",
      //button: "Explorar"
    },
    {
      title: "Literatura narrativa",
      subtitle: "",
      img: "assets/img4.jpg",
      titulo2: "",
      descripcion: "En esta seccion encontraras literaturas interesantes que narran una secuncia de hechos ocurridos en un tiempo y espacio determinado vivenciados por uno o varios personajes.",
      //button: "Explorar"
    }
  ]

  constructor(private router: Router, private storage: Storage) { 
  }

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/menu/home"); 
  }
  ngOnInit() {
  }

}