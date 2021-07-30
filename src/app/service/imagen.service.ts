import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  allImages = [];

  getImages() {
      return this.allImages = ImagenesDetails.slice(0);
  }

  getImage(id: number ) {
     return ImagenesDetails.slice(0).find(Images => Images.id == id);
  }

  constructor() { }

}
const  ImagenesDetails = [
    {"id":1, "artista": "duki", "foto": "assets/imagen/duki.jpg", "sonido": "assets/canciones/Duki - GOTEO 🔥 LETRA.mp3", "titulo": "Duki - Goteo 🔥"},
    {"id":2, "artista": "bad-bunny", "foto": "assets/imagen/bad-bunny.jpg", "sonido": "assets/canciones/otra-noche-en-miami-bad-bunny-x-100pre.mp3", "titulo": "Bad Bunny - Otra noche en Miami"},
    {"id":3, "artista": "frijo bizarrap", "foto": "assets/imagen/frijo.jpg", "sonido": "assets/canciones/frijo-bzrp-music-sessions-10.mp3", "titulo": "Frijo - Bzrp Music Sessions #10"},
    {"id":4, "artista": "paulo-londra", "foto": "assets/imagen/paulo-londra.jpg", "sonido": "assets/canciones/paulo-londra-tal-vez-official-video.mp3", "titulo": "Paulo Londra - Tal vez"},
    {"id":5, "artista": "rauw-alejandro farruko", "foto": "assets/imagen/rauw-alejandro&farruko.jpg", "sonido": "assets/canciones/Fantasia.mp3", "titulo": "Rauw Alejandro ft.Farruko - Fantasia (acustico)"},
    {"id":6, "artista": "rauw-alejandro", "foto": "assets/imagen/rauw-alejandro.jpg", "sonido": "assets/canciones/detective-letralyrics-rauw-alejandro.mp3", "titulo": "Rauw Alejandro - Detective"},
    {"id":7, "artista": "farruko", "foto": "assets/imagen/farruko.jpg", "sonido": "assets/canciones/farruko-la-toxica-letralyrics.mp3", "titulo": "Farruko - La Tóxica"},
    {"id":8, "artista": "khea bizarrap", "foto": "assets/imagen/khea.jpg", "sonido": "assets/canciones/khea-bzrp-music-sessions-34.mp3", "titulo": "Khea - Bzrp Music Sessions #34"}
  ];
// Se puede ponerle dos brand al bike-ui por ejemplo si quisiera filtrar una bicicleta para niños con motor?

