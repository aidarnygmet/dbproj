import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
// TODO: Replace this with your own data model type
export interface CountryItem {
  name: string;
  id: number;
}

// TODO: replace this with real data from your application


/**
 * Data source for the Country view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CountryDataSource extends DataSource<CountryItem> {
  data!: CountryItem[];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(dataS: CountryItem[]) {
    super();
    this.data=dataS;

  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<CountryItem[]> {
    return observableOf(this.data);
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

}
