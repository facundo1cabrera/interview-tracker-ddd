import { Request, Response, Router } from "express";
import container from "../dependency-injection";
import { HiringProcessPutController } from "../controllers/HiringProcessPutController";
import { body } from "express-validator";
import { validateReqSchema } from ".";


export const register = (router: Router) => {
    const schema = [
        body('id').exists().isString(),
        body('companyName').exists().isString(),
        body('appliedBy').exists().isString(),
        body('jobDescription').exists().isString(),
        body('userId').exists().isString(),
    ]

    const controller: HiringProcessPutController = container.get('Apps.interviewTracker.controllers.HiringProcessPutController');
    router.put("/hiringProcess/:id", schema, validateReqSchema,(req: Request, res: Response) => 
        controller.run(req, res)
    );
}