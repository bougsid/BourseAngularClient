/**
 * Created by ayoub on 11/27/2016.
 */

//our root app component
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'filteritem'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        if (args !== undefined) {
            return items.filter(item => {
                if (args[0] == '') return true;
                return item.code.indexOf(args[0]) > -1;
            });
        }
    }
}