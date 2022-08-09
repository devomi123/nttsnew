import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textdot'
})
export class TextdotPipe implements PipeTransform {

  transform(text:any, suffix: string = '...', length: number = 10,): unknown {
    if (text.length > length) {
      let truncated: string = text.substring(0, length).trim() + suffix;
      return truncated;
    }
    return text;
  }
}
