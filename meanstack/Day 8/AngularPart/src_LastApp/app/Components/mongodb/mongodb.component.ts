import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { Employee } from '../../Classes/employee';

@Component({
  selector: 'app-mongodb',
  templateUrl: './mongodb.component.html',
  styleUrls: ['./mongodb.component.css']
})
export class MongodbComponent implements OnInit {
  selected : Employee;
  employees: any; 
  constructor(private service : EmployeeService) { }

  ngOnInit() {
    this.service.getAll().subscribe((res)=>{
      this.employees = res;
    })
  }

  onSelected(emp){
    alert(emp.empName);
    this.selected = emp;
  }

  display(arg){
    this.service.update(arg).subscribe((res)=>{
      alert(res.Info);
    });
  }
}
