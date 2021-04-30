import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../shared/emp.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor(public empService: EmpService) { }

  ngOnInit(): void {
  }
  onUpdate(currentEmp: Employee) {
    console.log(currentEmp);

    if (currentEmp.id != null) {
      alert("Do you want to update Employee Details")
      this.updateEmp(currentEmp)
    } else {
      alert("Do you want to Create New Employee")
      this.createEmp(currentEmp)
    }
  }

  createEmp(emp: Employee) {
    this.empService.createEmp(emp).subscribe()
  }

  updateEmp(emp: Employee) {
    this.empService.updateEmp(emp).subscribe()
  }
  onClear() {
    this.empService.currentEmp = {
      id: null,
      name: '',
      phone: '',
      city: '',
      address_line1: '',
      address_line2: '',
      postal_code: '',
    }
  }
  pattern = /\-?\d*\.?\d{1,2}/;
}
