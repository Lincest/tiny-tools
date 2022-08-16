import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseResp, Pastebin} from './pastebin.model';

const url = 'https://pastebin.roccoshi.top/pastebin';

@Injectable({
  providedIn: 'root'
})
export class PastebinService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getDataById(id: string): Observable<BaseResp> {
    return this.http.get<BaseResp>(url + '/' + id);
  }

  setData(body: Pastebin): Observable<BaseResp> {
    return this.http.post<BaseResp>(url, body);
  }
}
