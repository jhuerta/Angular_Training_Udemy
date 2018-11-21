import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
	name: "shorten",
	pure: false
})
export class ShortenPipe implements PipeTransform {
	filteredStatus: string = "";
	transform(value: any, from: number, to: number, chars: string = "abc") {
		//var prefix = chars || "___";
		return `${chars} ${value.substr(from, to)}`;
	}
}
