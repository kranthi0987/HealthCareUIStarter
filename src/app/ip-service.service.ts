import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  constructor(private http: HttpClient) { }


}
