import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url : string = "http://localhost:1234";//Url of UR REST Service...
  constructor(private http : HttpClient) { }

  getAll(): any{
    return this.http.get(this.url);
  }

  get(id) : any{
    var temp = this.url + "/" + id;
    return this.http.get(temp);
  }

  add(emp:any) : any{
    return this.http.post(this.url, emp);
  }

  update(emp: any) : any{
    return this.http.put(this.url, emp);
  }
}
