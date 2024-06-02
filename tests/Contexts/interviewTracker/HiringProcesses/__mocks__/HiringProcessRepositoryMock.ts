import { HiringProcess } from "../../../../../src/Contexts/InterviewTracker/HIringProcesses/domain/HiringProcess";
import { HiringProcessRepository } from "../../../../../src/Contexts/InterviewTracker/HIringProcesses/domain/HiringProcessRepository";


export class HiringProcessRepositoryMock implements HiringProcessRepository {
    private saveMock: jest.Mock;
    constructor() {
        this.saveMock = jest.fn();
    }


    async save(hiringProcess: HiringProcess): Promise<void> {
        this.saveMock(hiringProcess);
    }

    assertSaveHaveBeenCalledWith(expected: HiringProcess) {
        expect(this.saveMock).toHaveBeenCalledWith(expected);
    }
}