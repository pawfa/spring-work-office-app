export class User{
  constructor(public id: String,
              public _email: String,
              public _password: String) {
  }


  public get email(): String {
    return this._email;
  }

  public set email(value: String) {
    this._email = value;
  }

  public get password(): String {
    return this._password;
  }

  public set password(value: String) {
    this._password = value;
  }
}
