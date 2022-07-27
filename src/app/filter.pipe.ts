import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string){
    if(value.length===0 || filterString===''){
      return value;
    }
    const productList=[];
    for(const item of value){
      if(item['title'].includes(filterString) || item['category'].includes(filterString)){
        productList.push(item);
      }
    }
    return productList;
  }
}




