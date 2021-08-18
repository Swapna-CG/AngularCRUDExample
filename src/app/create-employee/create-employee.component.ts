import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();//employee object to get all details of employee from the form
  submitted = false;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee():void{
    this.submitted = true;
    this.employee = new Employee();
  }

  save() {

    this.employeeService
        .createEmployee(this.employee).subscribe(data => {
          console.log(data)
          this.employee = new Employee();
          this.gotoList();
        },
        error => console.log(error));
  }

  onSubmit(){
    this.submitted =true;
    this.save();
  }

  gotoList() {
        this.router.navigate(['/employees']);
  }
  

}
