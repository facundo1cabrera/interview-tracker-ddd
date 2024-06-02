import { StringValueObject } from "../../../Shared/domain/value-object/StringValueObject";


export class UserId extends StringValueObject {
    constructor(value: string) {
        super(value);
    }
}