import {Metropolis} from "./metropolis";

export class MetropolisResponse {
  private _ListMetropolis : Metropolis[];

  constructor(ListMetropolis: Metropolis[]) {
    this._ListMetropolis = ListMetropolis;
  }

  get listMetropolis(): Metropolis[] {
    return this._ListMetropolis;
  }
}
