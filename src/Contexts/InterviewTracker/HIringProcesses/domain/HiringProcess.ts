import { AppliedBy } from "./AppliedBy";
import { CompanyName } from "./CompanyName";
import { HiringProcessId } from "./HiringProcessId";
import { JobDescription } from "./JobDescription";
import { UserId } from "./UserId";


export class HiringProcess {
    readonly id: HiringProcessId;
    readonly companyName: CompanyName;
    readonly appliedBy: AppliedBy;
    readonly jobDescription: JobDescription;
    readonly userId: UserId;

    constructor({ id, companyName, appliedBy, jobDescription, userId }:
        {
            id: HiringProcessId,
            companyName: CompanyName,
            appliedBy: AppliedBy,
            jobDescription: JobDescription,
            userId: UserId
        }
    ) {
        this.id = id;
        this.companyName = companyName;
        this.appliedBy = appliedBy;
        this.jobDescription = jobDescription;
        this.userId = userId;
    }
}