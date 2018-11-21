import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "reverse"
})
export class ReversePipe implements PipeTransform {
    transform(value: any): any {
        const reverted = value
            .split("")
            .reverse()
            .join("");
        return reverted;
    }
}
