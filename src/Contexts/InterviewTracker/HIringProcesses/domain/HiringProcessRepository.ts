import { HiringProcess } from "./HiringProcess";


export interface HiringProcessRepository {
    save(hiringProcess: HiringProcess): Promise<void>;
}