import validate from 'uuid-validate';
import { InvalidArgumentError } from './InvalidArgumentException';

export class Uuid {
    readonly value: string;

    constructor(id: string) {
        this.ensureIsValidUuid(id);

        this.value = id;
    }

    ensureIsValidUuid(id: string) {
        if (!validate(id)) {
            throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value: <${id}>`);
        }
    }

    toString(): string {
        return this.value;
    }
}