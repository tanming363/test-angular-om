import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpComponent } from './emp/emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpService } from '../shared/emp.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmpComponent, EmpListComponent],
  exports: [EmpComponent, EmpListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [EmpService]
})
export class EmployeesModule { }
