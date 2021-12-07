import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DiseaseDataSource, DiseaseItem } from './disease-datasource';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<DiseaseItem>;
  dataSource!: DiseaseDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['disease_code', 'pathogen', 'description', 'id'];

  constructor(public appService: AppService) {
    this.update();
  }
  update(){
    this.appService.getDisease().subscribe(
      response => {
        let ex_data:DiseaseItem[]=[];
        for(let i=0; i<response.data.length; i++){
          ex_data.push({disease_code: response.data[i].disease_code, pathogen: response.data[i].pathogen, description: response.data[i].description, id: response.data[i].id});
        }
        this.dataSource = new DiseaseDataSource(ex_data);
      }
    );
  }
  insertFunc(data: string, data2:string, data3:string, data4:string){
    this.appService.insertDisease(data, data2, data3, data4).subscribe();
    this.update();
   }
  deleteFunc(data: string, data2:string){
    this.appService.deleteDisease(data, data2).subscribe();
    this.update();
  }
  updateFunc(data: string, data2:string, data3: string, data4:string){
    this.appService.updateDisease(data,data2,data3,data4).subscribe();
    this.update();
  }
  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }
}
