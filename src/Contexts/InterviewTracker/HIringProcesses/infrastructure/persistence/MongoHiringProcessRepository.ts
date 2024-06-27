import { ObjectId } from 'mongodb';
import { Nullable } from '../../../../Shared/domain/Nullable';
import { MongoRepository } from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { HiringProcess } from '../../domain/HiringProcess';
import { HiringProcessId } from '../../domain/HiringProcessId';
import { HiringProcessRepository } from '../../domain/HiringProcessRepository';

interface HiringProcessDocument {
  _id: string;
  companyName: string,
  appliedBy: string,
  jobDescription: string,
  userId: string
};

export class MongoHiringProcessRepository extends MongoRepository<HiringProcess> implements HiringProcessRepository {
  public save(hiringProcess: HiringProcess): Promise<void> {
    return this.persist(hiringProcess.id.value, hiringProcess);
  }

  public async search(id: HiringProcessId): Promise<Nullable<HiringProcess>> {
    const collection = await this.collection();
    const document = await collection.findOne<HiringProcessDocument>({ _id: id.value as unknown as ObjectId });

    return document ? HiringProcess.fromPrimitives({ id: id.value, companyName: document.companyName, appliedBy: document.appliedBy,
     jobDescription: document.jobDescription, userId: document.userId }) : null;
  }

  protected collectionName(): string {
    return 'HiringProcesses';
  }
}