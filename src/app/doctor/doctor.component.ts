import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DoctorDataSource, DoctorItem } from './doctor-datasource';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<DoctorItem>;
  dataSource!: DoctorDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['email', 'degree'];

  constructor(public appService: AppService) {
    this.update();
  }
  update(){
    this.appService.getDoctor().subscribe(
      response => {
        let ex_data:DoctorItem[]=[];
        for(let i=0; i<response.data.length; i++){
          ex_data.push({email: response.data[i].email, degree: response.data[i].degree});
        }
        this.dataSource = new DoctorDataSource(ex_data);
      }
    );
  }
  insertFunc(data: string, data2:string){
    this.appService.insertDoctor(data, data2).subscribe();
    this.update();
   }
  deleteFunc(data: string, data2:string){
    this.appService.deleteDoctor(data, data2).subscribe();
    this.update();
  }
  updateFunc(data: string, data2:string, data3: string, data4:string){
    this.appService.updateDoctor(data,data2,data3,data4).subscribe();
    this.update();
  }
  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }
}
