import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
    employees : any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:1234").subscribe((res)=>{
      this.employees = res;
    })
  }
}
