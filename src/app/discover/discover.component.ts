import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DiscoverDataSource, DiscoverItem } from './discover-datasource';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<DiscoverItem>;
  dataSource!: DiscoverDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['cname', 'disease_code', 'first_enc_date'];

  constructor(public appService: AppService) {
    this.update();
  }
  update(){
    this.appService.getDiscover().subscribe(
      response => {
        let ex_data:DiscoverItem[]=[];
        for(let i=0; i<response.data.length; i++){
          ex_data.push({cname: response.data[i].cname, disease_code: response.data[i].disease_code, first_enc_date: response.data[i].first_enc_date});
        }
        this.dataSource = new DiscoverDataSource(ex_data);
      }
    );
  }
  insertFunc(data: string, data2:string, data3:string){
    this.appService.insertDiscover(data, data2, data3).subscribe();
    this.update();
   }
  deleteFunc(data: string, data2:string){
    this.appService.deleteDiscover(data, data2).subscribe();
    this.update();
  }
  updateFunc(data: string, data2:string, data3: string, data4:string){
    this.appService.updateDiscover(data,data2,data3,data4).subscribe();
    this.update();
  }
  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }
}
