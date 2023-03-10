import * as core from "@angular/core";


@core.Pipe({
    name:"summary"
    })
export class SummaryPipe implements core.PipeTransform {
    
    transform(value: string, limit?:number ) {
        if(!value) return null;

        limit = limit? limit:20;

        if(limit > value.length){
            return value;
        }

        return value.substring(0, limit) + "...";
    }
} 