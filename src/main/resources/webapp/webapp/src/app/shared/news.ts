export class News {


  constructor(public id: String,
              public _header: String,
              public _paragraph: String) {
  }


  public set header(value: String) {
    this._header = value;
  }

  public set paragraph(value: String) {
    this._paragraph = value;
  }


  public get header(): String {
    return this._header;
  }

  public get paragraph(): String {
    return this._paragraph;
  }
}
