import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SpecializeDataSource, SpecializeItem } from './specialize-datasource';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
@Component({
  selector: 'app-specialize',
  templateUrl: './specialize.component.html',
  styleUrls: ['./specialize.component.css']
})
export class SpecializeComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<SpecializeItem>;
  dataSource!: SpecializeDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'email'];

    constructor(public appService: AppService) {
      this.update();
    }
  update(){
    this.appService.getSpec().subscribe(
      response => {
        let ex_data:SpecializeItem[]=[];
        for(let i=0; i<response.data.length; i++){
          ex_data.push({id: response.data[i].id, email: response.data[i].email});
        }
        this.dataSource = new SpecializeDataSource(ex_data);
      }
    );
  }
  insertFunc(data: string, data2:string){
    this.appService.insertSpec(data, data2).subscribe();
    this.update();
   }
  deleteFunc(data: string, data2:string){
    this.appService.deleteSpec(data, data2).subscribe();
    this.update();
  }
  updateFunc(data: string, data2:string, data3: string, data4:string){
    this.appService.updateSpec(data,data2,data3,data4).subscribe();
    this.update();
  }
  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }
}
