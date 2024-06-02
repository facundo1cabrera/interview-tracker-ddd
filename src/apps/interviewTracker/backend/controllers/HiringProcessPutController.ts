import { Request, Response } from "express";
import { Controller } from "./Controller";
import { HiringProcessCreator } from "../../../../Contexts/InterviewTracker/HIringProcesses/application/HiringProcessCreator";

export class HiringProcessPutController implements Controller {
    constructor(private hiringProcessCreator: HiringProcessCreator) {}

    async run(req: Request, res: Response): Promise<void> {

        const { id, companyName, appliedBy, jobDescription, userId } = req.body;

        await this.hiringProcessCreator.run({
            id,
            companyName,
            appliedBy,
            jobDescription,
            userId
        });

        res.status(201).send()
    }
}