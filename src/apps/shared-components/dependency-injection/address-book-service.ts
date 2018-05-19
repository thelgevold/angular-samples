import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { pipe } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AddressBookService {
  http: Http;
  constructor(http: Http) {
    console.log("Creating AddressBookService");
    this.http = http;
  }

  getEntries() {
    return this.http
      .get("/api/people.json")
      .pipe(map((res: Response) => res.json()));
  }
}
