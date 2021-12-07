import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UserDataSource, UserItem } from './user-datasource';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<UserItem>;
  dataSource!: UserDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['email', 'name', 'surname', 'salary', 'phone', 'cname'];

  constructor(public appService: AppService) {
    this.update();
  }
  update(){
    this.appService.getUser().subscribe(
      response => {
        let ex_data:UserItem[]=[];
        for(let i=0; i<response.data.length; i++){
          ex_data.push({email: response.data[i].email, name: response.data[i].name, surname: response.data[i].surname, salary: response.data[i].salary, phone: response.data[i].phone, cname: response.data[i].cname});
        }
        this.dataSource = new UserDataSource(ex_data);
      }
    );
  }
  insertFunc(data: string, data2:string, data3:string, data4:string, data5:string, data6:string){
    this.appService.insertUser(data, data2,data3, data4,data5, data6).subscribe();
    this.update();
   }
  deleteFunc(data: string, data2:string){
    this.appService.deleteUser(data, data2).subscribe();
    this.update();
  }
  updateFunc(data: string, data2:string, data3: string, data4:string){
    this.appService.updateUser(data,data2,data3,data4).subscribe();
    this.update();
  }
  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }
}
