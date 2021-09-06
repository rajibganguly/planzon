import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(value: any, filterObj) {

    if (filterObj) {
      const locoData = [];

      console.log('value', value, filterObj);
      if (!filterObj.genere) {
        return value;
      }

      if (filterObj.genere.genere) {
        for (const v of value) {
          if (v['genere'] === filterObj['genere']['genere']) {
            locoData.push(v);
          }
          if (v['uploadedBy'] === filterObj['genere']['author']) {
            locoData.push(v);
          }

        }
        return locoData;
      }

     
    }


  }

}
