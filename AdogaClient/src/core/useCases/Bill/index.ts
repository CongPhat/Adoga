import { billFake } from "src/core/data/dataFake";
import Repository from "@useCases/Structure";
import BillEntities from "@entities/Bill";

export default class BillRepositoryImpl implements Repository {
  public async Get(): Promise<any[]> {
    return;
  }

  public async GetDetail(billId): Promise<BillEntities> {
    //fake
    return new BillEntities(billFake);
  }
}
