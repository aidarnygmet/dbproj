import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DiscoverItem {
  cname: string;
  disease_code: string;
  first_enc_date: Date;
}

// TODO: replace this with real data from your application


/**
 * Data source for the Discover view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DiscoverDataSource extends DataSource<DiscoverItem> {
  data!: DiscoverItem[];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(dataS: DiscoverItem[]) {
    super();
    this.data=dataS;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DiscoverItem[]> {
    return observableOf(this.data);
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}


}
