export class Offer {


  constructor(public id: String,
              public _title: String,
              public _description: String,
              public _category: String) {
  }


  public get title(): String {
    return this._title;
  }

  public set title(value: String) {
    this._title = value;
  }

  public get description(): String {
    return this._description;
  }

  public set description(value: String) {
    this._description = value;
  }

  public get category(): String {
    return this._category;
  }

  public set category(value: String) {
    this._category = value;
  }
}
