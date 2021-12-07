import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CountryDataSource, CountryItem } from './country-datasource';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<CountryItem>;
  dataSource!: CountryDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'id'];

  constructor(public appService: AppService) {
    this.update();
  }
  update(){
    this.appService.getCountry().subscribe(
      response => {
        let ex_data:CountryItem[]=[];
        for(let i=0; i<response.data.length; i++){
          ex_data.push({name: response.data[i].cname, id: response.data[i].population});
        }
        this.dataSource = new CountryDataSource(ex_data);
      }
    );
  }
  insertFunc(data: string, data2:string){
    this.appService.insertCountry(data, data2).subscribe();
    this.update();
   }
  deleteFunc(data: string, data2:string){
    this.appService.deleteCountry(data, data2).subscribe();
    this.update();
  }
  updateFunc(data: string, data2:string, data3: string, data4:string){
    this.appService.updateCountry(data,data2,data3,data4).subscribe();
    this.update();
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }
}
