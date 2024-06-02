import { StringValueObject } from "../../../Shared/domain/value-object/StringValueObject";


export class JobDescription extends StringValueObject {
    constructor(value: string) {
        super(value);
    }
}