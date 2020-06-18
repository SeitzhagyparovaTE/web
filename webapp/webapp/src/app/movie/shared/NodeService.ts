import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Node} from "./movie.entity";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class NodeService {

  url = "http://localhost:8080/api/nodes";

  constructor(private httpClient: HttpClient) {
  }

  public getNodes(): Observable<Node[]> {
    return this.httpClient.get<Node[]>(this.url);
  }

}
