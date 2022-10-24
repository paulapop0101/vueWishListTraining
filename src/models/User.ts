export default class User {
  firstname = "";
  lastname = "";
  username = "";
  password = "";
  constructor(fname, lname, username, password) {
    this.firstname = fname;
    this.lastname = lname;
    this.username = username;
    this.password = password;
  }
}
