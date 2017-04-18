/**
 * Created by zyf on 11/29/16.
 */
import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";

@Injectable()
export class WebService {
  private WebUrl = 'http://172.16.41.178:8000/yatcm/api/';
  private WebUrl_Compounds = this.WebUrl + 'compounds/';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers}); //预请求

  constructor(private http: Http) {
  }

  getDbRoots() {
    return this.http.get(this.WebUrl, this.options)
      .map(res => res.json())
  }

  getContent(url_part: string) {
    return this.http.get(this.WebUrl + url_part)
      .map((res: Response) => res.json())
  }

  getPage(url: string) {
    return this.http.get(url)
      .map((res: Response) => res.json())
  }

  // search(param:string){
  //   return this.http.get(this.WebUrl_Compounds+`?smiles=${param}`)
  //     .map((res:Response)=>res.json())
  // }
  getCompounds() {
    return this.http.get(this.WebUrl_Compounds)
      .map((res: Response) => res.json())
  }


}
