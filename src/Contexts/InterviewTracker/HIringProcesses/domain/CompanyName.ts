import { StringValueObject } from "../../../Shared/domain/value-object/StringValueObject";


export class CompanyName extends StringValueObject {
    constructor(value: string) {
        super(value);
    }
}