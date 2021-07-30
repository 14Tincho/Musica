import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Filterimagenes'
})
export class FilterimagenesPipe implements PipeTransform {

  transform(items: any[], musica: string): any {
    if (musica === 'all') {
      return items;
    }else{
      return items.filter(item=>{
        //  return item.artista === musica;
        if (item.artista.includes(musica)) {
          return item.artista;
        }
      });
    }
  }
}
