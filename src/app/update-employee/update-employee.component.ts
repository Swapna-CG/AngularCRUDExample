import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number =0;
  employee!: Employee; // = new Employee();
// = new Employee();

  constructor(
    private route:ActivatedRoute,private router:Router,private employeeService:EmployeeService
  ) { }

  ngOnInit(): void {

    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
        .subscribe(data => {
          console.log(data)
          this.employee = data;
        },error => console.log(error));
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id,this.employee)
        .subscribe(data => {
          this.employee = new Employee();
          this.gotoList();
        },error => console.log(error))
  }
  
  gotoList() {
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.updateEmployee();
  }

}
