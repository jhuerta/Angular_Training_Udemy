import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "filter"
})
export class FilterPipe implements PipeTransform {
	transform(value: any, filterString: any, propName: string = "status"): any {
		console.log(propName + "----------");
		if (value.length === 0 || !filterString) {
			return value;
		}
		let resultArray = [];

		for (const item of value) {
			if (item[propName] === filterString) {
				resultArray.push(item);
			}
		}

		return resultArray;
	}
}
