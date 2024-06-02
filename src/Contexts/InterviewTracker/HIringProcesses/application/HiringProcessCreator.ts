import { Uuid } from "../../../Shared/domain/value-object/Uuid";
import { AppliedBy } from "../domain/AppliedBy";
import { CompanyName } from "../domain/CompanyName";
import { HiringProcess } from "../domain/HiringProcess";
import { HiringProcessRepository } from "../domain/HiringProcessRepository";
import { JobDescription } from "../domain/JobDescription";
import { UserId } from "../domain/UserId";
import { HiringProcessCreatorRequest } from "./HiringProcessCreatorRequest";

export class HiringProcessCreator {
    private readonly repository: HiringProcessRepository;
    constructor(repository: HiringProcessRepository) {
        this.repository = repository;
    }

    async run(request: HiringProcessCreatorRequest) {
        const hiringProcess = new HiringProcess({ 
            id: new Uuid(request.id), 
            companyName: new CompanyName(request.companyName), 
            appliedBy: new AppliedBy(request.appliedBy), 
            jobDescription: new JobDescription(request.jobDescription), 
            userId: new UserId(request.userId) 
        });

        return this.repository.save(hiringProcess);
    }
}