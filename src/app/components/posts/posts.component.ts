import { Component, OnInit, OnChanges } from '@angular/core';
import { ImagenService } from '../../service/imagen.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnChanges {
  filterPost = "";
  posts = [
    {"id":1, "artista": "bad-bunny","mostrar": "Bad Bunny"},
    {"id":2, "artista": "bizarrap","mostrar": "Bizarrap"},
    {"id":3, "artista": "duki","mostrar": "Duki"},
    {"id":4, "artista": "farruko","mostrar": "Farruko"},
    {"id":5, "artista": "frijo","mostrar": "Frijo"},
    {"id":6, "artista": "khea","mostrar": "Khea"},
    {"id":7, "artista": "paulo-londra","mostrar": "Paulo Londra"},
    {"id":8, "artista": "rauw-alejandro","mostrar": "Rauw Alejandro"}
  ];

  images: any[];
  filterBy: string = 'all';
  allImagen: any[] = [];
  constructor(private imageService: ImagenService) {
    this.allImagen = this.imageService.getImages();
  }
  ngOnChanges(): void {
    this.allImagen = this.imageService.getImages();
  }

}

//   ngOnInit() {
//   }
// }
