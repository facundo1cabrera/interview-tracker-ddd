import { AggregateRoot } from "../../../Shared/domain/AggregateRoot";
import { AppliedBy } from "./AppliedBy";
import { CompanyName } from "./CompanyName";
import { HiringProcessId } from "./HiringProcessId";
import { JobDescription } from "./JobDescription";
import { UserId } from "./UserId";


export class HiringProcess extends AggregateRoot {
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
        super();
        this.id = id;
        this.companyName = companyName;
        this.appliedBy = appliedBy;
        this.jobDescription = jobDescription;
        this.userId = userId;
    }

    toPrimitives() {
        return {
            id: this.id.value,
            companyName: this.companyName.value,
            appliedBy: this.appliedBy.value,
            jobDescription: this.jobDescription.value,
            userId: this.userId.value
        }
    }

    static fromPrimitives(plainData: {
        id: string,
        companyName: string,
        appliedBy: string,
        jobDescription: string,
        userId: string
    }) {
        return new HiringProcess({
            id: new HiringProcessId(plainData.id),
            companyName: new CompanyName(plainData.companyName),
            appliedBy: new AppliedBy(plainData.appliedBy),
            jobDescription: new JobDescription(plainData.jobDescription),
            userId: new UserId(plainData.userId)
        });
    }
}