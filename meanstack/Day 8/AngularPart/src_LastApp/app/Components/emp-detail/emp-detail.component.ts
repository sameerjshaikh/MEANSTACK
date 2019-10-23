import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from "../../Classes/employee";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
  @Input() selected : Employee;
  @Output() onSave : EventEmitter<Employee> = new EventEmitter<Employee>(); 
  constructor(private _route : ActivatedRoute) { }
  ngOnInit() {
    this.selected = this._route.params._value;
  }

  onClick(){
    this.onSave.emit(this.selected);
  }
}
