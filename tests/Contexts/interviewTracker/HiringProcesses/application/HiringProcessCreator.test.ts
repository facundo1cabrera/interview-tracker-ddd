import { HiringProcessCreator } from "../../../../../src/Contexts/InterviewTracker/HIringProcesses/application/HiringProcessCreator";
import { AppliedBy } from "../../../../../src/Contexts/InterviewTracker/HIringProcesses/domain/AppliedBy";
import { CompanyName } from "../../../../../src/Contexts/InterviewTracker/HIringProcesses/domain/CompanyName";
import { HiringProcess } from "../../../../../src/Contexts/InterviewTracker/HIringProcesses/domain/HiringProcess";
import { HiringProcessId } from "../../../../../src/Contexts/InterviewTracker/HIringProcesses/domain/HiringProcessId";
import { JobDescription } from "../../../../../src/Contexts/InterviewTracker/HIringProcesses/domain/JobDescription";
import { UserId } from "../../../../../src/Contexts/InterviewTracker/HIringProcesses/domain/UserId";
import { Uuid } from "../../../../../src/Contexts/Shared/domain/value-object/Uuid";
import { HiringProcessRepositoryMock } from "../__mocks__/HiringProcessRepositoryMock";

describe('HiringProcessCreator', () => {
    it('Should create a valid HiringProcess', async () => {
        const repository = new HiringProcessRepositoryMock();
        const creator = new HiringProcessCreator(repository);
        const id = new Uuid("d2f91f3c-3992-44ba-9c51-18f7478c0327");
        const companyName = "test";
        const appliedBy = "test";
        const jobDescription = "Software Engineer 2";
        const userId = "id";
        const expectedHiringProcess = new HiringProcess({ 
            id: new HiringProcessId(id.value),
            companyName: new CompanyName(companyName),
            appliedBy: new AppliedBy(appliedBy),
            jobDescription: new JobDescription(jobDescription),
            userId: new UserId(userId) 
        });

        await creator.run({ id: id.value, companyName, appliedBy, jobDescription, userId });

        repository.assertSaveHaveBeenCalledWith(expectedHiringProcess);
    });
});