import fs from "fs";

export class Auth {
  static save(accountType, session) {
    if (!fs.existsSync(".auth")) fs.mkdirSync(".auth");
    fs.writeFileSync(`.auth/${accountType}.json`, JSON.stringify(session));
  }

  static load(accountType) {
    const file = `.auth/${accountType}.json`;
    return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : null;
  }
}
