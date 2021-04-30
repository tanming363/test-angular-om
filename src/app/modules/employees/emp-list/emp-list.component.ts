import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmpService } from '../../shared/emp.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  allEmployee: Employee[];
  constructor(private empService: EmpService) { }

  ngOnInit() {
    this.getAllEmp()
  }
  getAllEmp() {
    this.empService.getAllEmployees().subscribe((data: Employee[]) => {
      this.allEmployee = data;
    })
  }

  onDeleteEmp(id: number) {
    console.log(id)
    this.empService.onDeleteEmp(id).subscribe((data: Employee) => {
      this.getAllEmp();
    });
  }

  onEditEmp(emp: any) {
    this.empService.currentEmp = Object.assign({}, emp);
  }

  
}
