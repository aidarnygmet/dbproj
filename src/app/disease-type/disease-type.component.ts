import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { MatTable } from '@angular/material/table';
import { DiseaseTypeDataSource, DiseaseTypeItem } from './disease-type-datasource';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
@Component({
  selector: 'app-disease-type',
  templateUrl: './disease-type.component.html',
  styleUrls: ['./disease-type.component.css']
})
export class DiseaseTypeComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<DiseaseTypeItem>;
  dataSource!: DiseaseTypeDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'description'];

  constructor(public appService: AppService) {
    this.update();
  }
  update(){
    this.appService.getDiseaseType().subscribe(
        response => {
          let ex_data:DiseaseTypeItem[]=[];
          for(let i=0; i<response.data.length; i++){
            ex_data.push({id: response.data[i].id, description: response.data[i].description});
          }
          this.dataSource = new DiseaseTypeDataSource(ex_data);
        }
      );
  }
  insertFunc(data: string, data2:string){
    this.appService.insertDiseaseType(data, data2).subscribe();
    this.update();
   }
  deleteFunc(data: string, data2:string){
    this.appService.deleteDiseaseType(data, data2).subscribe();
    this.update();
  }
  updateFunc(data: string, data2:string, data3: string, data4:string){
    this.appService.updateDiseaseType(data,data2,data3,data4).subscribe();
    this.update();
  }
    ngAfterViewInit(): void {
      this.table.dataSource = this.dataSource;
    }
}
