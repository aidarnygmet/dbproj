import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { RecordDataSource, RecordItem } from './record-datasource';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<RecordItem>;
  dataSource!: RecordDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['email', 'cname', 'disease_code', 'total_death', 'total_patients'];

  constructor(public appService: AppService) {
    this.update();
  }
  update(){
    this.appService.getRec().subscribe(
      response => {
        let ex_data:RecordItem[]=[];
        for(let i=0; i<response.data.length; i++){
          ex_data.push({email: response.data[i].email, cname: response.data[i].cname, disease_code: response.data[i].disease_code, total_death: response.data[i].total_death, total_patients: response.data[i].total_patients});
        }
        this.dataSource = new RecordDataSource(ex_data);
      }
    );
  }
  insertFunc(data: string, data2:string, data3:string, data4:string, data5: string){
    this.appService.insertRec(data, data2, data3, data4, data5).subscribe();
    this.update();
   }
  deleteFunc(data: string, data2:string){
    this.appService.deleteRec(data, data2).subscribe();
    this.update();
  }
  updateFunc(data: string, data2:string, data3: string, data4:string){
    this.appService.updateRec(data,data2,data3,data4).subscribe();
    this.update();
  }
  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }
}
