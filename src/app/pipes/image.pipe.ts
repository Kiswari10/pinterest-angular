import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any): unknown {
    const data = value.urls;
    if (!data) {
      console.log('no hay image?');
    } else {
      console.log('value', data.small);
      return data.small;
    }
  }

}
