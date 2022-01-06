import {Data, DataAdapter} from "./data.model";
import {Adapter} from "./adapter";

export class DataList {
  private preferences: Array<Data>
  private recentData: Array<Data>
  private otherData: Array<Data>


  constructor()
  constructor(preferences: Data[], recentData: Data[], otherData: Data[])
  constructor(preferences?: Data[], recentData?: Data[], otherData?: Data[]) {
    this.preferences = (preferences != null) ? preferences as Data[] : new Array<Data>()
    this.recentData = (preferences != null) ? recentData as Data[] : new Array<Data>()
    this.otherData = (preferences != null) ? otherData as Data[] : new Array<Data>()
  }

  public pushPreferences(item: Data) {
    this.preferences.push(item)
  }

  public pushRecentData(item: Data) {
    this.recentData.push(item)
  }

  public pushOtherData(item: Data) {
    this.otherData.push(item)
  }

}

export class DataListAdapter implements Adapter<DataList> {

  constructor(private dataAdapter: DataAdapter) {
  }

  public adapt(item: any): DataList {

    let dataList: DataList = new DataList()
    item.preferences.forEach((element: any) => {
      dataList.pushPreferences(this.dataAdapter.adapt(item))
    })

    item.recentData.forEach((element: any) => {
      dataList.pushRecentData(this.dataAdapter.adapt(item))
    })

    item.otherData.forEach((element: any) => {
      dataList.pushOtherData(this.dataAdapter.adapt(item))
    })

    return dataList;
  }

}
