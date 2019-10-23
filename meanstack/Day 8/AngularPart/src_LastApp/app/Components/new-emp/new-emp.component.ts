import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-new-emp',
  templateUrl: './new-emp.component.html',
  styleUrls: ['./new-emp.component.css']
})
export class NewEmpComponent implements OnInit {
  empId : number = 0;
  empName : string = "";
  empAddress : string = "";
  constructor(private service : EmployeeService) { }
  ngOnInit() {
  
  }
  onSave(){
    var emp = { "empId" : this.empId, "empName" : this.empName, "empAddress" : this.empAddress};
    this.service.add(emp).subscribe((res)=>{
      alert(res.Info);
    })
  }
}
