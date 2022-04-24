import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
name:'summary'
})
export class SummaryPipe implements PipeTransform{

 transform(value: any,start:string,end:string) {
    // return (value.substring(0,20)+'...')
    return (value.substring(start,end)+'...')
     
 }
}