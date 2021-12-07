import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PublicServantDataSource, PublicServantItem } from './public-servant-datasource';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
@Component({
  selector: 'app-public-servant',
  templateUrl: './public-servant.component.html',
  styleUrls: ['./public-servant.component.css']
})
export class PublicServantComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<PublicServantItem>;
  dataSource!: PublicServantDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['email', 'degree'];
  constructor(public appService: AppService) {
    this.update();
  }
  update(){
    this.appService.getps().subscribe(
      response => {
        let ex_data:PublicServantItem[]=[];
        for(let i=0; i<response.data.length; i++){
          ex_data.push({email: response.data[i].email, degree: response.data[i].department});
        }
        this.dataSource = new PublicServantDataSource(ex_data);
      }
    );
  }
  insertFunc(data: string, data2:string){
    this.appService.insertps(data, data2).subscribe();
    this.update();
   }
  deleteFunc(data: string, data2:string){
    this.appService.deleteps(data, data2).subscribe();
    this.update();
  }
  updateFunc(data: string, data2:string, data3: string, data4:string){
    this.appService.updateps(data,data2,data3,data4).subscribe();
    this.update();
  }
  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }
}
