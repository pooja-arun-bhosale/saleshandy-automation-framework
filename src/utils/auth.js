import fs from "fs";

export class Auth {
  static save(accountType, session) {
    if (!fs.existsSync(".auth")) fs.mkdirSync(".auth");
    fs.writeFileSync(`.auth/${accountType}.json`, JSON.stringify(session));
  }
}
