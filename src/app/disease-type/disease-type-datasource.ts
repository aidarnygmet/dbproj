import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DiseaseTypeItem {
  id: number;
  description: string;
}


/**
 * Data source for the DiseaseType view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DiseaseTypeDataSource extends DataSource<DiseaseTypeItem> {
  data!: DiseaseTypeItem[];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(dataS: DiseaseTypeItem[]) {
    super();
    this.data=dataS;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DiseaseTypeItem[]> {
    return observableOf(this.data);
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
