import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "sort"
})
export class SortPipe implements PipeTransform {
    transform(value: any, property: string = "name"): any {
        function compare(serverA, serverB) {
            if (serverA[property] < serverB[property]) {
                return -1;
            }
            if (serverA[property] > serverB[property]) {
                return 1;
            }
            return 0;
        }

        const sorted = value.sort(compare);
        return sorted;
    }
}
